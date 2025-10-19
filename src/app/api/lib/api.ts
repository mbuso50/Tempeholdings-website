// Types
export interface Review {
    id: number;
    business: string;
    rating: number;
    author: string;
    date: string;
    title: string;
    content: string;
    category: string;
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

// API Base URL
const API_BASE = '/api/reviews';

// Generic fetch function
async function fetchAPI(endpoint: string, options: RequestInit = {}) {
    const response = await fetch(`${API_BASE}${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
        ...options,
    });

    if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
    }

    return response.json();
}

// Review API functions
export const reviewsAPI = {
    getAll: (): Promise<Review[]> =>
        fetchAPI('?type=reviews'),

    getById: (id: number): Promise<Review> =>
        fetchAPI(`?type=reviews&id=${id}`),

    create: (reviewData: Omit<Review, 'id' | 'date'>): Promise<Review> =>
        fetchAPI('', {
            method: 'POST',
            body: JSON.stringify({ type: 'review', data: reviewData }),
        }),

    update: (id: number, reviewData: Partial<Review>): Promise<Review> =>
        fetchAPI('', {
            method: 'PUT',
            body: JSON.stringify({ type: 'review', id, data: reviewData }),
        }),

    delete: (id: number): Promise<{ message: string }> =>
        fetchAPI(`?type=review&id=${id}`, { method: 'DELETE' }),
};

// Business API functions
export const businessesAPI = {
    getAll: (): Promise<Business[]> =>
        fetchAPI('?type=businesses'),

    getById: (id: number): Promise<Business> =>
        fetchAPI(`?type=businesses&id=${id}`),

    create: (businessData: Omit<Business, 'id'>): Promise<Business> =>
        fetchAPI('', {
            method: 'POST',
            body: JSON.stringify({ type: 'business', data: businessData }),
        }),

    update: (id: number, businessData: Partial<Business>): Promise<Business> =>
        fetchAPI('', {
            method: 'PUT',
            body: JSON.stringify({ type: 'business', id, data: businessData }),
        }),

    delete: (id: number): Promise<{ message: string }> =>
        fetchAPI(`?type=business&id=${id}`, { method: 'DELETE' }),
};

// Combined API functions
export const marketAPI = {
    getDashboard: (): Promise<{ reviews: Review[]; businesses: Business[] }> =>
        fetchAPI(''),

    search: async (query: string, category?: string): Promise<{ reviews: Review[]; businesses: Business[] }> => {
        const [reviews, businesses] = await Promise.all([
            reviewsAPI.getAll(),
            businessesAPI.getAll(),
        ]);

        const filteredReviews = reviews.filter(review =>
            review.business.toLowerCase().includes(query.toLowerCase()) ||
            review.title.toLowerCase().includes(query.toLowerCase()) ||
            review.content.toLowerCase().includes(query.toLowerCase()) ||
            (category && review.category.toLowerCase() === category.toLowerCase())
        );

        const filteredBusinesses = businesses.filter(business =>
            business.name.toLowerCase().includes(query.toLowerCase()) ||
            business.description.toLowerCase().includes(query.toLowerCase()) ||
            (category && business.category.toLowerCase() === category.toLowerCase())
        );

        return { reviews: filteredReviews, businesses: filteredBusinesses };
    },
};