import { NextRequest, NextResponse } from 'next/server';

// Types
interface Review {
    id: number;
    business: string;
    rating: number;
    author: string;
    date: string;
    title: string;
    content: string;
    category: string;
}

interface Business {
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

// Sample data - using let so we can modify it
const reviews: Review[] = [
    {
        id: 1,
        business: 'Tempe Holdings',
        rating: 5,
        author: 'Thabo M.',
        date: '18 October 2025 at 2:30pm',
        title: 'Exceptional Township Market Insights',
        content: 'Tempe Holdings provided invaluable insights into the R900 billion township market. Their local expertise helped us connect authentically with our target audience.',
        category: 'Marketing Solutions'
    },
    {
        id: 2,
        business: 'Soweto Retail Hub',
        rating: 4,
        author: 'Lerato K.',
        date: '17 October 2025 at 4:15pm',
        title: 'Great shopping experience',
        content: 'Clean, safe, and well-organized retail space with good variety of stores.',
        category: 'Retail'
    },
    {
        id: 3,
        business: 'Jozi Auto Group',
        rating: 5,
        author: 'Sipho D.',
        date: '16 October 2025 at 11:20am',
        title: 'Professional service',
        content: 'Quick and efficient car service with fair pricing. Will definitely return.',
        category: 'Automotive'
    }
];

const businesses: Business[] = [
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
];

// GET - Fetch all data
export async function GET() {
    try {
        console.log('GET /api/reviews - Fetching data');
        return NextResponse.json({
            reviews: reviews,
            businesses: businesses
        });
    } catch (error) {
        console.error('API GET Error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch data' },
            { status: 500 }
        );
    }
}

// POST - Create new review or business
export async function POST(request: NextRequest) {
    try {
        console.log('POST /api/reviews - Received request');
        const body = await request.json();
        console.log('Request body:', body);

        const { type, data } = body;

        if (type === 'review') {
            console.log('Creating new review:', data);
            const newReview: Review = {
                id: reviews.length > 0 ? Math.max(...reviews.map(r => r.id)) + 1 : 1,
                ...data,
                date: new Date().toLocaleString('en-ZA', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true
                })
            };
            reviews.push(newReview);
            console.log('Review created successfully:', newReview);
            return NextResponse.json(newReview, { status: 201 });
        }

        if (type === 'business') {
            console.log('Creating new business:', data);
            const newBusiness: Business = {
                id: businesses.length > 0 ? Math.max(...businesses.map(b => b.id)) + 1 : 1,
                ...data
            };
            businesses.push(newBusiness);
            console.log('Business created successfully:', newBusiness);
            return NextResponse.json(newBusiness, { status: 201 });
        }

        console.error('Invalid type:', type);
        return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
    } catch (error) {
        console.error('API POST Error:', error);
        return NextResponse.json(
            { error: 'Failed to create data: ' + (error instanceof Error ? error.message : 'Unknown error') },
            { status: 500 }
        );
    }
}

// PUT - Update existing review or business
export async function PUT(request: NextRequest) {
    try {
        const body = await request.json();
        const { type, id, data } = body;

        if (type === 'review') {
            const index = reviews.findIndex(r => r.id === id);
            if (index === -1) {
                return NextResponse.json({ error: 'Review not found' }, { status: 404 });
            }
            reviews[index] = { ...reviews[index], ...data };
            return NextResponse.json(reviews[index]);
        }

        if (type === 'business') {
            const index = businesses.findIndex(b => b.id === id);
            if (index === -1) {
                return NextResponse.json({ error: 'Business not found' }, { status: 404 });
            }
            businesses[index] = { ...businesses[index], ...data };
            return NextResponse.json(businesses[index]);
        }

        return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
    } catch (error) {
        console.error('API PUT Error:', error);
        return NextResponse.json({ error: 'Failed to update data' }, { status: 500 });
    }
}

// DELETE - Remove review or business
export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const type = searchParams.get('type');
        const id = searchParams.get('id');

        if (!type || !id) {
            return NextResponse.json({ error: 'Type and ID are required' }, { status: 400 });
        }

        if (type === 'review') {
            const index = reviews.findIndex(r => r.id === parseInt(id));
            if (index === -1) {
                return NextResponse.json({ error: 'Review not found' }, { status: 404 });
            }
            reviews.splice(index, 1);
            return NextResponse.json({ message: 'Review deleted successfully' });
        }

        if (type === 'business') {
            const index = businesses.findIndex(b => b.id === parseInt(id));
            if (index === -1) {
                return NextResponse.json({ error: 'Business not found' }, { status: 404 });
            }
            businesses.splice(index, 1);
            return NextResponse.json({ message: 'Business deleted successfully' });
        }

        return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
    } catch (error) {
        console.error('API DELETE Error:', error);
        return NextResponse.json({ error: 'Failed to delete data' }, { status: 500 });
    }
}