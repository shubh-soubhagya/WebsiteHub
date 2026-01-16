import React, { useState } from 'react';
import { Menu, X, Home, Info, Users, GraduationCap, Calendar, Phone } from 'lucide-react';

const NavLink = ({ href, children, Icon, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition-colors duration-300 hover:bg-gray-700 hover:text-white"
  >
    <Icon className="h-4 w-4" />
    <span>{children}</span>
  </a>
);

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About Us', href: '#about', icon: Info },
    { name: 'Faculty', href: '#faculty', icon: Users },
    { name: 'Courses', href: '#courses', icon: GraduationCap },
    { name: 'Events', href: '#events', icon: Calendar },
    { name: 'Contact Us', href: '#contact', icon: Phone },
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-black shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-white tracking-wide">
              The Brilliant Bihar
            </a>
          </div>

          {/* Centered Desktop Links */}
          <div className="hidden sm:flex sm:flex-1 sm:justify-center sm:space-x-6">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href} Icon={link.icon}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              href={link.href}
              Icon={link.icon}
              onClick={closeMobileMenu}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
