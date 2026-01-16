import React from 'react';
import { ArrowRight, UserPlus, Users, BookOpen, Award, Target, Briefcase, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import heroVideo from '../../assets/6913997_Motion_Graphics_Motion_Graphic_3840x2160.mp4'; // Import your .mp4 video

const HomeHero = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Students Enrolled' },
    { icon: BookOpen, value: '95%', label: 'Success Rate' },
    { icon: Award, value: '500+', label: 'Top Rankers' },
    { icon: Target, value: '50+', label: 'Courses Available' },
    { icon: Briefcase, value: '30+', label: 'Expert Educators' },
    { icon: Clock, value: '15+', label: 'Years of Experience' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-black">
      
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
      />

      {/* Optional Overlay for readability */}
      {/* <div className="absolute inset-0 bg-black/20"></div> */}

      <div className="relative z-10 text-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-0 py-12">

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight sm:leading-snug font-serif drop-shadow-lg"
        >
          Transform Your Civil Service Dreams!
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="mt-6 text-lg md:text-xl max-w-4xl mx-auto font-sans drop-shadow-md"
        >
          Join Brilliant Bihar and unlock your potential with expert guidance, comprehensive study materials, and personalized mentorship.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease: 'easeOut' }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#register"
            className="group flex items-center justify-center gap-3 px-10 py-4 bg-black text-white font-semibold text-lg rounded-lg shadow-lg hover:scale-105 hover:bg-gray-900 transition-all duration-300 font-sans"
          >
            <UserPlus className="w-5 h-5" />
            Register Now
          </a>

          <a
            href="#offerings"
            className="group flex items-center justify-center gap-3 px-10 py-4 border-2 border-black text-black font-semibold text-lg rounded-lg hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 font-sans"
          >
            Explore Offerings
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </a>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: 'easeOut' }}
          className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-16 max-w-6xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 1.1 + index * 0.1,
                ease: 'easeOut'
              }}
              className="text-center group"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-black/10 rounded-full group-hover:bg-black/20 transition-colors duration-300">
                  <stat.icon className="w-7 h-7 text-black" />
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold font-serif group-hover:text-gray-800 transition-colors duration-300">
                {stat.value}
              </h3>
              <p className="text-gray-600 mt-1.5 font-sans group-hover:text-gray-700 transition-colors duration-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HomeHero;
