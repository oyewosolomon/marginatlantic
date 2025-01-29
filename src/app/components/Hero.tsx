import React from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative bg-white mt-16"> {/* Added mt-16 for navbar spacing */}
    <Navbar/>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#f0f7ff_33%,transparent_33%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28">
        <div className="text-center lg:text-left">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                <span className="block">Transform Your</span>
                <span className="block text-blue-600">Supply Chain</span>
              </h1>
              
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-lg mx-auto lg:mx-0">
                Provide a superior solution for your customers with our trio of powerful tools. 
                Automate your pick/pack processes, expand your carrier options, and access 
                real-time delivery analytics.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/schedule-demo" className="inline-flex items-center px-6 py-3 border border-transparent text-base 
                  font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 
                  transition-colors duration-200">
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
               
                
                <button className="inline-flex items-center px-6 py-3 border border-gray-300 
                  rounded-md shadow-sm text-base font-medium text-gray-700 bg-white 
                  hover:bg-gray-50 transition-colors duration-200">
                  Contact Sales
                </button>
              </div>
              
              {/* Trust Badges */}
              <div className="mt-12">
                <p className="text-sm font-semibold text-gray-400 tracking-wide uppercase">
                  Trusted by industry leaders
                </p>
                <div className="mt-4 flex justify-center lg:justify-start space-x-8">
                  {/* Replace with actual client logos */}
                  <div className="h-8 w-24 bg-gray-200 rounded-md" />
                  <div className="h-8 w-24 bg-gray-200 rounded-md" />
                  <div className="h-8 w-24 bg-gray-200 rounded-md" />
                </div>
              </div>
            </div>

            {/* Right Image/Illustration */}
            <div className="mt-16 lg:mt-0 lg:col-span-5">
              <div className="relative h-64 sm:h-72 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-blue-600 
                  rounded-2xl transform -rotate-6 shadow-xl" />
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                  border border-gray-200">
                  {/* Placeholder for dashboard/analytics illustration */}
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="space-y-4 w-4/5">
                      <div className="h-3 bg-gray-200 rounded-full w-3/4" />
                      <div className="h-3 bg-gray-200 rounded-full w-full" />
                      <div className="h-3 bg-gray-200 rounded-full w-2/3" />
                      <div className="h-24 bg-gray-200 rounded-lg w-full mt-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;