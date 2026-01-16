import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  // Animation variants for the main container to stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Animation variants for individual items
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };
  
  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <motion.footer 
      className="bg-black text-white pt-20 pb-8 px-4 sm:px-6 lg:px-8 font-sans"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & Mission */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
              The Brilliant Bihar
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering the next generation of leaders and innovators through accessible, world-class education.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-5 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 transform hover:-translate-y-px inline-block">Home</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 transform hover:-translate-y-px inline-block">Courses</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 transform hover:-translate-y-px inline-block">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 transform hover:-translate-y-px inline-block">Mentors</a></li>
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-5 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 shrink-0 text-cyan-400"/>
                <span>Patna, Bihar, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-1 shrink-0 text-cyan-400"/>
                <a href="mailto:contact@brilliantbihar.com" className="hover:text-cyan-400 transition-colors duration-300">contact@brilliantbihar.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-1 shrink-0 text-cyan-400"/>
                <a href="tel:+911234567890" className="hover:text-cyan-400 transition-colors duration-300">+91 12345 67890</a>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Legal */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-5 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 transform hover:-translate-y-px inline-block">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 transform hover:-translate-y-px inline-block">Terms of Service</a></li>
            </ul>
          </motion.div>

        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <motion.div 
          className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-sm text-slate-500 text-center sm:text-left mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} The Brilliant Bihar. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-5">
            {socialLinks.map((social, index) => (
              <motion.a 
                key={index} 
                href={social.href} 
                className="text-slate-500 hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
