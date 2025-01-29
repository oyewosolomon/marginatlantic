import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Margin Atlantic transformed our fulfillment operations. We've seen a 40% reduction in shipping costs and improved customer satisfaction scores.",
      author: "Sarah Chen",
      role: "Operations Director",
      company: "EcoShop Global",
      rating: 5
    },
    {
      quote: "The analytics dashboard gives us unprecedented visibility into our supply chain. It's like having a logistics expert on call 24/7.",
      author: "Marcus Rodriguez",
      role: "Logistics Manager",
      company: "Pure Retail",
      rating: 5
    },
    {
      quote: "Integration was seamless, and their support team is exceptional. We were up and running in days, not months.",
      author: "Jessica Kim",
      role: "E-commerce Director",
      company: "StyleHouse",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Trusted by Leading Brands
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See what our customers say about their experience with Margin Atlantic
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-auto">
                <p className="font-medium text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;