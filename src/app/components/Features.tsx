import React from 'react';
import { Box, BarChart3, Truck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Box className="w-10 h-10 text-blue-600" />,
      title: "Smart Pick & Pack Automation",
      description: "Streamline your warehouse operations with AI-powered picking and packing solutions. Reduce errors by 99.9% and increase fulfillment speed by 3x.",
      stats: ["99.9% accuracy", "3x faster fulfillment", "60% cost reduction"]
    },
    {
      icon: <Truck className="w-10 h-10 text-blue-600" />,
      title: "Expanded Carrier Network",
      description: "Access our network of 500+ global carriers. Our smart routing algorithms automatically select the most efficient shipping options for each order.",
      stats: ["500+ carriers", "98% on-time delivery", "25% shipping savings"]
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
      title: "Real-Time Analytics Dashboard",
      description: "Make data-driven decisions with comprehensive tracking and analytics. Monitor performance, track deliveries, and optimize your supply chain.",
      stats: ["Real-time updates", "Custom reporting", "Predictive insights"]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Tools for Modern Logistics
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Our integrated platform provides everything you need to optimize your supply chain operations.
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-4 rounded-lg bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="bg-blue-50 rounded-lg p-3 inline-block">
                  {feature.icon}
                </div>
                
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                
                <p className="mt-3 text-gray-600">
                  {feature.description}
                </p>
                
                <div className="mt-6 grid grid-cols-1 gap-3">
                  {feature.stats.map((stat, i) => (
                    <div key={i} className="flex items-center">
                      <div className="h-2 w-2 bg-blue-600 rounded-full" />
                      <span className="ml-3 text-sm font-medium text-gray-700">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;