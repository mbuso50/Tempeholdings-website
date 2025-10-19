"use client"

import { useState } from 'react';
import {
  Smartphone,
  Megaphone,
  Palette,
  BarChart3,
  Video,
  Mail,
  Search,
  Share2,
  ArrowRight
} from 'lucide-react';

export function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Smartphone,
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation roadmaps tailored to your business goals.',
      features: ['Market Analysis', 'Competitor Research', 'Growth Planning', 'KPI Setting'],
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Create memorable brand experiences that resonate with your target audience.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'],
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Build engaged communities and drive meaningful conversations online.',
      features: ['Content Strategy', 'Community Management', 'Influencer Marketing', 'Analytics'],
      color: 'from-pink-500 to-pink-700',
    },
    {
      icon: Search,
      title: 'SEO & SEM',
      description: 'Dominate search results and drive qualified traffic to your website.',
      features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'PPC Campaigns'],
      color: 'from-green-500 to-green-700',
    },
    {
      icon: Video,
      title: 'Content Production',
      description: 'High-quality video and photo content that tells your brand story.',
      features: ['Video Production', 'Photography', 'Animation', 'Post-Production'],
      color: 'from-red-500 to-red-700',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Nurture leads and convert customers with targeted email campaigns.',
      features: ['Campaign Design', 'Automation', 'Segmentation', 'A/B Testing'],
      color: 'from-yellow-500 to-yellow-700',
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Data-driven insights that inform strategy and optimize performance.',
      features: ['Performance Tracking', 'Custom Reports', 'ROI Analysis', 'Dashboards'],
      color: 'from-indigo-500 to-indigo-700',
    },
    {
      icon: Megaphone,
      title: 'Traditional Media',
      description: 'Print, radio, and outdoor advertising for maximum local reach.',
      features: ['Print Design', 'Radio Production', 'Billboard Design', 'Media Buying'],
      color: 'from-orange-500 to-orange-700',
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
            What We Offer
          </span>
          <h2 className="text-gray-900 mt-4 mb-6 text-3xl md:text-4xl font-bold">
            360° Marketing Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            From strategy to execution, we provide end-to-end marketing services designed to elevate your brand and drive measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveService(index)}
              className={`group relative bg-white rounded-3xl p-8 transition-all duration-500 cursor-pointer border-2 ${activeService === index
                ? 'border-blue-500 shadow-2xl scale-105 -translate-y-2'
                : 'border-transparent hover:shadow-xl hover:scale-102'
                }`}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>

              {/* Icon */}
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                <div className={`relative w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-gray-900 mb-3 group-hover:text-blue-600 transition-colors font-semibold">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full mr-2`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Arrow */}
              <div className="flex items-center text-blue-600 text-sm group-hover:gap-2 transition-all">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-gray-900 mb-3 font-semibold">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Every business is unique. Let&apos;s discuss how we can create a tailored marketing strategy for your specific needs.
            </p>
            <button
              onClick={scrollToContact}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl blur opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-xl flex items-center space-x-2 hover:shadow-xl transform group-hover:scale-105 transition-all">
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}