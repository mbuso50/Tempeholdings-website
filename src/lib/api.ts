// Use inline data to avoid JSON import issues
const initialMarketData = {
    reviews: [
        {
            id: 1,
            business: "Tech Solutions Inc",
            rating: 5,
            author: "John Doe",
            date: "2024-01-15",
            title: "Excellent Service",
            content: "Great company with amazing customer service.",
            category: "Technology"
        },
        {
            id: 2,
            business: "Marketing Pro",
            rating: 4,
            author: "Jane Smith",
            date: "2024-01-10",
            title: "Good Results",
            content: "They delivered what was promised.",
            category: "Marketing"
        }
    ],
    businesses: [
        {
            id: 1,
            name: "Tech Solutions Inc",
            category: "Technology",
            rating: 4.8,
            reviews: 24,
            trustIndex: 95,
            rank: 1,
            logo: "/logos/tech-solutions.png",
            description: "Leading technology solutions provider",
            recommend: "Highly recommended for IT services"
        },
        {
            id: 2,
            name: "Marketing Pro",
            category: "Marketing",
            rating: 4.5,
            reviews: 18,
            trustIndex: 92,
            rank: 2,
            logo: "/logos/marketing-pro.png",
            description: "Digital marketing experts",
            recommend: "Great for online marketing campaigns"
        }
    ]
};

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

export interface MarketData {
    reviews: Review[];
    businesses: Business[];
}

// For development - using localStorage as primary storage
const isBrowser = typeof window !== 'undefined';

// Browser-friendly data storage
function getStoredData(): MarketData {
    if (!isBrowser) {
        return initialMarketData;
    }

    try {
        const stored = localStorage.getItem('market-data');
        if (stored) {
            return JSON.parse(stored);
        }
        // Initialize with default data if nothing in storage
        localStorage.setItem('market-data', JSON.stringify(initialMarketData));
        return initialMarketData;
    } catch {
        console.error('Error reading from localStorage');
        return initialMarketData;
    }
}

function setStoredData(data: MarketData): void {
    if (!isBrowser) return;

    try {
        localStorage.setItem('market-data', JSON.stringify(data));
    } catch {
        console.error('Error writing to localStorage');
    }
}

// Review API functions
export const reviewsAPI = {
    getAll: async (): Promise<Review[]> => {
        const data = getStoredData();
        return data.reviews;
    },

    getById: async (id: number): Promise<Review | null> => {
        const reviews = await reviewsAPI.getAll();
        return reviews.find(review => review.id === id) || null;
    },

    create: async (reviewData: Omit<Review, 'id' | 'date'>): Promise<Review> => {
        const reviews = await reviewsAPI.getAll();
        const newReview: Review = {
            ...reviewData,
            id: Date.now(), // Simple ID generation
            date: new Date().toISOString().split('T')[0] // YYYY-MM-DD format
        };

        const updatedReviews = [...reviews, newReview];
        const currentData = getStoredData();
        setStoredData({
            ...currentData,
            reviews: updatedReviews
        });

        return newReview;
    },

    update: async (id: number, reviewData: Partial<Review>): Promise<Review | null> => {
        const reviews = await reviewsAPI.getAll();
        const index = reviews.findIndex(review => review.id === id);

        if (index === -1) return null;

        const updatedReview = { ...reviews[index], ...reviewData };
        const updatedReviews = [...reviews];
        updatedReviews[index] = updatedReview;

        const currentData = getStoredData();
        setStoredData({
            ...currentData,
            reviews: updatedReviews
        });

        return updatedReview;
    },

    delete: async (id: number): Promise<boolean> => {
        const reviews = await reviewsAPI.getAll();
        const filteredReviews = reviews.filter(review => review.id !== id);

        if (reviews.length === filteredReviews.length) return false;

        const currentData = getStoredData();
        setStoredData({
            ...currentData,
            reviews: filteredReviews
        });

        return true;
    },
};

// Business API functions
export const businessesAPI = {
    getAll: async (): Promise<Business[]> => {
        const data = getStoredData();
        return data.businesses;
    },

    getById: async (id: number): Promise<Business | null> => {
        const businesses = await businessesAPI.getAll();
        return businesses.find(business => business.id === id) || null;
    },

    create: async (businessData: Omit<Business, 'id'>): Promise<Business> => {
        const businesses = await businessesAPI.getAll();
        const newBusiness: Business = {
            ...businessData,
            id: Date.now() // Simple ID generation
        };

        const updatedBusinesses = [...businesses, newBusiness];
        const currentData = getStoredData();
        setStoredData({
            ...currentData,
            businesses: updatedBusinesses
        });

        return newBusiness;
    },

    update: async (id: number, businessData: Partial<Business>): Promise<Business | null> => {
        const businesses = await businessesAPI.getAll();
        const index = businesses.findIndex(business => business.id === id);

        if (index === -1) return null;

        const updatedBusiness = { ...businesses[index], ...businessData };
        const updatedBusinesses = [...businesses];
        updatedBusinesses[index] = updatedBusiness;

        const currentData = getStoredData();
        setStoredData({
            ...currentData,
            businesses: updatedBusinesses
        });

        return updatedBusiness;
    },

    delete: async (id: number): Promise<boolean> => {
        const businesses = await businessesAPI.getAll();
        const filteredBusinesses = businesses.filter(business => business.id !== id);

        if (businesses.length === filteredBusinesses.length) return false;

        const currentData = getStoredData();
        setStoredData({
            ...currentData,
            businesses: filteredBusinesses
        });

        return true;
    },
};

// Combined API functions
export const marketAPI = {
    getDashboard: async (): Promise<{ reviews: Review[]; businesses: Business[] }> => {
        const [reviews, businesses] = await Promise.all([
            reviewsAPI.getAll(),
            businessesAPI.getAll(),
        ]);
        return { reviews, businesses };
    },

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