"use client";

import { useState } from 'react';
import {
  MessageCircle,
  Users,
  User,
  Settings,
  TrendingUp,
  CheckCircle,
  Heart,
  Clock,
  Users2,
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
  const [activeTab, setActiveTab] = useState('framework');
  const [activeService, setActiveService] = useState(0);

  const frameworkServices = [
    {
      icon: MessageCircle,
      title: 'Communication',
      description: 'Strategic messaging that lets people know you have solutions to their problems.',
      features: ['Problem-Solution Mapping', 'Platform Optimization', 'Feature Communication', 'Audience Targeting'],
      color: 'from-blue-500 to-blue-700',
      principle: 'How to let people know that you have a solution to their problems, choosing the best platforms to communicate through.'
    },
    {
      icon: Users,
      title: 'Connection',
      description: 'Create genuine sparks that transform casual followers into loyal brand ambassadors.',
      features: ['Resonance Building', 'Community Engagement', 'Brand Authenticity', 'Alternative Positioning'],
      color: 'from-purple-500 to-purple-700',
      principle: 'The spark that generates interest and creates the chain from casual follower to loyal customer through genuine market identification.'
    },
    {
      icon: User,
      title: 'Customer',
      description: 'Customer-centric strategies focused on gaining and maintaining lifelong relationships.',
      features: ['Individualized Treatment', 'Customer Acquisition', 'Relationship Building', 'Personalized Solutions'],
      color: 'from-green-500 to-green-700',
      principle: 'Creating conditions conducive to gaining and maintaining customers with treatment based on individual needs rather than market characteristics.'
    },
    {
      icon: Settings,
      title: 'Conditions/Conditioning',
      description: 'Consistent brand presentation that conditions customers for lasting recognition.',
      features: ['Brand Standardization', 'Consistent Messaging', 'Regular Communication', 'Visual Identity Management'],
      color: 'from-orange-500 to-orange-700',
      principle: 'Standardizing messaging, look, and communication to condition customers through consistency across all touchpoints.'
    },
    {
      icon: TrendingUp,
      title: 'Conversions',
      description: 'Seamless pathways that transform followers into loyal customers and brand ambassadors.',
      features: ['Customer Journey Mapping', 'Active Listening', 'Needs-Based Conversion', 'Community Integration'],
      color: 'from-red-500 to-red-700',
      principle: 'Creating platforms to get followers to become loyal customers based on unique characteristics and needs, focusing on listening rather than talking.'
    },
    {
      icon: CheckCircle,
      title: 'Conclude',
      description: 'Transparent closing strategies that build trust and provide valuable insights.',
      features: ['Clear Closing Processes', 'Transparent Actions', 'Deal Sealing', 'Performance Analysis'],
      color: 'from-indigo-500 to-indigo-700',
      principle: 'Specialized closing techniques using clear and transparent actions rather than convincing, with lessons drawn for future reference.'
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'Comprehensive customer care from first encounter to post-sale satisfaction.',
      features: ['Customer Experience', 'After-Sales Support', 'Transparent Communication', 'Satisfaction Monitoring'],
      color: 'from-pink-500 to-pink-700',
      principle: 'Holistic care starting from customer needs through aftersales, focusing on honest and transparent interactions throughout the journey.'
    },
    {
      icon: Clock,
      title: 'Cost',
      description: 'Value-focused pricing that emphasizes time savings and peace of mind.',
      features: ['Time Value Assessment', 'Peace of Mind Pricing', 'Value Communication', 'ROI Demonstration'],
      color: 'from-yellow-500 to-yellow-700',
      principle: 'Focusing on the cost of time saved, enhanced peace of mind, and monetary cost informed by perceived product value.'
    },
    {
      icon: Users2,
      title: 'Community',
      description: 'Building the ultimate C - a cared for, strong, interactive community for generational loyalty.',
      features: ['Community Building', 'Brand Loyalty', 'Multi-Generational Engagement', 'Interactive Platforms'],
      color: 'from-teal-500 to-teal-700',
      principle: 'The culmination of all principles - building a strong, interactive community that ensures longevity and brand loyalty for multiple generations.'
    },
  ];

  const marketingServices = [
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

  const currentServices = activeTab === 'framework' ? frameworkServices : marketingServices;

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-50 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-50 rounded-full filter blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium">
            Our Approach
          </span>
          <h2 className="text-gray-900 mt-6 mb-6 text-4xl md:text-5xl font-bold">
            Strategic Marketing Solutions
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Combining innovative frameworks with proven marketing expertise to deliver exceptional results for South African businesses.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-100 rounded-2xl p-2 flex">
            <button
              onClick={() => setActiveTab('framework')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all ${activeTab === 'framework'
                ? 'bg-white text-blue-600 shadow-lg'
                : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              The 8Cs + 1 Framework
            </button>
            <button
              onClick={() => setActiveTab('marketing')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all ${activeTab === 'marketing'
                ? 'bg-white text-blue-600 shadow-lg'
                : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Marketing Services
            </button>
          </div>
        </div>

        {activeTab === 'framework' && (
          <>
            {/* Framework Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {frameworkServices.map((service, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveService(index)}
                  className={`group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 transition-all duration-500 cursor-pointer border-2 ${activeService === index
                    ? 'border-blue-500 shadow-2xl scale-105 -translate-y-2'
                    : 'border-gray-100 hover:shadow-xl hover:scale-102 hover:border-blue-200'
                    }`}
                >
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-center mb-3">
                      <span className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full mr-3">
                        {index + 1}
                      </span>
                      <h3 className="text-gray-900 group-hover:text-blue-600 transition-colors font-bold text-xl">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Principle Preview */}
                    <div className="bg-blue-50 rounded-xl p-4 mb-4 border border-blue-100">
                      <p className="text-blue-800 text-sm italic">
                        &quot;{service.principle.split('.')[0]}.&quot;
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Arrow */}
                    <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                      <span>Discover the Principle</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Framework Explanation */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100 mb-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-gray-900 mb-6 text-3xl font-bold">
                    Intelligent Principle Mixing
                  </h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Unlike rigid marketing models, Tempe&apos;s 8Cs + 1 framework is designed for intelligent application.
                    We typically recommend mixing only 4-5 principles at any time to maximize effectiveness while
                    allowing systematic scaling of services.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span>Adapts to specific customer needs and market conditions</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span>Prevents principle overload while maintaining effectiveness</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span>Enables systematic service scaling and measurement</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h4 className="text-gray-900 mb-4 font-semibold text-lg">Typical Principle Combinations</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <span className="text-blue-700 font-medium">Startup Launch</span>
                      <span className="text-blue-600 text-sm">Communication + Connection + Customer</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl border border-purple-100">
                      <span className="text-purple-700 font-medium">Growth Phase</span>
                      <span className="text-purple-600 text-sm">Conversions + Conclude + Care</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-100">
                      <span className="text-green-700 font-medium">Community Building</span>
                      <span className="text-green-600 text-sm">Connection + Care + Community</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'marketing' && (
          <>
            {/* Marketing Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {marketingServices.map((service, index) => (
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
                  <h3 className="text-gray-900 mb-3 group-hover:text-blue-600 transition-colors font-bold">
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
          </>
        )}

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              {activeTab === 'framework' ? 'Ready to Experience The Tempe Way?' : 'Need a Custom Solution?'}
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl text-lg">
              {activeTab === 'framework'
                ? 'Let us analyze your current marketing approach and recommend the perfect mix of our 8Cs + 1 framework for your business needs.'
                : 'Every business is unique. Let\'s discuss how we can create a tailored marketing strategy for your specific needs.'
              }
            </p>
            <button
              onClick={scrollToContact}
              className="group relative"
            >
              <div className="absolute inset-0 bg-white rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white text-blue-600 px-8 py-4 rounded-xl flex items-center space-x-3 hover:shadow-2xl transform group-hover:scale-105 transition-all font-bold text-lg">
                <span>
                  {activeTab === 'framework' ? 'Get Your Custom Principle Mix' : 'Schedule a Consultation'}
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}