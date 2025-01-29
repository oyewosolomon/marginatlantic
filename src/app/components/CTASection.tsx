import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="bg-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to Transform Your Supply Chain?
        </h2>
        <p className="mt-4 text-xl text-blue-100">
          Join leading brands who trust Margin Atlantic for their logistics needs
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="inline-flex items-center px-6 py-3 rounded-md bg-white text-blue-600 font-medium hover:bg-blue-50">
            Schedule a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="inline-flex items-center px-6 py-3 rounded-md border-2 border-white text-white font-medium hover:bg-blue-700">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;