import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Landmark, PenTool, Globe, ArrowRight } from "lucide-react";

const CoursesSection = () => {
  // --- Course Data ---
  const courses = [
    {
      icon: <Landmark className="w-7 h-7 text-amber-400" />,
      title: "UPSC — Indian Polity",
      description:
        "Master the Constitution, governance, and political frameworks through in-depth conceptual clarity and PYQs.",
    },
    {
      icon: <BookOpen className="w-7 h-7 text-amber-400" />,
      title: "BPSC — History & Culture",
      description:
        "Explore ancient to modern Indian history with Bihar’s rich cultural and political context in focus.",
    },
    {
      icon: <PenTool className="w-7 h-7 text-amber-400" />,
      title: "Essay Writing Excellence",
      description:
        "Learn the art of structuring, articulating, and presenting essays for UPSC and BPSC mains with expert evaluation.",
    },
    {
      icon: <Globe className="w-7 h-7 text-amber-400" />,
      title: "Current Affairs Masterclass",
      description:
        "Daily updates and analytical sessions covering national, international, and Bihar-specific developments.",
    },
  ];

  // --- Animations ---
  const sectionAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const gridContainerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const gridItemAnimation = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <motion.section
      className="bg-black text-white py-24 px-6 sm:px-8 lg:px-12 flex items-center justify-center relative overflow-hidden"
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[60rem] h-[60rem] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-amber-900/40 to-slate-900/20 rounded-full blur-3xl opacity-30 z-0"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold font-serif mb-6 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Premier Courses
        </motion.h2>
        <motion.p
          className="text-slate-400 text-lg max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Structured, syllabus-aligned, and mentorship-driven courses designed to help aspirants excel in UPSC and BPSC examinations.
        </motion.p>

        {/* Course Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl"
          variants={gridContainerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {courses.map((course) => (
            <motion.div
              key={course.title}
              className="p-[1.5px] bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl"
              variants={gridItemAnimation}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <div className="bg-black rounded-2xl h-full w-full p-6 flex flex-col items-start text-left">
                <div className="p-2 bg-slate-800/80 rounded-lg mb-4">
                  {course.icon}
                </div>
                <h3 className="font-semibold text-lg text-slate-100 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {course.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Explore More Button */}
        <motion.a
          href="/courses"
          className="mt-12 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold text-lg rounded-lg shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Explore 15+ More Courses
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
        </motion.a>
      </div>
    </motion.section>
  );
};

export default CoursesSection;
