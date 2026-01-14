import React from "react";
import { Building, Home, Globe, GanttChartSquare, Layers, Handshake, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";



const servicesData = [
  {
    title: "Construction",
    description: "End-to-end solutions with a focus on quality, safety, and on-time delivery for projects of all scales.",
    icon: Building,
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    link: "/projects",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Infrastructure Development",
    description: "Building large-scale public infrastructure like highways and bridges to connect communities and fuel regional growth.",
    icon: Globe,
    imageUrl: "https://images.unsplash.com/photo-1570122244247-1e5b15b2a47f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    link: "/projects",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Architectural Design",
    description: "Our in-house creative team designs functional, sustainable, and aesthetically inspiring spaces for modern living.",
    icon: Layers,
    imageUrl: "https://images.unsplash.com/photo-1581092446347-a56c5a04a004?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    link: "/projects",
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Project Management",
    description: "Expert oversight from conception to completion, ensuring your project stays on budget, on schedule, and meets every goal.",
    icon: GanttChartSquare,
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    link: "/projects",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Real Estate Advisory",
    description: "Expert guidance on buying, selling, and managing high-value properties and land assets with market-driven confidence.",
    icon: Home,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    link: "/projects",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    title: "Public-Private Partnerships",
    description: "Collaborating with government bodies to finance, build, and operate vital public infrastructure projects for community benefit.",
    icon: Handshake,
    imageUrl: "https://images.unsplash.com/photo-1613963931023-5dc1595632d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    link: "/projects",
    gradient: "from-teal-500 to-cyan-500"
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "50+", label: "Expert Team Members" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "25+", label: "Years Experience" },
];

const benefits = [
  "Certified professionals with proven expertise",
  "Cutting-edge technology and methodologies",
  "Sustainable and eco-friendly practices",
  "24/7 project monitoring and support"
];

// --- Animation Variants ---
const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: (index) => ({ 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1],
      delay: index * 0.1
    } 
  }),
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1],
      delay: index * 0.1
    }
  }),
};

const ServicesPage = () => {
  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: benefitsRef, inView: benefitsInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
            alt="Construction background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-cyan-900/80"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full text-cyan-300 text-xs md:text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Premium Construction & Infrastructure Services</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold !leading-tight mb-6">
            Build Your{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
                Vision
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </h1>
          
          <p className="mt-6 text-base md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Transforming ambitious ideas into architectural masterpieces with expert design, innovative infrastructure, and seamless project execution.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-300 text-sm md:text-base"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 text-sm md:text-base"
              onClick={() => navigate("/projects")}
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ opacity: { delay: 1.2 }, y: { repeat: Infinity, duration: 2 } }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </motion.div> */}
      </section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        variants={sectionVariants}
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
        className="relative -mt-24 z-20"
      >
        <div className="max-w-6xl mx-auto px-6 py-10 lg:px-8">
          <div className="bg-white rounded-1xl shadow-2xl border border-slate-200/50 p-6 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={statVariants}
                  initial="hidden"
                  animate={statsInView ? "visible" : "hidden"}
                  className="text-center"
                >
                  <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-slate-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Grid Section */}
      <motion.section 
        ref={servicesRef}
        variants={sectionVariants}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-32"
      >
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 md:px-4 md:py-2 bg-cyan-100 text-cyan-700 rounded-full text-xs md:text-sm font-semibold mb-4">
              What We Offer
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
              Our Premium <span className="bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text">Services</span>
            </h2>
            <p className="text-sm md:text-lg text-slate-900 leading-relaxed">
              From groundbreaking construction to strategic real estate advisory, we deliver comprehensive solutions that transform visions into reality.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={servicesInView ? "visible" : "hidden"}
                whileHover={{ y: -12, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                className="bg-white rounded-3xl shadow-lg border border-slate-200/50 overflow-hidden group flex flex-col hover:shadow-2xl hover:border-slate-300/60 transition-all duration-300 relative"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`} />
                
                <div className="h-64 overflow-hidden relative">
                  <motion.img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <motion.div 
                    className="absolute top-4 right-4 w-14 h-14 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-7 h-7 text-cyan-600" />
                  </motion.div>
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 flex-grow leading-relaxed mb-4 md:mb-6">
                    {service.description}
                  </p>
                  <motion.a 
                    href={service.link} 
                    className={`inline-flex items-center gap-2 font-bold text-xs md:text-sm bg-gradient-to-r ${service.gradient} text-transparent bg-clip-text group-hover:gap-3 transition-all duration-300`}
                    whileHover={{ x: 4 }}
                    onClick={() => navigate("/projects")}
                  >
                    Explore Projects 
                    <ArrowRight className="w-5 h-5 text-cyan-600" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        ref={benefitsRef}
        variants={sectionVariants}
        initial="hidden"
        animate={benefitsInView ? "visible" : "hidden"}
        className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-3 py-1 md:px-4 md:py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-xs md:text-sm font-semibold mb-4 md:mb-6">
                Why Choose Us
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
                Excellence in Every <span className="text-cyan-400">Detail</span>
              </h2>
              <p className="text-sm md:text-lg text-slate-300 leading-relaxed mb-6 md:mb-8">
                We combine decades of experience with cutting-edge innovation to deliver projects that exceed expectations and stand the test of time.
              </p>
              
              <div className="space-y-2 md:space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-2 md:gap-3"
                  >
                    <CheckCircle2 className="w-4 md:w-6 h-4 md:h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-xs md:text-base text-slate-200">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-6 md:-bottom-8 -left-6 md:-left-8 bg-white rounded-2xl shadow-2xl p-4 md:p-6 border border-slate-200"
              >
                <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text mb-1 md:mb-2">
                  #1
                </div>
                <div className="text-xs md:text-sm text-slate-700 font-medium">Industry Leader</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        ref={ctaRef}
        variants={sectionVariants}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        className="py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 text-white py-16 md:py-20 px-6 md:px-16 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-6 md:gap-8">
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-sm md:text-xl text-white/90 leading-relaxed">
                  Let's collaborate to bring your vision to life. Our expert team is ready to guide you through every step of your construction journey.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 flex-shrink-0">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 md:px-8 py-3 md:py-4 bg-white text-cyan-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 md:px-8 py-3 md:py-4 bg-white/10 border border-white/40 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 text-sm md:text-base"
                  onClick={() => navigate("/about")}
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;
