import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, Send, Building } from 'lucide-react';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const iconVariants = {
    hover: {
        scale: 1.1,
        rotate: 5,
        transition: { type: "spring", stiffness: 300, damping: 10 }
    }
}

// --- Reusable Components ---
const ContactInfoCard = ({ icon: Icon, title, children }) => (
  <motion.div
    variants={fadeInUp}
    className="relative flex items-start gap-5 p-6 bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden backdrop-blur-sm"
  >
    <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-500"></div>
    <motion.div 
        className="p-3 bg-slate-700/50 rounded-xl border-2 border-slate-600"
        variants={iconVariants}
        whileHover="hover"
    >
      <Icon className="w-6 h-6 text-cyan-400" />
    </motion.div>
    <div className='pl-2'>
      <h3 className="text-xl font-bold text-slate-100 mb-1">{title}</h3>
      <div className="text-slate-400 leading-relaxed">{children}</div>
    </div>
  </motion.div>
);

const FormInput = ({ type = 'text', name, placeholder, value, onChange }) => (
  <div>
    <label htmlFor={name} className="sr-only">
      {placeholder}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="w-full px-5 py-3.5 bg-slate-700/50 border border-slate-600 rounded-lg placeholder-slate-400 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 shadow-sm hover:border-slate-500"
    />
  </div>
);

// --- Main Contact Us Page Component ---
const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: mapRef, inView: mapInView } = useInView({ triggerOnce: true, threshold: 0.1 });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate API call
    console.log('Form data submitted:', formData);
    setTimeout(() => {
        setIsSubmitting(false);
        setSubmitMessage('Thank you for your message! We will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitMessage(''), 5000); // Clear message after 5 seconds
    }, 2000);
  };

  return (
    <div className="bg-slate-900 min-h-screen font-manrope text-slate-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
        className="relative py-32 overflow-hidden"
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-20">
          <motion.div variants={fadeInUp}>
            <span className="inline-block px-5 py-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full text-cyan-300 font-semibold text-sm tracking-wider uppercase">
              Contact Us
            </span>
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-extrabold text-slate-100 mt-6 mb-4 tracking-tight"
          >
            Get in <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">Touch</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </motion.p>
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.section
        ref={contentRef}
        initial="hidden"
        animate={contentInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
          {/* Left Side: Contact Info */}
          <motion.div variants={staggerContainer} className="flex flex-col gap-8">
            <ContactInfoCard icon={Building} title="Main Office">
              <p>Connaught Place</p>
              <p>New Delhi, 110001, India</p>
            </ContactInfoCard>
            <ContactInfoCard icon={Phone} title="Phone">
                <a href="tel:+919876543210" className="hover:text-cyan-400 transition-colors">+91 98765 43210</a>
                <p className='text-sm text-slate-500 mt-1'>Mon - Fri, 9:00 AM - 6:00 PM (IST)</p>
            </ContactInfoCard>
            <ContactInfoCard icon={Mail} title="Email">
                <a href="mailto:contact@mannati.com" className="hover:text-cyan-400 transition-colors">contact@mannati.com</a>
                <p className='text-sm text-slate-500 mt-1'>We reply within 24 hours</p>
            </ContactInfoCard>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            variants={fadeInUp}
            className="relative bg-slate-800/50 p-8 md:p-10 rounded-2xl border border-slate-700 backdrop-blur-sm shadow-2xl overflow-hidden"
          >
            <div className="absolute -top-1/2 -right-1/2 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="relative">
                <h2 className="text-3xl font-bold text-slate-100 mb-2">Send Us a Message</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mb-8 rounded-full"></div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <FormInput name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} />
                  <FormInput type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} />
                  <FormInput name="subject" placeholder="Subject" value={formData.subject} onChange={handleInputChange} />
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      required
                      className="w-full px-5 py-3.5 bg-slate-700/50 border border-slate-600 rounded-lg placeholder-slate-400 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 shadow-sm hover:border-slate-500"
                    ></textarea>
                  </div>
                  <div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />}
                    </motion.button>
                  </div>
                </form>
                {submitMessage && (
                    <p className="mt-4 text-center text-emerald-400 font-semibold">{submitMessage}</p>
                )}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section 
        ref={mapRef}
        initial={{ opacity: 0, y: 50 }}
        animate={mapInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl font-extrabold text-center text-slate-100 mb-12 tracking-tight">Find Us Here</h2>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28019.58474149954!2d77.2001030999052!3d28.61679092476054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741cf11%3A0x35114227344538e4!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1729170366929!5m2!1sen!2sin"
                    width="100%"
                    height="500"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(30%)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location Map"
                ></iframe>
            </div>
        </div>
      </motion.section>
    </div>
  );a
};

export default ContactUsPage;

