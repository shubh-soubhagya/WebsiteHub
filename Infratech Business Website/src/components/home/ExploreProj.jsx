


// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// const ExploreProjHorizontal = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1, 
//       transition: { staggerChildren: 0.15 } 
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
//   };

//   return (
//     <section className="py-20 bg-slate-900 text-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.div
//           className="flex flex-col md:flex-row items-center justify-between gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//         >
//           {/* Left: Heading + Subtitle */}
//           <motion.div className="flex-1 space-y-4" variants={itemVariants}>
//             <h2 className="text-2xl md:text-4xl font-bold leading-tight">
//               Explore Our <br />
//               <span className="bg-clip-text text-4xl md:text-6xl text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
//                 Landmark Projects
//               </span>
//             </h2>
//             <p className="text-2xl text-slate-400 md:text-2xl test">
//               Discover the range of projects we’ve completed, showcasing our commitment to quality and innovation.
//             </p>
//           </motion.div>

//           {/* Right: Buttons */}
//           <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
//             <motion.button
//               className="inline-flex items-center gap-2 bg-cyan-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-cyan-500/20 hover:bg-cyan-700 transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Explore
//               <ArrowRight className="w-5 h-5" />
//             </motion.button>

//             <motion.button
//               className="bg-white text-slate-900 px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               View All Projects
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ExploreProjHorizontal;


import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ExploreProjHorizontal = () => {
  const navigate = useNavigate();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Left: Heading + Subtitle */}
          <motion.div className="flex-1 space-y-4 text-center md:text-left" variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Explore Our <br />
              <span className="bg-clip-text text-3xl sm:text-4xl md:text-6xl text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Landmark Projects
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-xl mx-auto md:mx-0">
              Discover the range of projects we’ve completed, showcasing our commitment to quality and innovation.
            </p>
          </motion.div>

          {/* Right: Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0 justify-center md:justify-start" variants={itemVariants}>
            <motion.button
              className="inline-flex items-center gap-2 bg-cyan-600 text-white px-6 sm:px-16 py-2 sm:py-3 rounded-xl font-semibold shadow-lg shadow-cyan-500/20 hover:bg-cyan-700 transition-all duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/services")}
            >
              Explore Our Services
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </motion.button>

            <motion.button
              className="bg-white text-slate-900 px-6 sm:px-14 py-2 sm:py-5 rounded-xl font-semibold shadow hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/projects")}
            >
              View All Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreProjHorizontal;
