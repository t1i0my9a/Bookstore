import React from 'react';
import { Book } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://cdn.sophia.org/markup_pictures/38798/file/4432c6d423053619dc2b8c2bd19a08f1.png" 
                alt="Home" 
                className="h-8 w-8"
              />
              <span className="ml-2 text-xl font-serif font-bold text-secondary">Book Haven</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-secondary hover:text-accent-100">Home</Link>
            <Link to="/gallery" className="text-secondary hover:text-accent-100">Gallery</Link>
            <Link to="/about" className="text-secondary hover:text-accent-100">About Us</Link>
            <Link to="/events" className="text-secondary hover:text-accent-100">Events</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}