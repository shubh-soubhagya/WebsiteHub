// import React from "react";
// import { motion } from "framer-motion";

// const HeroSection = () => (
//   <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white bg-black">
//     <div className="absolute inset-0 z-0">
//       <img
//         src="https://images.unsplash.com/photo-1519043916581-33ecfdba3b1c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
//         alt="Modern Infrastructure Project"
//         className="w-full h-full object-cover opacity-30"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
//     </div>
//     <div className="relative z-10 text-center px-6">
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         className="text-lg font-semibold text-cyan-400 mb-2 tracking-widest"
//       >
//         ABOUT MANNATI INFRATECH
//       </motion.p>
//       <motion.h1
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.4 }}
//         className="text-5xl md:text-7xl font-extrabold leading-tight"
//       >
//         Engineering Bihar's
//         <br />
//         <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
//           Progressive Future
//         </span>
//       </motion.h1>
//     </div>
//   </section>
// );

// export default HeroSection;


import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react"; // A popular icon library, run: npm install lucide-react

const HeroSection = () => {
  // Animation variants for orchestrating the reveal effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Each child will animate 0.2s after the previous one
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  
  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1], // A smooth easing curve
      },
    },
  }

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center text-white bg-slate-900 overflow-hidden">
      {/* Background Image & Overlay */}
      <motion.div 
        className="absolute inset-0 z-0"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src="https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Architectural collaboration over blueprints"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 md:px-6 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-sm font-semibold text-cyan-400 uppercase tracking-[0.2em] mb-4"
        >
          Mannati Infratech
        </motion.p>
        
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-extrabold !leading-tight"
        >
          Engineering Bihar's
          <br />
          <span className="bg-gradient-to-r from-cyan-300 to-blue-500 text-transparent bg-clip-text">
            Progressive Future
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants} 
          className="max-w-xl mx-auto mt-6 text-base md:text-lg text-slate-300"
        >
          We build more than structures; we build trust, innovation, and a sustainable tomorrow for our communities.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10">
          <motion.a
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 text-black font-semibold rounded-full shadow-lg shadow-cyan-500/20"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            Explore Our Services
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
