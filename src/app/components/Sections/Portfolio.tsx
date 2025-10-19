"use client";

import { useState } from 'react';
import { ExternalLink, TrendingUp, Users, Monitor, Video, Star } from 'lucide-react';
import Image from 'next/image';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Digital', 'Branding', 'Creative'];

  const successStory = {
    title: 'Lemofe Holdings - From Designer to Digital Enterprise',
    category: 'Digital Transformation',
    result: 'Business Growth',
    image: '/ea.jpg', // Using your local business handshake image
    description: 'Transforming a solo graphic design service into a comprehensive digital solutions provider',
    achievements: [
      { icon: Monitor, text: 'Internet Café Services' },
      { icon: Video, text: 'Video Invitations' },
      { icon: Users, text: 'Expanded Service Portfolio' },
      { icon: Star, text: 'Sustainable Business Model' }
    ],
    story: "Lemofe Holdings, founded by Goitsemang Molefe, began as a solo graphic design venture. Through strategic guidance and digital transformation, we helped evolve the business into a thriving internet café and comprehensive design service, including innovative video invitations that became a market differentiator.",
    impact: "The business now serves a diverse client base while maintaining its core design excellence, demonstrating how traditional creative services can successfully integrate digital offerings for sustainable growth."
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
            Success Story
          </span>
          <h2 className="text-gray-900 mt-4 mb-6 text-3xl md:text-4xl font-bold">
            Transforming Vision into Reality
          </h2>
          <p className="text-gray-600 text-lg">
            Discover how we helped Lemofe Holdings evolve from a solo graphic design service into a thriving digital enterprise.
          </p>
        </div>

        {/* Filter Tabs - Keeping for future expansion */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 opacity-70">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full transition-all ${activeFilter === filter
                ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Main Success Story Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
            <div className="lg:flex">
              {/* Image Section */}
              <div className="lg:w-2/5 relative">
                <div className="h-80 lg:h-full relative">
                  <Image
                    src={successStory.image}
                    alt="Business partnership and growth"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

                  {/* Success Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm flex items-center space-x-1 shadow-lg">
                      <TrendingUp className="w-4 h-4" />
                      <span>Success Story</span>
                    </div>
                  </div>

                  {/* Client Name Overlay */}
                  <div className="absolute bottom-6 left-6">
                    <div className="text-white">
                      <div className="text-sm opacity-90">Featured Client</div>
                      <div className="text-xl font-bold">Lemofe Holdings</div>
                      <div className="text-sm opacity-80">Goitsemang Molefe</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 p-8 lg:p-12">
                <div className="mb-6">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    {successStory.category}
                  </span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {successStory.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {successStory.story}
                </p>

                <p className="text-gray-700 mb-8 font-medium italic border-l-4 border-blue-500 pl-4">
                  {successStory.impact}
                </p>

                {/* Achievements Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {successStory.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <achievement.icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{achievement.text}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 text-white">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">5+</div>
                      <div className="text-blue-100 text-sm">Years in Business</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">100+</div>
                      <div className="text-blue-100 text-sm">Projects Completed</div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 flex items-center justify-between">

                  <button
                    onClick={scrollToContact}
                    className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all font-semibold"
                  >
                    Start Your Success Story
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-4xl text-blue-500 mb-4">&quot;</div>
            <p className="text-xl text-gray-700 italic mb-6">
              &quot;Tempo Holdings understood our vision and helped us build more than just a business - they helped us create a legacy. Their strategic approach transformed our single service offering into a diversified digital enterprise.&quot;
            </p>
            <div className="font-semibold text-gray-900">Goitsemang Molefe</div>
            <div className="text-blue-600 text-sm">Founder, Lemofe Holdings Pty (Ltd)</div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let us help you transform your business vision into measurable success. From digital strategy to creative execution, we&apos;re here to support your growth journey.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all font-semibold text-lg"
            >
              Start Your Transformation Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}