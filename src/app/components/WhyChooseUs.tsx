import React from 'react';
import { CheckCircle, Users, Clock, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const WhyChooseUs = () => {
  const stats = [
    { number: "99.9%", label: "Order Accuracy" },
    { number: "50M+", label: "Orders Processed" },
    { number: "2.5x", label: "Efficiency Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  const benefits = [
    {
      title: "Enterprise-Grade Platform",
      description: "Built to handle millions of orders with 99.99% uptime and enterprise-level security."
    },
    {
      title: "Seamless Integration",
      description: "Connect with your existing systems in minutes, not months. Support for all major e-commerce platforms."
    },
    {
      title: "Dedicated Support",
      description: "Get strategic guidance from our logistics experts and 24/7 technical support."
    },
    {
      title: "Flexible Scaling",
      description: "Our platform grows with your business, handling peak seasons with ease."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600">
                {stat.number}
              </div>
              <div className="mt-2 text-sm font-medium text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="mt-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Leading Brands Choose Margin Atlantic
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              We combine powerful technology with logistics expertise to deliver 
              exceptional results for businesses of all sizes.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Link href="/schedule-demo" className="inline-flex items-center px-6 py-3 border border-transparent 
              text-base font-medium rounded-md shadow-sm text-white bg-blue-600 
              hover:bg-blue-700 transition-colors duration-200">
              Schedule a Demo
            </Link>
          
            <p className="mt-4 text-sm text-gray-600">
              See how we can transform your logistics operations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;