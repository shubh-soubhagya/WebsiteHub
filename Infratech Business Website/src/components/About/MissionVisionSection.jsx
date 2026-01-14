import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Eye, ShieldCheck, Zap, Users } from "lucide-react";

// Content for the mission and vision panels
const missionData = {
  icon: Target,
  title: "Our Mission",
  statement: "To execute infrastructure projects with unmatched quality, integrity, and technological innovation, acting as a catalyst for sustainable development and economic prosperity in Bihar and beyond.",
  pillars: [
    { icon: ShieldCheck, text: "Unmatched Quality" },
    { icon: Zap, text: "Technological Innovation" },
    { icon: Users, text: "Community Prosperity" },
  ],
  accentColor: "cyan"
};

const visionData = {
  icon: Eye,
  title: "Our Vision",
  statement: "To be the most trusted and innovative infratech leader, shaping a future where modern, resilient, and intelligent infrastructure empowers communities and fosters growth for generations to come.",
  pillars: [
    { icon: ShieldCheck, text: "Trusted Leadership" },
    { icon: Zap, text: "Intelligent Infrastructure" },
    { icon: Users, text: "Generational Growth" },
  ],
  accentColor: "blue"
};

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const panelVariants = (direction = 1) => ({
  hidden: { opacity: 0, rotateY: 90 * direction, x: `${50 * direction}%` },
  visible: {
    opacity: 1,
    rotateY: 0,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      duration: 0.8,
    },
  },
});

const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
};


// Main Component
const MissionVisionSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="pb-24 sm:pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Our Guiding Principles
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Driven by a core mission and a clear vision, we are committed to building a better, more connected future.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          style={{ perspective: "1000px" }}
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Panel data={missionData} direction={-1} />
          <Panel data={visionData} direction={1} />
        </motion.div>
      </div>
    </section>
  );
};

// Panel Sub-component for reusability
const Panel = ({ data, direction }) => {
  const { icon: Icon, title, statement, pillars, accentColor } = data;
  const colorClasses = {
    cyan: {
        bg: 'bg-cyan-900/50',
        text: 'text-cyan-400',
        border: 'border-slate-700',
        hoverRing: 'hover:ring-cyan-400/20'
    },
    blue: {
        bg: 'bg-blue-900/50',
        text: 'text-blue-400',
        border: 'border-slate-700',
        hoverRing: 'hover:ring-blue-400/20'
    }
  }
  const colors = colorClasses[accentColor];

  return (
    <motion.div
      variants={panelVariants(direction)}
      className={`bg-gradient-to-br from-slate-900 to-blue-900/90 p-8 rounded-2xl shadow-lg border ${colors.border} transform-style-3d transition-all duration-300 hover:shadow-2xl hover:ring-4 ${colors.hoverRing}`}
    >
      <motion.div variants={contentVariants} className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-lg ${colors.bg}`}>
          <Icon className={`w-8 h-8 ${colors.text}`} />
        </div>
        <h3 className="text-3xl font-bold text-white">{title}</h3>
      </motion.div>
      <motion.p variants={contentVariants} className="text-slate-300 leading-relaxed mb-8">
        {statement}
      </motion.p>
      <motion.div variants={contentVariants}>
        <h4 className="font-semibold text-slate-200 mb-4">Core Pillars:</h4>
        <div className="space-y-3">
            {pillars.map((pillar, index) => {
                const PillarIcon = pillar.icon;
                return (
                    <div key={index} className="flex items-center gap-3">
                        <PillarIcon className={`w-5 h-5 ${colors.text}`} />
                        <span className="text-slate-300">{pillar.text}</span>
                    </div>
                )
            })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MissionVisionSection;

