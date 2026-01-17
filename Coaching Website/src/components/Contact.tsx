
import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your journey to success? Contact us today for admissions, course details, or any queries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Our Locations</h4>
                  <p className="text-gray-300 mt-1">
                    <strong>Main Campus:</strong> 123 Education Hub, Connaught Place, New Delhi - 110001
                  </p>
                  <p className="text-gray-300">
                    <strong>Branch:</strong> 45 Knowledge Park, Sector 62, Noida - 201309
                  </p>
                  <p className="text-gray-300">
                    <strong>Branch:</strong> 78 Academic Street, Kota, Rajasthan - 324005
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-600 p-3 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone Numbers</h4>
                  <p className="text-gray-300 mt-1">Main Office: +91 11 4567 8901</p>
                  <p className="text-gray-300">Admissions: +91 11 4567 8902</p>
                  <p className="text-gray-300">WhatsApp: +91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email Addresses</h4>
                  <p className="text-gray-300 mt-1">info@excellenceacademy.in</p>
                  <p className="text-gray-300">admissions@excellenceacademy.in</p>
                  <p className="text-gray-300">support@excellenceacademy.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-600 p-3 rounded-lg">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Office Hours</h4>
                  <p className="text-gray-300 mt-1">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                  <p className="text-gray-300">Sunday: 10:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Emergency Support: 24/7</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                WhatsApp Chat
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Call Now
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Course Interested In</label>
                <select className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors duration-200">
                  <option>Select a course</option>
                  <option>JEE Main & Advanced</option>
                  <option>NEET UG</option>
                  <option>UPSC Civil Services</option>
                  <option>Class 10th & 12th Boards</option>
                  <option>Banking & SSC</option>
                  <option>NDA & CDS</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                  placeholder="Tell us about your goals and how we can help you"
                ></textarea>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-gray-800 rounded-2xl p-4">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.674860380089!2d77.21618931508236!3d28.633785882429686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0683329803%3A0x1a2b3c4d5e6f7890!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1629456789012!5m2!1sen!2sin"
              width="100%" 
              height="300" 
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Excellence Academy Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
