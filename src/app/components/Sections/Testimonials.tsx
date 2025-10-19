import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Thabo Mokoena',
      role: 'CEO',
      company: 'TechVentures SA',
      content: 'Tempo Holdings didn&apos;t just meet our expectations—they exceeded them. The digital strategy they crafted for us resulted in a 320% increase in qualified traffic. Their team is professional, creative, and truly invested in our success.',
      rating: 5,
      avatar: 'TM',
    },
    {
      name: 'Naledi Khumalo',
      role: 'Marketing Director',
      company: 'Fashion Forward',
      content: 'Working with Tempo has been transformative. They understand the South African market deeply and created campaigns that resonated with our audience. We grew from 5k to 100k followers in 8 months!',
      rating: 5,
      avatar: 'NK',
    },
    {
      name: 'Sipho Ndlovu',
      role: 'Business Owner',
      company: 'Soweto Eats',
      content: 'The branding work was exceptional. They captured our essence perfectly and created an identity that our customers love. Sales increased 200% after the rebrand. Best investment we&apos;ve made.',
      rating: 5,
      avatar: 'SN',
    },
    {
      name: 'Zanele Mthembu',
      role: 'Founder',
      company: 'Beauty Collective',
      content: 'From strategy to execution, Tempo delivered excellence at every step. Their email marketing campaigns have been incredibly effective. They&apos;re true partners in our growth journey.',
      rating: 5,
      avatar: 'ZM',
    },
    {
      name: 'David van Wyk',
      role: 'Marketing Manager',
      company: 'Financial Group SA',
      content: 'Professional, responsive, and results-driven. Tempo helped us launch our biggest campaign ever with record-breaking attendance. Their attention to detail is unmatched.',
      rating: 5,
      avatar: 'DW',
    },
    {
      name: 'Lerato Dlamini',
      role: 'Brand Director',
      company: 'Retail Innovations',
      content: 'The team at Tempo is simply outstanding. They took time to understand our brand DNA and goals. The content they produce is always on-brand and engaging. We couldn&apos;t be happier.',
      rating: 5,
      avatar: 'LD',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
            Client Testimonials
          </span>
          <h2 className="text-gray-900 mt-4 mb-6 text-3xl md:text-4xl font-bold">
            Loved by Businesses Across South Africa
          </h2>
          <p className="text-gray-600 text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their experience working with Tempo Holdings.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-500">
                  <Quote className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-8 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-blue-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-2xl font-bold mb-2">4.9/5</div>
              <p className="text-blue-100 text-sm">Average Rating</p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">98%</div>
              <p className="text-blue-100 text-sm">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">200+</div>
              <p className="text-blue-100 text-sm">Happy Clients</p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">95%</div>
              <p className="text-blue-100 text-sm">Retention Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}