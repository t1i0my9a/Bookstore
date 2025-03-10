import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { FeedbackForm } from '../types';

export default function About() {
  const [formData, setFormData] = useState<FeedbackForm>({
    name: '',
    email: '',
    message: '',
    orderType: 'feedback',
    customDetails: ''
  });

  // Load saved customer info from localStorage
  useEffect(() => {
    const savedCustomerInfo = localStorage.getItem('customerInfo');
    if (savedCustomerInfo) {
      const { name, email } = JSON.parse(savedCustomerInfo);
      setFormData(prev => ({
        ...prev,
        name: name || '',
        email: email || ''
      }));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save customer info to localStorage
    localStorage.setItem('customerInfo', JSON.stringify({
      name: formData.name,
      email: formData.email
    }));

    // Store feedback/order in localStorage with timestamp
    const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
    submissions.push({
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('submissions', JSON.stringify(submissions));

    // Show success message and reset form (keeping name and email)
    alert('Thank you for your message');
    setFormData(prev => ({
      ...prev,
      message: '',
      orderType: 'feedback',
      customDetails: ''
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl font-bold mb-6">About Us</h1>
            <p className="text-gray-600 mb-8">
              Welcome to BookStore, your premier destination for literary excellence. 
              Founded in 2020, we've been serving book lovers with carefully curated 
              collections and exceptional customer service.
            </p>
            <p className="text-gray-600 mb-8">
              Our mission is to connect readers with their next favorite book while 
              fostering a community of literary enthusiasts.
            </p>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-purple-600 mr-2" />
                <h2 className="text-xl font-semibold">Hours of Operation</h2>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday–Friday</span>
                  <span className="text-gray-800 font-medium">9 a.m. to 8 p.m.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-gray-800 font-medium">10 a.m. to 6 p.m.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-gray-800 font-medium">11 a.m. to 5 p.m.</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="orderType">
                  Type
                </label>
                <select
                  id="orderType"
                  name="orderType"
                  value={formData.orderType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="feedback">General Feedback</option>
                  <option value="custom-order">Custom Order</option>
                </select>
              </div>
              {formData.orderType === 'custom-order' ? (
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="customDetails">
                    Custom Order Details
                  </label>
                  <textarea
                    id="customDetails"
                    name="customDetails"
                    value={formData.customDetails}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Please describe your custom order requirements..."
                    required
                  ></textarea>
                </div>
              ) : (
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  ></textarea>
                </div>
              )}
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}