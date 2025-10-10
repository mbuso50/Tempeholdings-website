"use client"

import { Award, Users, Zap, Target, TrendingUp, Globe } from 'lucide-react';

export function About() {
  const features = [
    { icon: Award, title: 'Award-Winning', value: '25+ Industry Awards' },
    { icon: Users, title: 'Expert Team', value: '50+ Specialists' },
    { icon: Zap, title: 'Fast Delivery', value: '2-Week Turnaround' },
    { icon: Target, title: 'Precision', value: '98% Hit Rate' },
  ];

  const values = [
    {
      icon: TrendingUp,
      title: 'Growth Focused',
      description: 'Every strategy is designed with one goal: sustainable business growth.',
    },
    {
      icon: Globe,
      title: 'Local Expertise',
      description: 'Deep understanding of South African markets and cultural nuances.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
                  About Tempo Holdings
                </span>
              </div>
              <h2 className="text-gray-900 text-3xl md:text-4xl font-bold">
                We&apos;re More Than an Agency,
                <span className="block text-blue-600">We&apos;re Your Growth Partner</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Based in the heart of Soweto, Tempo Holdings has been revolutionizing how South African businesses approach marketing. Our team combines global best practices with local market insights to deliver campaigns that truly resonate.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 text-blue-600 mb-3" />
                  <div className="text-gray-900 mb-1 font-semibold">{feature.title}</div>
                  <p className="text-blue-600 text-sm font-medium">{feature.value}</p>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-4 pt-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1 font-semibold">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image Composition */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjAxMDIwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tempo Holdings Team"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
              <div className="text-blue-600 mb-2 text-sm font-medium">Since 2009</div>
              <div className="text-gray-900 mb-1 text-xl font-bold">15+ Years</div>
              <p className="text-gray-600 text-sm">Driving Success</p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl opacity-20 blur-2xl"></div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="text-blue-600 mb-2 text-2xl font-bold">200+</div>
            <p className="text-gray-600">Active Clients</p>
          </div>
          <div className="text-center">
            <div className="text-blue-600 mb-2 text-2xl font-bold">500+</div>
            <p className="text-gray-600">Projects Done</p>
          </div>
          <div className="text-center">
            <div className="text-blue-600 mb-2 text-2xl font-bold">25+</div>
            <p className="text-gray-600">Awards Won</p>
          </div>
          <div className="text-center">
            <div className="text-blue-600 mb-2 text-2xl font-bold">9 Cities</div>
            <p className="text-gray-600">Across SA</p>
          </div>
        </div>
      </div>
    </section>
  );
}