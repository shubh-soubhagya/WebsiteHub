import React from 'react';
import { motion } from 'framer-motion';
import { BookCheck, MessageSquare, Users, BarChart3, Star, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  // Updated data structure for the feature grid
  const features = [
    {
      icon: <BookCheck className="w-7 h-7 text-cyan-400" />,
      title: "Mastery-Focused Learning",
      description: "Rigorous test series and model answers to master exam patterns.",
    },
    {
      icon: <Users className="w-7 h-7 text-cyan-400" />,
      title: "Elite Mentorship",
      description: "Direct guidance from distinguished civil servants (IAS, IPS).",
    },
    {
      icon: <MessageSquare className="w-7 h-7 text-cyan-400" />,
      title: "24/7 Support System",
      description: "Inspiring workshops and round-the-clock doubt resolution.",
    },
    {
      icon: <BarChart3 className="w-7 h-7 text-cyan-400" />,
      title: "AI-Powered Insights",
      description: "Progress analysis to identify your unique strengths and weaknesses.",
    },
  ];

  // UPDATED: Animation for the main container is now a gentle fade-in instead of a slide-up.
  const sectionAnimation = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  // Staggered animation for the feature grid
  const gridContainerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const gridItemAnimation = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring' } }
  };

  return (
    <motion.section
      className="bg-black text-white min-h-screen flex items-center justify-center py-24 px-6 sm:px-8 lg:px-12 relative z-10 overflow-hidden"
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gradient-to-tr from-cyan-900/40 to-slate-900/20 rounded-full filter blur-3xl opacity-30 z-0"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">

        {/* Left Column: Narrative */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-serif mb-6 flex items-center gap-4 text-slate-100">
            <Star className="w-8 h-8 text-cyan-400" />
            Our Foundation
          </h2>
          <div className="space-y-5 text-slate-300 text-lg leading-relaxed font-sans">
            <p>
              Brilliant Bihar is more than an initiative; it's a movement to ensure that in the heart of Bihar, ambition is never constrained by circumstance.
            </p>
            <p>
              We provide premier, completely free educational resources and direct mentorship from civil servants who have paved the very path our students aspire to walk.
            </p>
          </div>
          <motion.a
            href="/about"
            className="group mt-10 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            More About Us
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </motion.a>
        </motion.div>

        {/* Right Column: Feature Grid */}
        <motion.div 
          className="grid grid-cols-2 gap-4 sm:gap-6"
          variants={gridContainerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="p-[1.5px] bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl"
              variants={gridItemAnimation}
              whileHover={{ scale: 1.03, transition: { type: 'spring', stiffness: 300 } }}
            >
              <div className="bg-black h-full w-full rounded-2xl p-6 flex flex-col items-start justify-start">
                <div className="p-2 bg-slate-800/80 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg text-slate-100 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;

