import React from 'react';
import { Calendar, Users, BookOpen } from 'lucide-react';

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Author Meet & Greet",
      date: "March 15, 2024",
      description: "Join us for an evening with bestselling author Jane Doe as she discusses her latest novel.",
      icon: Users
    },
    {
      id: 2,
      title: "Book Club Meeting",
      date: "March 20, 2024",
      description: "Monthly book club discussion featuring 'The Silent Patient' by Alex Michaelides.",
      icon: BookOpen
    },
    {
      id: 3,
      title: "Children's Story Time",
      date: "March 22, 2024",
      description: "Interactive storytelling session for kids aged 4-8 years.",
      icon: Calendar
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Upcoming Events</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => {
            const Icon = event.icon;
            return (
              <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
                <Icon className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-purple-600 mb-2">{event.date}</p>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                  Register Now
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Community Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Book Club of the Month</h3>
              <p className="text-gray-600">
                Congratulations to our Mystery Lovers Book Club for their outstanding 
                discussions and community engagement this month!
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Local Author Spotlight</h3>
              <p className="text-gray-600">
                Featuring local talent and their contributions to our literary community. 
                Submit your work to be featured!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}