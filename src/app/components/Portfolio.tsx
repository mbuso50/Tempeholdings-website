"use client"

import { useState } from 'react';
import { ExternalLink, TrendingUp } from 'lucide-react';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Branding', 'Digital', 'Social Media', 'Campaign'];

  const projects = [
    {
      title: 'TechStart Digital Launch',
      category: 'Digital',
      result: '+320% Traffic',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYwMTAyMDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Complete digital strategy overhaul for emerging tech startup',
    },
    {
      title: 'Soweto Fashion Week',
      category: 'Campaign',
      result: '50k Attendees',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMHNvY2lhbCUyMG1lZGlhfGVufDF8fHx8MTc2MDEwMjA0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Multi-channel campaign for annual fashion event',
    },
    {
      title: 'Local Business Rebrand',
      category: 'Branding',
      result: '+200% Sales',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGJyYWluc3Rvcm18ZW58MXx8fHwxNzYwMTAyMDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Complete brand identity refresh for retail chain',
    },
    {
      title: 'Social Media Excellence',
      category: 'Social Media',
      result: '100k Followers',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjcmVhdGl2ZSUyMHdvcmt8ZW58MXx8fHwxNzYwMTAyMDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Instagram-first strategy for lifestyle brand',
    },
    {
      title: 'Corporate Relaunch',
      category: 'Digital',
      result: 'Industry Leader',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjAxMDIwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Digital transformation for financial services',
    },
    {
      title: 'Product Launch Campaign',
      category: 'Campaign',
      result: 'Sold Out',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2hhbm5lc2J1cmclMjBjaXR5c2NhcGV8ZW58MXx8fHwxNzYwMTAyMDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Integrated campaign for new product line',
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
            Our Work
          </span>
          <h2 className="text-gray-900 mt-4 mb-6 text-3xl md:text-4xl font-bold">
            Success Stories That Speak
          </h2>
          <p className="text-gray-600 text-lg">
            Real results for real businesses. See how we&apos;ve helped South African brands achieve remarkable growth.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full transition-all ${activeFilter === filter
                ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                {/* Result Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-full text-sm flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>{project.result}</span>
                  </div>
                </div>

                {/* Hover Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full flex items-center space-x-2">
                    <span>View Case Study</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs text-blue-600 mb-2 font-medium">{project.category}</div>
                <h3 className="text-gray-900 mb-2 font-semibold">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button
            onClick={scrollToContact}
            className="text-blue-600 hover:text-blue-700 underline underline-offset-4 font-medium"
          >
            Want to see more? Request our full portfolio →
          </button>
        </div>
      </div>
    </section>
  );
}
