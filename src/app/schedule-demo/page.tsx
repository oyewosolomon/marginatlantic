"use client"

import type { ReactElement } from 'react';
import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  teamSize: string;
  monthlyOrders: string;
  interests: string[];
  date: string;
  time: string;
}

type Role = 'operations' | 'logistics' | 'ecommerce' | 'other';
type MonthlyOrderVolume = '0-1000' | '1001-5000' | '5001-10000' | '10001+';

interface TimeSlot {
  value: string;
  label: string;
}

const TIME_SLOTS: TimeSlot[] = [
  { value: '9:00', label: '9:00 AM EST' },
  { value: '10:00', label: '10:00 AM EST' },
  { value: '11:00', label: '11:00 AM EST' },
  { value: '13:00', label: '1:00 PM EST' },
  { value: '14:00', label: '2:00 PM EST' },
  { value: '15:00', label: '3:00 PM EST' },
];

const BENEFITS: string[] = [
  'Personalized platform walkthrough',
  'Live Q&A with logistics experts',
  'Custom ROI calculation',
  'Implementation roadmap',
];

const ROLES: { value: Role; label: string }[] = [
  { value: 'operations', label: 'Operations Manager' },
  { value: 'logistics', label: 'Logistics Director' },
  { value: 'ecommerce', label: 'E-commerce Manager' },
  { value: 'other', label: 'Other' },
];

const ORDER_VOLUMES: { value: MonthlyOrderVolume; label: string }[] = [
  { value: '0-1000', label: '0 - 1,000' },
  { value: '1001-5000', label: '1,001 - 5,000' },
  { value: '5001-10000', label: '5,001 - 10,000' },
  { value: '10001+', label: '10,000+' },
];

const ScheduleDemo: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    teamSize: '',
    monthlyOrders: '',
    interests: [],
    date: '',
    time: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };



  const handleSubmit = async (): Promise<void> => {
    try {
      // Add your submission logic here
      console.log('Form submitted:', formData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const renderFormStep = (currentStep: number): ReactElement => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-1 border-blue-400 border-gray-300 outline-blue-500 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Work Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select your role</option>
                {ROLES.map(role => (
                  <option key={role.value} value={role.value}>
                    {role.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Monthly Order Volume</label>
              <select
                name="monthlyOrders"
                value={formData.monthlyOrders}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select monthly orders</option>
                {ORDER_VOLUMES.map(volume => (
                  <option key={volume.value} value={volume.value}>
                    {volume.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select a time slot</option>
                {TIME_SLOTS.map(slot => (
                  <option key={slot.value} value={slot.value}>
                    {slot.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        );

      default:
        return <></>;
    }
  };

  return (
    <>
        <Navbar/>
        <div className="min-h-screen bg-gray-50 py-12 mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Schedule Your Personalized Demo
            </h1>
            <p className="mt-4 text-lg text-gray-600">
                See how Margin Atlantic can transform your logistics operations
            </p>
            </div>

            {/* Progress Steps */}
            <div className="mb-8">
            <div className="flex justify-between items-center">
                {[1, 2, 3].map((number) => (
                <div key={number} className="flex items-center">
                    <div className={`rounded-full h-8 w-8 flex items-center justify-center ${
                    step >= number ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                    {number}
                    </div>
                    {number < 3 && (
                    <div className={`h-1 w-24 sm:w-32 ${
                        step > number ? 'bg-blue-600' : 'bg-gray-200'
                    }`} />
                    )}
                </div>
                ))}
            </div>
            <div className="flex justify-between mt-2">
                <span className="text-sm text-gray-600">Your Info</span>
                <span className="text-sm text-gray-600">Company Details</span>
                <span className="text-sm text-gray-600">Schedule Time</span>
            </div>
            </div>

            {/* Main Form Content */}
            <div className="bg-white rounded-lg shadow-sm p-8">
            {renderFormStep(step)}

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
                {step > 1 && (
                <button
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                    Back
                </button>
                )}
                <button
                onClick={() => step < 3 ? setStep(step + 1) : handleSubmit()}
                className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
                >
                {step === 3 ? 'Schedule Demo' : 'Next'}
                <ArrowRight className="ml-2 h-4 w-4" />
                </button>
            </div>
            </div>

            {/* Benefits Section */}
            <div className="mt-12 bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                What to Expect in Your Demo
            </h3>
            <div className="space-y-3">
                {BENEFITS.map((benefit, index) => (
                <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="ml-3 text-gray-600">{benefit}</span>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
        <Footer/>
    </>
  );
};

export default ScheduleDemo;