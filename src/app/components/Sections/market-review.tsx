"use client";

import { useState, useEffect } from 'react';
import { Search, Star, TrendingUp, Users, Award, MapPin, Plus, Edit, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { reviewsAPI, businessesAPI, marketAPI, Review, Business } from '@/lib/api';
import React from 'react';

export default function MarketReview() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [featuredBusinesses, setFeaturedBusinesses] = useState<Business[]>([]);
    const [recentReviews, setRecentReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [showAddForm, setShowAddForm] = useState(false);
    const [formType, setFormType] = useState<'review' | 'business'>('review');
    const [editingItem, setEditingItem] = useState<Review | Business | null>(null);


    const categories = [
        'All',
        'Insurance',
        'Retail',
        'Automotive',
        'Financial Services',
        'Telecoms',
        'Education',
        'Healthcare'
    ];

    const stats = [
        { icon: Users, value: '10M+', label: 'Population Reach' },
        { icon: TrendingUp, value: 'R900B', label: 'Market Value' },
        { icon: Award, value: '21%', label: 'Market Penetration' },
        { icon: MapPin, value: '9 Cities', label: 'Across SA' }
    ];

    // Load data on component mount
    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            setLoading(true);
            const data = await marketAPI.getDashboard();
            setFeaturedBusinesses(data.businesses);
            setRecentReviews(data.reviews);
        } catch (error) {
            console.error('Failed to load data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async () => {
        try {
            setLoading(true);
            const results = await marketAPI.search(searchQuery, selectedCategory === 'all' ? undefined : selectedCategory);
            setFeaturedBusinesses(results.businesses);
            setRecentReviews(results.reviews);
        } catch (error) {
            console.error('Search failed:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddReview = async (reviewData: Omit<Review, 'id' | 'date'>) => {
        try {
            await reviewsAPI.create(reviewData);
            await loadData();
            setShowAddForm(false);
            alert('Review added successfully!');
        } catch (error) {
            console.error('Failed to add review:', error);
            alert('Failed to add review. Please try again.');
        }
    };

    const handleAddBusiness = async (businessData: Omit<Business, 'id'>) => {
        try {
            await businessesAPI.create(businessData);
            await loadData();
            setShowAddForm(false);
            alert('Business added successfully!');
        } catch (error) {
            console.error('Failed to add business:', error);
            alert('Failed to add business. Please try again.');
        }
    };

    const handleEdit = (item: Review | Business, type: 'review' | 'business') => {
        setEditingItem(item);
        setFormType(type);
        setShowAddForm(true);
    };

    const handleUpdate = async (data: Partial<Review> | Partial<Business>) => {
        if (!editingItem) return;

        try {
            if (formType === 'review') {
                await reviewsAPI.update(editingItem.id, data as Partial<Review>);
            } else {
                await businessesAPI.update(editingItem.id, data as Partial<Business>);
            }
            await loadData();
            setShowAddForm(false);
            setEditingItem(null);
            alert('Item updated successfully!');
        } catch (error) {
            console.error('Failed to update:', error);
            alert('Failed to update. Please try again.');
        }
    };

    const handleDelete = async (id: number, type: 'review' | 'business') => {
        if (!confirm('Are you sure you want to delete this item?')) return;

        try {
            if (type === 'review') {
                await reviewsAPI.delete(id);
            } else {
                await businessesAPI.delete(id);
            }
            await loadData();
            alert('Item deleted successfully!');
        } catch (error) {
            console.error('Failed to delete:', error);
            alert('Failed to delete. Please try again.');
        }
    };

    // Add/Edit Form Component
    const AddEditForm = () => {
        const [formData, setFormData] = useState({
            business: editingItem && 'business' in editingItem ? (editingItem as Review).business : '',
            rating: editingItem && 'rating' in editingItem ? (editingItem as Review | Business).rating : 5,
            author: editingItem && 'author' in editingItem ? (editingItem as Review).author : '',
            title: editingItem && 'title' in editingItem ? (editingItem as Review).title : '',
            content: editingItem && 'content' in editingItem ? (editingItem as Review).content : '',
            category: editingItem && 'category' in editingItem ? (editingItem as Review | Business).category : '',
            // Business fields
            name: editingItem && 'name' in editingItem ? (editingItem as Business).name : '',
            reviews: editingItem && 'reviews' in editingItem ? (editingItem as Business).reviews : 0,
            trustIndex: editingItem && 'trustIndex' in editingItem ? (editingItem as Business).trustIndex : 0,
            rank: editingItem && 'rank' in editingItem ? (editingItem as Business).rank : 0,
            logo: editingItem && 'logo' in editingItem ? (editingItem as Business).logo : '',
            description: editingItem && 'description' in editingItem ? (editingItem as Business).description : '',
            recommend: editingItem && 'recommend' in editingItem ? (editingItem as Business).recommend : 'Likely',
        });

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();

            if (formType === 'review') {
                const reviewData: Omit<Review, 'id' | 'date'> = {
                    business: formData.business,
                    rating: formData.rating,
                    author: formData.author,
                    title: formData.title,
                    content: formData.content,
                    category: formData.category,
                };

                if (editingItem) {
                    handleUpdate(reviewData);
                } else {
                    handleAddReview(reviewData);
                }
            } else {
                const businessData: Omit<Business, 'id'> = {
                    name: formData.name,
                    category: formData.category,
                    rating: formData.rating,
                    reviews: formData.reviews,
                    trustIndex: formData.trustIndex,
                    rank: formData.rank,
                    logo: formData.logo,
                    description: formData.description,
                    recommend: formData.recommend,
                };

                if (editingItem) {
                    handleUpdate(businessData);
                } else {
                    handleAddBusiness(businessData);
                }
            }
        };

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl p-4 sm:p-6 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                    <h3 className="text-lg sm:text-xl font-bold mb-4">
                        {editingItem ? 'Edit' : 'Add New'} {formType === 'review' ? 'Review' : 'Business'}
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                        {formType === 'review' ? (
                            <>
                                <input
                                    type="text"
                                    placeholder="Business Name"
                                    value={formData.business}
                                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                                    className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.author}
                                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                                    className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Review Title"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                                    required
                                />
                                <textarea
                                    placeholder="Review Content"
                                    value={formData.content}
                                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                    className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                                    rows={3}
                                    required
                                />
                                <select
                                    value={formData.rating}
                                    onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                                    className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                                >
                                    {[1, 2, 3, 4, 5].map(num => (
                                        <option key={num} value={num}>{num} Stars</option>
                                    ))}
                                </select>
                                <input
                                    type="text"
                                    placeholder="Category"
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                                    required
                                />
                            </>
                        ) : (
                            <>
                                <input
                                    type="text"
                                    placeholder="Business Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Category"
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                                    required
                                />
                                <input
                                    type="number"
                                    step="0.1"
                                    min="1"
                                    max="5"
                                    placeholder="Rating"
                                    value={formData.rating}
                                    onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) })}
                                    className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                                    required
                                />
                                <input
                                    type="number"
                                    placeholder="Number of Reviews"
                                    value={formData.reviews}
                                    onChange={(e) => setFormData({ ...formData, reviews: parseInt(e.target.value) })}
                                    className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                                    required
                                />
                                <input
                                    type="number"
                                    step="0.1"
                                    placeholder="Trust Index"
                                    value={formData.trustIndex}
                                    onChange={(e) => setFormData({ ...formData, trustIndex: parseFloat(e.target.value) })}
                                    className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                                    required
                                />
                                <input
                                    type="number"
                                    placeholder="Rank"
                                    value={formData.rank}
                                    onChange={(e) => setFormData({ ...formData, rank: parseInt(e.target.value) })}
                                    className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Logo URL"
                                    value={formData.logo}
                                    onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                                    className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                                />
                                <textarea
                                    placeholder="Description"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                                    rows={2}
                                    required
                                />
                                <select
                                    value={formData.recommend}
                                    onChange={(e) => setFormData({ ...formData, recommend: e.target.value })}
                                    className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                                >
                                    <option value="Very Likely">Very Likely</option>
                                    <option value="Likely">Likely</option>
                                    <option value="Neutral">Neutral</option>
                                </select>
                            </>
                        )}

                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
                            <button
                                type="submit"
                                className="flex-1 bg-blue-600 text-white py-2 sm:py-3 rounded text-sm sm:text-base hover:bg-blue-700"
                            >
                                {editingItem ? 'Update' : 'Add'}
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setShowAddForm(false);
                                    setEditingItem(null);
                                }}
                                className="flex-1 bg-gray-500 text-white py-2 sm:py-3 rounded text-sm sm:text-base hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    // Admin Controls Component
    const AdminControls = () => (
        <div className="flex flex-col sm:flex-row gap-2 mb-4 sm:justify-end">
            <button
                onClick={() => {
                    setFormType('review');
                    setEditingItem(null);
                    setShowAddForm(true);
                }}
                className="bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 text-sm sm:text-base"
            >
                <Plus size={14} />
                Add Review
            </button>
            <button
                onClick={() => {
                    setFormType('business');
                    setEditingItem(null);
                    setShowAddForm(true);
                }}
                className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 text-sm sm:text-base"
            >
                <Plus size={14} />
                Add Business
            </button>
        </div>
    );

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading market data...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-16 sm:pt-20">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Market Temperature
                    </h1>
                    <p className="text-base sm:text-xl text-blue-100 max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
                        Your trusted source for township market insights, business reviews, and consumer feedback across South Africa&apos;s R900 billion township economy.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto relative px-2">
                        <div className="relative">
                            <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-600 w-4 h-4 sm:w-5 sm:h-5" />
                            <input
                                type="text"
                                placeholder="Find trusted township businesses..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                                className="w-full pl-8 sm:pl-12 pr-24 sm:pr-32 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white text-gray-900 placeholder-gray-600 border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-lg text-sm sm:text-base"
                            />
                            <button
                                onClick={handleSearch}
                                className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-colors font-semibold shadow-lg text-sm sm:text-base"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-white py-8 sm:py-12 border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-2 sm:mb-3" />
                                <div className="text-lg sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                                <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="bg-white py-6 sm:py-8 border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category.toLowerCase())}
                                className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full transition-all text-xs sm:text-sm ${selectedCategory === category.toLowerCase()
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Businesses */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 sm:mb-12 gap-4">
                    <div className="text-center sm:text-left flex-1">
                        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
                            Top-Rated Township Businesses
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto sm:mx-0">
                            These companies are actively engaging with their customers and leading in their respective industries.
                        </p>
                    </div>
                    <AdminControls />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {featuredBusinesses.map((business) => (
                        <div key={business.id} className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-4 sm:p-6 relative">
                            {/* Admin controls */}
                            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex gap-1 sm:gap-2">
                                <button
                                    onClick={() => handleEdit(business, 'business')}
                                    className="bg-blue-600 text-white p-1 rounded hover:bg-blue-700"
                                >
                                    <Edit size={12} className="sm:w-3 sm:h-3" />
                                </button>
                                <button
                                    onClick={() => handleDelete(business.id, 'business')}
                                    className="bg-red-600 text-white p-1 rounded hover:bg-red-700"
                                >
                                    <Trash2 size={12} className="sm:w-3 sm:h-3" />
                                </button>
                            </div>

                            <div className="flex items-center justify-between mb-3 sm:mb-4">
                                <div className="flex items-center space-x-2 sm:space-x-4">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl overflow-hidden">
                                        <Image
                                            src={business.logo}
                                            alt={business.name}
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base sm:text-lg text-gray-900">{business.name}</h3>
                                        <p className="text-gray-500 text-xs sm:text-sm">{business.category}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-3 h-3 sm:w-4 sm:h-4 ${i < Math.floor(business.rating)
                                                    ? 'fill-yellow-400 text-yellow-400'
                                                    : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-600">{business.rating}/5</div>
                                </div>
                            </div>

                            <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                                <div className="flex justify-between text-xs sm:text-sm">
                                    <span className="text-gray-600">Reviews:</span>
                                    <span className="font-semibold">{business.reviews}</span>
                                </div>
                                <div className="flex justify-between text-xs sm:text-sm">
                                    <span className="text-gray-600">Rank:</span>
                                    <span className="font-semibold">#{business.rank} in {business.category}</span>
                                </div>
                                <div className="flex justify-between text-xs sm:text-sm">
                                    <span className="text-gray-600">TrustIndex:</span>
                                    <span className="font-semibold text-blue-600">{business.trustIndex}</span>
                                </div>
                            </div>

                            <div className="mb-3 sm:mb-4">
                                <span className="text-gray-600 text-xs sm:text-sm">Recommend:</span>
                                <span className="font-semibold ml-1 sm:ml-2 text-xs sm:text-sm">{business.recommend}</span>
                            </div>

                            <button className="w-full bg-blue-600 text-white py-2 rounded-lg sm:rounded-xl hover:bg-blue-700 transition-colors font-semibold text-sm sm:text-base">
                                WRITE A REVIEW
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Reviews */}
            <div className="bg-white py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
                            Recent Community Reviews
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base">
                            See what customers are saying about township businesses
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {recentReviews.map((review) => (
                            <div key={review.id} className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-md transition-shadow relative">
                                {/* Admin controls */}
                                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex gap-1 sm:gap-2">
                                    <button
                                        onClick={() => handleEdit(review, 'review')}
                                        className="bg-blue-600 text-white p-1 rounded hover:bg-blue-700"
                                    >
                                        <Edit size={12} className="sm:w-3 sm:h-3" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(review.id, 'review')}
                                        className="bg-red-600 text-white p-1 rounded hover:bg-red-700"
                                    >
                                        <Trash2 size={12} className="sm:w-3 sm:h-3" />
                                    </button>
                                </div>

                                <div className="flex items-center justify-between mb-3 sm:mb-4">
                                    <div>
                                        <h3 className="font-bold text-base sm:text-lg text-gray-900">{review.business}</h3>
                                        <p className="text-gray-500 text-xs sm:text-sm">{review.category}</p>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-3 h-3 sm:w-4 sm:h-4 ${i < review.rating
                                                    ? 'fill-yellow-400 text-yellow-400'
                                                    : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-3 sm:mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{review.title}</h4>
                                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">{review.content}</p>
                                </div>

                                <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500">
                                    <span>{review.author}</span>
                                    <span>{review.date}</span>
                                </div>

                                <button className="w-full mt-3 sm:mt-4 text-blue-600 hover:text-blue-700 font-semibold text-xs sm:text-sm">
                                    SEE MORE
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 sm:py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4">
                        Share Your Experience
                    </h2>
                    <p className="text-blue-100 text-sm sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                        Your reviews help other consumers make informed decisions and help businesses improve their services.
                    </p>
                    <button
                        onClick={() => {
                            setFormType('review');
                            setEditingItem(null);
                            setShowAddForm(true);
                        }}
                        className="bg-white text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors font-semibold text-sm sm:text-lg"
                    >
                        PUBLISH MY REVIEW
                    </button>
                </div>
            </div>

            {/* Add/Edit Form Modal */}
            {showAddForm && <AddEditForm />}
        </div>
    );
}