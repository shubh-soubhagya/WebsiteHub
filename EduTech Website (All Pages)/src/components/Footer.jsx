import React from 'react';
import { Award, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg blur-md"></div>
                <div className="relative bg-gradient-to-br from-amber-400 to-orange-500 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-slate-900" />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                The Brilliant Bihar
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Bihar's premier institute for UPSC & BPSC preparation, committed to excellence and student success.
            </p>
            <div className="flex space-x-3">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, i) => (
                <button key={i} className="w-10 h-10 rounded-full bg-slate-800 hover:bg-gradient-to-br hover:from-amber-500 hover:to-orange-600 transition-all flex items-center justify-center group">
                  <div className="w-5 h-5 bg-gray-400 group-hover:bg-slate-900 rounded-full"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Courses', 'Faculty', 'Success Stories', 'Blog'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center space-x-2 group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-3">
              {['Current Affairs', 'Study Material', 'Test Series', 'Previous Papers', 'FAQs'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center space-x-2 group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="text-gray-400">
                <div className="font-semibold text-white mb-1">Address</div>
                Fraser Road, Patna<br />Bihar - 800001
              </li>
              <li className="text-gray-400">
                <div className="font-semibold text-white mb-1">Phone</div>
                +91 98765 43210
              </li>
              <li className="text-gray-400">
                <div className="font-semibold text-white mb-1">Email</div>
                info@brilliantbihar.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 The Brilliant Bihar. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map((link, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;