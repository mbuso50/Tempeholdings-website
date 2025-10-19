"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navigateToMarketReviews = () => {
    router.push('/market-reviews'); // Fixed route path
    setIsMobileMenuOpen(false);
  };

  const navigateToHomePage = () => {
    router.push('/home-page');
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-blue-100'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={navigateToHomePage}
            className="group flex items-center space-x-3"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity rounded-xl"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 w-12 h-12 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <span className="text-white font-bold">T</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <div
                className={`transition-colors font-semibold ${isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
              >
                Tempe Holdings
              </div>
              <div
                className={`text-xs transition-colors ${isScrolled ? 'text-blue-600' : 'text-blue-200'
                  }`}
              >
                Marketing Solutions
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button
              onClick={navigateToHomePage}
              className={`px-4 py-2 rounded-lg transition-all font-medium ${isScrolled
                ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                : 'text-white hover:bg-white/10'
                }`}
            >
              Home
            </button>
            {['About', 'Services', 'Work', 'Clients'].map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(
                    item === 'Work'
                      ? 'portfolio'
                      : item === 'Clients'
                        ? 'testimonials'
                        : item.toLowerCase()
                  )
                }
                className={`px-4 py-2 rounded-lg transition-all font-medium ${isScrolled
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  : 'text-white hover:bg-white/10'
                  }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Market Review Button */}
            <button
              onClick={navigateToMarketReviews}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2.5 rounded-full hover:shadow-xl transform group-hover:scale-105 transition-all font-semibold">
                Market Intelligence
              </div>
            </button>

            {/* Let's Talk Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2.5 rounded-full hover:shadow-xl transform group-hover:scale-105 transition-all font-semibold">
                Let&apos;s Talk
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'
              }`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-gray-200/20">
            <div className="flex flex-col space-y-1">
              <button
                onClick={navigateToHomePage}
                className={`px-4 py-3 text-left rounded-lg transition-all font-medium ${isScrolled
                  ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  : 'text-white hover:bg-white/10'
                  }`}
              >
                Home
              </button>
              {['About', 'Services', 'Work', 'Clients'].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(
                      item === 'Work'
                        ? 'portfolio'
                        : item === 'Clients'
                          ? 'testimonials'
                          : item.toLowerCase()
                    )
                  }
                  className={`px-4 py-3 text-left rounded-lg transition-all font-medium ${isScrolled
                    ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    : 'text-white hover:bg-white/10'
                    }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={navigateToMarketReviews}
                className={`px-4 py-3 text-left rounded-lg transition-all font-medium ${isScrolled
                  ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  : 'text-white hover:bg-white/10'
                  }`}
              >
                Market Intelligence
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-4 py-3 text-left rounded-lg transition-all font-medium ${isScrolled
                  ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  : 'text-white hover:bg-white/10'
                  }`}
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}