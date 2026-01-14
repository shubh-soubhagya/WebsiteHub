import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building, Landmark, Cpu, Globe, TrendingUp } from "lucide-react";

// Timeline data remains the same
const timelineEvents = [
  {
    year: "2010",
    title: "Foundation & Vision",
    description: "Established in Patna with a vision to build Bihar's future through quality, integrity, and sustainable engineering.",
    icon: "Building",
  },
  {
    year: "2014",
    title: "First Landmark Project",
    description: "Completed our first major government contract for a critical highway expansion, setting a new regional benchmark for quality.",
    icon: "Landmark",
  },
  {
    year: "2018",
    title: "Technological Integration",
    description: "Pioneered advanced drone surveying and 3D modeling, greatly boosting our project efficiency and precision.",
    icon: "Cpu",
  },
  {
    year: "2023",
    title: "Expansion & Diversification",
    description: "Opened our new state-of-the-art headquarters in Chautham and expanded operations into sustainable urban development.",
    icon: "Globe",
  },
  {
    year: "Future Focus",
    title: "Leading Towards Tomorrow",
    description: "Our focus is now on green infrastructure, contributing to Bihar's long-term goal of becoming a net-zero state.",
    icon: "TrendingUp",
  },
];

// Icon mapping for dynamic component rendering
const iconMap = {
  Building: (props) => <Building {...props} />,
  Landmark: (props) => <Landmark {...props} />,
  Cpu: (props) => <Cpu {...props} />,
  Globe: (props) => <Globe {...props} />,
  TrendingUp: (props) => <TrendingUp {...props} />,
};


const StorySection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // A bit more of the component needs to be in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900">
            A Journey of Innovation
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            From a humble beginning to a leader in regional infratech, our story is one of ambition, integrity, and relentless progress.
          </p>
        </div>

        {/* Timeline */}
        <motion.div
            className="relative flex flex-col md:flex-row items-start md:items-center justify-center gap-y-20 md:gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
        >
            {/* Horizontal connector line - clean and simple */}
            <motion.div
                className="absolute top-10 left-0 w-full h-0.5 bg-slate-200 hidden md:block"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2, ease: 'easeOut', delay: 0.5 }}
                style={{ originX: 0 }}
            />
            
            {/* Cards */}
            {timelineEvents.map((event, index) => {
                const IconComponent = iconMap[event.icon];
                return (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className="relative z-10 flex flex-col items-center text-center w-full max-w-xs md:max-w-none md:w-60"
                    >
                        {/* Icon bubble */}
                        <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg border-4 border-slate-50 mb-6">
                            {IconComponent && <IconComponent className="w-9 h-9 text-white" />}
                        </div>

                        {/* Card */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 w-full h-70 flex flex-col">
                            <p className="text-xl font-bold text-cyan-600">{event.year}</p>
                            <h3 className="text-lg font-semibold text-slate-800 mt-2 mb-2">{event.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed flex-grow">{event.description}</p>
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;

