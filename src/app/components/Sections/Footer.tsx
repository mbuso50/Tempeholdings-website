"use client";

import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import React from 'react';
export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-gray-300 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-lg opacity-50 rounded-xl"></div>
                <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 w-12 h-12 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">T</span>
                </div>
              </div>
              <div>
                <div className="text-white font-semibold">Tempo Holdings</div>
                <div className="text-xs text-blue-400">Marketing Solutions</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Empowering South African businesses with innovative marketing strategies and creative excellence since 2009.
            </p>
            <div className="flex space-x-3">
              {[
                {
                  name: 'Facebook',
                  href: 'https://www.facebook.com/p/TEMPE-Holdings-PTY-Ltd-100063767011080/',
                  icon: 'F'
                },
                {
                  name: 'Twitter',
                  href: 'https://x.com/TempeHoldings',
                  icon: 'X'
                },
                {
                  name: 'TikTok',
                  href: 'https://www.tiktok.com/@tempe.holdings?_t=ZS-90ewNGcoIXx&_r=1',
                  icon: 'T'
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-blue-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-indigo-600 rounded-lg flex items-center justify-center transition-all">
                    <span className="text-white text-sm font-semibold">{social.icon}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-6 font-semibold">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {['Home', 'About', 'Services', 'Portfolio',].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item === 'Home' ? 'hero' : item === 'Portfolio' ? 'portfolio' : item.toLowerCase())}
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-3 transition-all mr-0 group-hover:mr-2"></span>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-6 font-semibold">Our Services</h4>
            <ul className="space-y-3 text-sm">
              {[

                'Brand Identity',
                'Social Media',

                'Content Production',
                'Email Marketing',
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-6 font-semibold">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Soweto, Johannesburg<br />South Africa, 1804
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">+27 73 032 1269 or +27 76 107 7556</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">tempeholdings@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Tempe Holdings. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button className="text-gray-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-blue-400 transition-colors">
              Terms of Service
            </button>
            <button className="text-gray-400 hover:text-blue-400 transition-colors">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="group fixed bottom-8 right-8 z-50"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transform group-hover:scale-110 transition-all">
          <ArrowUp className="w-5 h-5 text-white" />
        </div>
      </button>
    </footer>
  );
}