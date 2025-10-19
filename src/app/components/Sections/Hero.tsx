"use client";

import { ArrowRight, Play, Star } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-blue-400 border-2 border-white"></div>
                <div className="w-6 h-6 rounded-full bg-indigo-400 border-2 border-white"></div>
                <div className="w-6 h-6 rounded-full bg-purple-400 border-2 border-white"></div>
              </div>
              <span className="text-sm">Trusted by 10+ South African Brands</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your Business with
                <span className="block bg-gradient-to-r from-blue-300 via-blue-200 to-indigo-300 text-transparent bg-clip-text">
                  Strategic Marketing
                </span>
              </h1>
              <p className="text-xl text-blue-100 max-w-xl">
                Tempo Holdings brings cutting-edge marketing solutions to Soweto and across South Africa. We don&apos;t just create campaigns we build legacies.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative"
              >
                <div className="absolute inset-0 bg-white rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white text-blue-900 px-8 py-4 rounded-2xl flex items-center justify-center space-x-2 hover:shadow-2xl transform group-hover:scale-105 transition-all font-semibold">
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-white text-2xl font-bold mb-1">12+</div>
                <p className="text-blue-200 text-sm">Years</p>
              </div>
              <div>
                <div className="text-white text-2xl font-bold mb-1">20+</div>
                <p className="text-blue-200 text-sm">Projects</p>
              </div>
              <div>
                <div className="text-white text-2xl font-bold mb-1">98%</div>
                <p className="text-blue-200 text-sm">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden h-48 group">
                  <Image
                    src="/12.JPG"
                    alt="Tempo Holdings Team"
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                </div>
                <div className="relative rounded-2xl overflow-hidden h-64 group">
                  <Image
                    src="/21.JPG"
                    alt="Tempo Holdings Event"
                    width={400}
                    height={256}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="relative rounded-2xl overflow-hidden h-64 group">
                  <Image
                    src="/close-up-community-concept-outdoors.jpg"
                    alt="Community Engagement"
                    width={400}
                    height={256}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                </div>
                <div className="relative rounded-2xl overflow-hidden h-48 group">
                  <Image
                    src="/Malls-in-Soweto-2.jpg"
                    alt="Soweto Business Environment"
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                </div>
              </div>
            </div>
            {/* Floating Rating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-gray-900 font-semibold">4.9/5 Rating</div>
              <p className="text-gray-500 text-sm">From 20+ Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}