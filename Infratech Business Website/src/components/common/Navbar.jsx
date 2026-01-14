import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = isScrolled
    ? 'bg-white text-black shadow-md'
    : 'bg-transparent text-white';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${navClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/home" className="text-xl sm:text-2xl font-bold">
              Mannati Infratech
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm sm:text-base">
            <a
              href="/"
              className="font-medium hover:text-cyan-400 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="/about"
              className="font-medium hover:text-cyan-400 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="/projects"
              className="font-medium hover:text-cyan-400 transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="/services"
              className="font-medium hover:text-cyan-400 transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="/contact"
              className="font-medium hover:text-cyan-400 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* Social Icons (desktop + mobile) */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm sm:text-base">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="mailto:contact@mannati.com"
              aria-label="Email"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              <HiOutlineMail size={26} />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-black px-6 pb-6 space-y-4">
          <a
            href="/"
            className="block font-medium hover:text-cyan-400 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="/about"
            className="block font-medium hover:text-cyan-400 transition-colors duration-200"
          >
            About
          </a>
          <a
            href="/projects"
            className="block font-medium hover:text-cyan-400 transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="/services"
            className="block font-medium hover:text-cyan-400 transition-colors duration-200"
          >
            Services
          </a>
          <a
            href="/contact"
            className="block font-medium hover:text-cyan-400 transition-colors duration-200"
          >
            Contact Us
          </a>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="mailto:contact@mannati.com"
              aria-label="Email"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              <HiOutlineMail size={22} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
