
import React from 'react';
import { GraduationCap, Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Results', href: '#results' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' },
    { name: 'Careers', href: '#careers' }
  ];

  const courses = [
    { name: 'JEE Main & Advanced', href: '#jee' },
    { name: 'NEET UG', href: '#neet' },
    { name: 'UPSC Civil Services', href: '#upsc' },
    { name: 'Class 10th & 12th', href: '#boards' },
    { name: 'Banking & SSC', href: '#banking' },
    { name: 'NDA & CDS', href: '#defense' }
  ];

  const resources = [
    { name: 'Study Material', href: '#material' },
    { name: 'Mock Tests', href: '#tests' },
    { name: 'Previous Year Papers', href: '#papers' },
    { name: 'Current Affairs', href: '#current-affairs' },
    { name: 'Video Lectures', href: '#videos' },
    { name: 'Doubt Clearing', href: '#doubts' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Excellence Academy</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering students to achieve their dreams through quality education and expert guidance. Your success is our mission.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-lg hover:bg-pink-700 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-lg hover:bg-red-700 transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 p-2 rounded-lg hover:bg-blue-900 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Courses</h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <a href={course.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for exam updates, tips, and exclusive content
              </p>
            </div>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 Excellence Academy. All rights reserved. | Designed with ❤️ for your success
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
