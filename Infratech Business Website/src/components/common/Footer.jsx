import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', name: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', name: 'Twitter' },
    { icon: <Instagram size={20} />, href: '#', name: 'Instagram' },
    { icon: <Linkedin size={20} />, href: '#', name: 'LinkedIn' },
  ];

  const popularLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-black text-slate-300 pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">Mannati InfraTech</h3>
            <p className="text-slate-400 leading-relaxed">
              Born from Bihar's transformative spirit, we are a leading 'Infratech' firm dedicated to building a modern, prosperous future through projects of lasting value and integrity.
            </p>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-cyan-400 mt-1 flex-shrink-0" size={18} />
                <span>Bailey Road, Patna, Bihar, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-cyan-400 mt-1 flex-shrink-0" size={18} />
                <a href="tel:+911234567890" className="hover:text-cyan-400 transition-colors">+91 123 456 7890</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-cyan-400 mt-1 flex-shrink-0" size={18} />
                <a href="mailto:info@mannati.com" className="hover:text-cyan-400 transition-colors">info@mannati.com</a>
              </li>
            </ul>
          </div>

          {/* Popular Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Popular Links</h4>
            <ul className="space-y-3">
              {popularLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="w-2 h-0.5 bg-slate-500"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Placeholder */}
          <div className="md:col-start-2 lg:col-start-4">
             <h4 className="text-lg font-semibold text-white mb-6">Follow Us</h4>
             <p className="text-slate-400 mb-4">Stay connected with us on social media for the latest updates.</p>
             <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="p-2 bg-slate-800 rounded-full hover:bg-cyan-600 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-center">
          <p className="text-slate-500 text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} Mannati InfraTech. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );

};

export default Footer;
