import React from 'react';
import { Book, BookOpen, Users, Star, Truck, Shield, CreditCard, Gift } from 'lucide-react';

const categories = [
  { name: "Fiction", icon: BookOpen },
  { name: "Non-Fiction", icon: Book },
  { name: "Children's Books", icon: Users },
  { name: "Academic", icon: Star }
];

const perks = [
  { icon: Truck, title: "Free Shipping", description: "On orders over $50" },
  { icon: Shield, title: "Secure Shopping", description: "100% secure payment" },
  { icon: CreditCard, title: "Easy Returns", description: "30-day return policy" },
  { icon: Gift, title: "Member Rewards", description: "Earn points with every purchase" }
];

const featuredBooks = [
  {
    id: 1,
    title: "Ball",
    description: "a magazine about picklebal",
    image: "https://cdn.sophia.org/markup_pictures/42787/file/d2c65b7ff3661c4d3a945a80e13f657c.png"
  },
  {
    id: 2,
    title: "Glory Riders",
    description: "a book about bikers",
    image: "https://cdn.sophia.org/markup_pictures/42785/file/09d7c4abfd897fef28d79af05ca02e2e.png"
  },
  {
    id: 3,
    title: "A notebook",
    description: "with text on the cover that says Book Haven Bookstore",
    image: "https://cdn.sophia.org/markup_pictures/42791/file/4f5d6556ca4b5aadc11cce74adadb9d0.png"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to BookStore</h1>
            <p className="text-xl text-gray-600 mb-8">Your destination for literary adventures</p>
            <div className="bg-white p-4 rounded-lg shadow-md inline-block">
              <p className="text-purple-600 font-semibold">Special Offer!</p>
              <p className="text-gray-800">20% off on all new arrivals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer">
                  <Icon className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Shopping Perks */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shopping Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {perks.map((perk, index) => {
              const Icon = perk.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{perk.title}</h3>
                  <p className="text-gray-600">{perk.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Books */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
              <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="bg-purple-100 text-purple-600 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-2">
                    New Arrival
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                  <p className="text-gray-600 mb-4">{book.description}</p>
                  <p className="text-gray-600 mb-4">{book.author}</p>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}