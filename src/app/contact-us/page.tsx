"use client"

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Building } from 'lucide-react';
import { NewsletterSignup } from '../components/Newsletter';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar/>
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 mt-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-center text-lg max-w-2xl mx-auto">
            Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
            <Phone className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-gray-600">Mon-Fri 9am-6pm EST</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
            <Mail className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-gray-600">support@marginatlantic.com</p>
              <p className="text-gray-600">sales@marginatlantic.com</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
            <Building className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Office</h3>
              <p className="text-gray-600">123 Business Ave</p>
              <p className="text-gray-600">New York, NY 10001</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Our Location</h2>
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-6">
              {/* Replace this div with an actual map component if needed */}
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <MapPin className="w-12 h-12 text-gray-400" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Margin Atlantic Headquarters</h3>
              <p className="text-gray-600">
                123 Business Avenue<br />
                Suite 456<br />
                New York, NY 10001
              </p>
              <p className="text-gray-600">
                Located in the heart of Manhattan's business district, our office is easily accessible by public transportation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <NewsletterSignup/>
      <Footer/>
    </div>
  );
};

export default ContactPage;