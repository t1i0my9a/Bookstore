import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing.');
    setEmail('');
  };

  return (
    <footer className="bg-primary text-secondary">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent-100">Home</Link></li>
              <li><Link to="/gallery" className="hover:text-accent-100">Gallery</Link></li>
              <li><Link to="/about" className="hover:text-accent-100">About Us</Link></li>
              <li><Link to="/events" className="hover:text-accent-100">Events</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Contact Us</h3>
            <p>123 Book Street</p>
            <p>Booktown, BT 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@bookhaven.com</p>
          </div>
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent-100"><Facebook /></a>
              <a href="#" className="hover:text-accent-100"><Twitter /></a>
              <a href="#" className="hover:text-accent-100"><Instagram /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-md w-full text-primary bg-secondary"
                  required
                />
                <button
                  type="submit"
                  className="bg-accent-300 px-4 py-2 rounded-r-md hover:bg-accent-400 flex items-center"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-accent-300 pt-8">
          <p>&copy; 2024 Book Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}