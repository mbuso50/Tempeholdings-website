// API utility functions and types

export interface Review {
    id: number;
    business: string;
    rating: number;
    author: string;
    title: string;
    content: string;
    category: string;
    date: string;
}

export interface Business {
    id: number;
    name: string;
    category: string;
    rating: number;
    reviews: number;
    trustIndex: number;
    rank: number;
    logo: string;
    description: string;
    recommend: string;
}

export interface DashboardData {
    businesses: Business[];
    reviews: Review[];
}

export interface SearchResults {
    businesses: Business[];
    reviews: Review[];
}

// Mock data for fallback
const mockData: DashboardData = {
    businesses: [
        {
            id: 1,
            name: 'Tempe Holdings',
            category: 'Marketing Solutions',
            rating: 4.9,
            reviews: 200,
            trustIndex: 10.0,
            rank: 1,
            logo: '/12.JPG',
            description: 'Leading township marketing experts since 2012',
            recommend: 'Very Likely'
        },
        {
            id: 2,
            name: 'Soweto Retail Hub',
            category: 'Retail',
            rating: 4.7,
            reviews: 156,
            trustIndex: 9.8,
            rank: 2,
            logo: '/21.JPG',
            description: 'Premier shopping destination in Soweto',
            recommend: 'Very Likely'
        },
        {
            id: 3,
            name: 'Jozi Auto Group',
            category: 'Automotive',
            rating: 4.5,
            reviews: 89,
            trustIndex: 9.5,
            rank: 3,
            logo: '/123.JPG',
            description: 'Trusted automotive services',
            recommend: 'Likely'
        }
    ],
    reviews: [
        {
            id: 1,
            business: 'Tempe Holdings',
            rating: 5,
            author: 'Thabo M.',
            title: 'Exceptional Township Market Insights',
            content: 'Tempe Holdings provided invaluable insights into the R900 billion township market. Their local expertise helped us connect authentically with our target audience.',
            category: 'Marketing Solutions',
            date: '18 October 2025 at 2:30pm'
        },
        {
            id: 2,
            business: 'Soweto Retail Hub',
            rating: 4,
            author: 'Lerato K.',
            title: 'Great shopping experience',
            content: 'Clean, safe, and well-organized retail space with good variety of stores.',
            category: 'Retail',
            date: '17 October 2025 at 4:15pm'
        },
        {
            id: 3,
            business: 'Jozi Auto Group',
            rating: 5,
            author: 'Sipho D.',
            title: 'Professional service',
            content: 'Quick and efficient car service with fair pricing. Will definitely return.',
            category: 'Automotive',
            date: '16 October 2025 at 11:20am'
        }
    ]
};

// API functions with fallback to mock data
export const marketAPI = {
    async getDashboard(): Promise<DashboardData> {
        try {
            console.log('Fetching dashboard data...');
            const response = await fetch('/api/reviews', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                console.warn(`API returned status: ${response.status}`);
                // Return mock data as fallback
                return mockData;
            }

            const data = await response.json();
            console.log('Dashboard data fetched successfully');
            return data;
        } catch (error) {
            console.warn('API call failed, using mock data:', error);
            // Return mock data as fallback
            return mockData;
        }
    },

    async search(query: string, category?: string): Promise<SearchResults> {
        try {
            const dashboardData = await this.getDashboard();

            const filteredBusinesses = dashboardData.businesses.filter(business =>
                business.name.toLowerCase().includes(query.toLowerCase()) &&
                (!category || business.category.toLowerCase() === category.toLowerCase())
            );

            const filteredReviews = dashboardData.reviews.filter(review =>
                review.business.toLowerCase().includes(query.toLowerCase()) &&
                (!category || review.category.toLowerCase() === category.toLowerCase())
            );

            return {
                businesses: filteredBusinesses,
                reviews: filteredReviews
            };
        } catch (error) {
            console.error('Search failed:', error);
            return {
                businesses: [],
                reviews: []
            };
        }
    }
};

export const reviewsAPI = {
    async create(reviewData: Omit<Review, 'id' | 'date'>): Promise<Review> {
        try {
            console.log('Creating review:', reviewData);

            const response = await fetch('/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'review',
                    data: reviewData
                }),
            });

            console.log('Response status:', response.status);

            if (!response.ok) {
                const errorText = await response.text();
                console.error('API Error Response:', errorText);
                throw new Error(`Failed to create review: ${response.status} - ${errorText}`);
            }

            const result = await response.json();
            console.log('Review created successfully:', result);
            return result;
        } catch (error) {
            console.error('Create review failed:', error);
            throw error;
        }
    },

    async update(id: number, reviewData: Partial<Review>): Promise<Review> {
        try {
            const response = await fetch('/api/reviews', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'review',
                    id: id,
                    data: reviewData
                }),
            });

            if (!response.ok) {
                throw new Error(`Failed to update review: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Update review failed:', error);
            throw error;
        }
    },

    async delete(id: number): Promise<void> {
        try {
            const response = await fetch(`/api/reviews?type=review&id=${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`Failed to delete review: ${response.status}`);
            }
        } catch (error) {
            console.error('Delete review failed:', error);
            throw error;
        }
    }
};

export const businessesAPI = {
    async create(businessData: Omit<Business, 'id'>): Promise<Business> {
        try {
            console.log('Creating business:', businessData);

            const response = await fetch('/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'business',
                    data: businessData
                }),
            });

            console.log('Response status:', response.status);

            if (!response.ok) {
                const errorText = await response.text();
                console.error('API Error Response:', errorText);
                throw new Error(`Failed to create business: ${response.status} - ${errorText}`);
            }

            const result = await response.json();
            console.log('Business created successfully:', result);
            return result;
        } catch (error) {
            console.error('Create business failed:', error);
            throw error;
        }
    },

    async update(id: number, businessData: Partial<Business>): Promise<Business> {
        try {
            const response = await fetch('/api/reviews', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'business',
                    id: id,
                    data: businessData
                }),
            });

            if (!response.ok) {
                throw new Error(`Failed to update business: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Update business failed:', error);
            throw error;
        }
    },

    async delete(id: number): Promise<void> {
        try {
            const response = await fetch(`/api/reviews?type=business&id=${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`Failed to delete business: ${response.status}`);
            }
        } catch (error) {
            console.error('Delete business failed:', error);
            throw error;
        }
    }
};

// Export a default API object for convenience
export const api = {
    reviews: reviewsAPI,
    businesses: businessesAPI,
    market: marketAPI
};

export default api;