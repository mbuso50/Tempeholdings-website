"use client";

import { Header } from '../components/Sections/Header';
import { Footer } from '../components/Sections/Footer';
import { Toaster } from '../components/common/feedback/sonner';
import dynamic from 'next/dynamic';
import React from 'react';

const MarketReview = dynamic(() => import('../components/Sections/market-review'), {
    ssr: false,
    loading: () => (
        <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Loading market intelligence...</p>
            </div>
        </div>
    ),
});

export default function MarketReviewsPage() {
    return (
        <div className="min-h-screen bg-gray-400">
            <Header
                disabledButtons={['services', 'work', 'clients', 'about', 'market intelligence', "let's talk"]}
                textColor="dark"
            />
            <MarketReview />
            <Footer />
            <Toaster position="top-right" richColors />
        </div>
    );
}