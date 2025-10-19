import { Users, Target, TrendingUp, Globe, Building, Heart, BarChart3, Users2 } from 'lucide-react';
import Image from 'next/image';

export function About() {
  const features = [
    { icon: Building, title: 'Years Established', value: 'Since 2012' },
    { icon: BarChart3, title: 'Market Value', value: 'R900 Billion' },
    { icon: Users2, title: 'Population Reach', value: '10 Million+' },
    { icon: Target, title: 'Market Penetration', value: '21%' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Townships',
      description: 'Deep-rooted commitment to townships markets and creating value for hard-earned rands.',
    },
    {
      icon: Globe,
      title: 'Local Expertise',
      description: 'We live the townships experience, offering authentic insights beyond data analysis.',
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Growth',
      description: 'Building sustainable ecosystems and changing the narrative through group economics.',
    },
    {
      icon: Users,
      title: 'Local Representation',
      description: 'Creating partnerships and employment opportunities within townships communities.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
                  About Tempe Holdings (Pty) Ltd
                </span>
              </div>
              <h2 className="text-gray-900 text-3xl md:text-4xl font-bold">
                Your Gateway to the
                <span className="block text-blue-600">R900 Billion Townships Market</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Tempe Holdings (Pty) Ltd is a marketing solutions company formed in 2012 to offer entities relevance and a share in the R900 billion worth townships market. Under the leadership of founder and Managing Director Thapelo Mpete, we specialize in navigating townships markets with authentic, lived experience that sets us apart.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-6 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
              <div>
                <h3 className="text-gray-900 mb-2 font-semibold text-lg">Our Mission</h3>
                <p className="text-gray-600">
                  To create value for all companies in the markets they operate in and create value for Rands for customers through understanding customer needs, going trends, and creating niches.
                </p>
              </div>
              <div>
                <h3 className="text-gray-900 mb-2 font-semibold text-lg">Our Vision</h3>
                <p className="text-gray-600">
                  To help grow the SMME sector into a major sector by contributing to the growth in the businesses we form partnerships with, turning them into major industry players.
                </p>
              </div>
            </div>

            {/* Key Features */}
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
              <h3 className="text-gray-900 text-xl font-bold mb-4">What Sets Us Apart</h3>
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

          {/* Right Content - Image Grid */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden h-48 group">
                  <Image
                    src="/123.JPG"
                    alt="Tempe Holdings Team"
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                </div>
                <div className="relative rounded-2xl overflow-hidden h-64 group">
                  <Image
                    src="/1234.JPG"
                    alt="Tempe Holdings Event"
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
                    src="/23.JPG"
                    alt="Community Engagement"
                    width={400}
                    height={256}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                </div>
                <div className="relative rounded-2xl overflow-hidden h-48 group">
                  <Image
                    src="/098.JPG"
                    alt="Soweto Business Environment"
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
              <div className="text-blue-600 mb-2 text-sm font-medium">Founded</div>
              <div className="text-gray-900 mb-1 text-xl font-bold">2012</div>
              <p className="text-gray-600 text-sm">Pioneering Townships Marketing</p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl opacity-20 blur-2xl"></div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="text-blue-600 mb-2 text-2xl font-bold">R900B</div>
            <p className="text-gray-600">Townships Market Value</p>
          </div>
          <div className="text-center">
            <div className="text-blue-600 mb-2 text-2xl font-bold">21%</div>
            <p className="text-gray-600">Population Penetration</p>
          </div>
          <div className="text-center">
            <div className="text-blue-600 mb-2 text-2xl font-bold">76%</div>
            <p className="text-gray-600">Loyalty Program Usage</p>
          </div>
          <div className="text-center">
            <div className="text-blue-600 mb-2 text-2xl font-bold">14.5M</div>
            <p className="text-gray-600">Projected Users by 2029</p>
          </div>
        </div>

        {/* Unique Selling Proposition */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Why Partner With Tempe Holdings?</h3>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            &quot;Seeking and finding solutions where most don&apos;t even see challenges is what sets Tempe Holdings apart.
            We offer innovation and substance through acquiring and maintaining relevant knowledge of various marketing skills
            and applying these skills where they are most required - in the Townships Markets.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}