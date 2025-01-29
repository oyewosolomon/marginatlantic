"use client"

import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState('');

  const solutions = [
    { name: 'Pick & Pack Automation', description: 'Streamline your warehouse operations' },
    { name: 'Carrier Network', description: 'Expand your shipping options' },
    { name: 'Analytics Dashboard', description: 'Real-time tracking and insights' },
  ];

  const resources = [
    { name: 'Case Studies', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Documentation', href: '#' },
  ];

  return (
    <nav className="bg-white fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                    <span className="text-2xl font-bold text-blue-600">Margin Atlantic</span>
                </Link>
            </div>

            {/* Desktop Navigation Items */}
            <div className="hidden md:ml-12 md:flex md:space-x-8">
              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-blue-600"
                  onMouseEnter={() => setOpenDropdown('solutions')}
                  onMouseLeave={() => setOpenDropdown('')}
                >
                  Solutions
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {openDropdown === 'solutions' && (
                  <div
                    className="absolute left-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    onMouseEnter={() => setOpenDropdown('solutions')}
                    onMouseLeave={() => setOpenDropdown('')}
                  >
                    <div className="py-2">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href="#"
                          className="block px-4 py-3 hover:bg-gray-50"
                        >
                          <p className="text-sm font-medium text-gray-900">{item.name}</p>
                          <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-blue-600"
                  onMouseEnter={() => setOpenDropdown('resources')}
                  onMouseLeave={() => setOpenDropdown('')}
                >
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {openDropdown === 'resources' && (
                  <div
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    onMouseEnter={() => setOpenDropdown('resources')}
                    onMouseLeave={() => setOpenDropdown('')}
                  >
                    <div className="py-2">
                      {resources.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a href="#" className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-blue-600">
                Pricing
              </a>
              <a href="#" className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-blue-600">
                About
              </a>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <button className="px-4 py-2 text-gray-700 hover:text-blue-600">
              Sign In
            </button>
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {/* Solutions Section */}
            <div className="space-y-2">
              <div className="px-4 py-2 text-sm font-medium text-gray-700">Solutions</div>
              {solutions.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Resources Section */}
            <div className="space-y-2">
              <div className="px-4 py-2 text-sm font-medium text-gray-700">Resources</div>
              {resources.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
              Pricing
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
              About
            </a>
          </div>

          {/* Mobile CTA Buttons */}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="space-y-2 px-4">
              <button className="w-full px-4 py-2 text-center text-gray-700 hover:text-blue-600">
                Sign In
              </button>
              <button className="w-full px-4 py-2 text-center rounded-md bg-blue-600 text-white hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;