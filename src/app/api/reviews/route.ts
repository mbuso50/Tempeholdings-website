import { NextResponse } from 'next/server';
import { reviewsAPI, businessesAPI } from '@/lib/api';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const id = searchParams.get('id');

    try {
        if (type === 'reviews') {
            if (id) {
                const review = await reviewsAPI.getById(Number(id));
                return NextResponse.json(review);
            } else {
                const reviews = await reviewsAPI.getAll();
                return NextResponse.json(reviews);
            }
        } else if (type === 'businesses') {
            if (id) {
                const business = await businessesAPI.getById(Number(id));
                return NextResponse.json(business);
            } else {
                const businesses = await businessesAPI.getAll();
                return NextResponse.json(businesses);
            }
        } else {
            // Return dashboard data
            const [reviews, businesses] = await Promise.all([
                reviewsAPI.getAll(),
                businessesAPI.getAll(),
            ]);
            return NextResponse.json({ reviews, businesses });
        }
    } catch {
        return NextResponse.json(
            { error: 'Failed to fetch data' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { type, data, id } = body;

        if (type === 'review') {
            if (id) {
                // Update existing review
                const updatedReview = await reviewsAPI.update(id, data);
                return NextResponse.json(updatedReview);
            } else {
                // Create new review
                const newReview = await reviewsAPI.create(data);
                return NextResponse.json(newReview, { status: 201 });
            }
        } else if (type === 'business') {
            if (id) {
                // Update existing business
                const updatedBusiness = await businessesAPI.update(id, data);
                return NextResponse.json(updatedBusiness);
            } else {
                // Create new business
                const newBusiness = await businessesAPI.create(data);
                return NextResponse.json(newBusiness, { status: 201 });
            }
        } else {
            return NextResponse.json(
                { error: 'Invalid type specified' },
                { status: 400 }
            );
        }
    } catch {
        return NextResponse.json(
            { error: 'Failed to process request' },
            { status: 500 }
        );
    }
}

// Add DELETE method for completeness
export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const id = searchParams.get('id');

    if (!type || !id) {
        return NextResponse.json(
            { error: 'Type and ID parameters are required' },
            { status: 400 }
        );
    }

    try {
        let success = false;

        if (type === 'review') {
            success = await reviewsAPI.delete(Number(id));
        } else if (type === 'business') {
            success = await businessesAPI.delete(Number(id));
        } else {
            return NextResponse.json(
                { error: 'Invalid type specified' },
                { status: 400 }
            );
        }

        if (success) {
            return NextResponse.json({ message: 'Deleted successfully' });
        } else {
            return NextResponse.json(
                { error: 'Item not found' },
                { status: 404 }
            );
        }
    } catch {
        return NextResponse.json(
            { error: 'Failed to delete item' },
            { status: 500 }
        );
    }
}