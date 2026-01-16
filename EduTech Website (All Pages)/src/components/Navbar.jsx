import React, { useState, useEffect } from 'react';
import { Menu, X, Award } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg blur-md group-hover:blur-lg transition-all"></div>
              <div className="relative bg-gradient-to-br from-amber-400 to-orange-500 p-2 rounded-lg transform group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-slate-900" />
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
              The Brilliant Bihar
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Courses', 'Teachers', 'About', 'Contact'].map((item, i) => (
              <a key={i} href={`#${item.toLowerCase()}`} className="relative text-gray-300 hover:text-white transition-colors group">
                <span className="relative z-10">{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button className="relative group overflow-hidden px-6 py-2.5 rounded-full font-semibold">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 group-hover:scale-110 transition-transform"></div>
              <span className="relative text-slate-900">Enroll Now</span>
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-xl border-t border-slate-800">
          <div className="px-6 py-4 space-y-4">
            {['Home', 'Courses', 'Teachers', 'About', 'Contact'].map((item, i) => (
              <a key={i} href={`#${item.toLowerCase()}`} className="block text-gray-300 hover:text-amber-400 transition-colors py-2">
                {item}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-slate-900 font-semibold py-3 rounded-full">
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;