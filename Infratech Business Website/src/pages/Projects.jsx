import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Router, Building2, Droplets, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// --- Data Structure for Projects ---
const projectsData = [
  {
    category: "Transportation & Highways",
    icon: Router,
    description: "Building the arteries of progress, we construct robust and efficient transportation networks that connect communities and fuel economic growth.",
    projects: [
      {
        title: "NH-31 Highway Expansion Project",
        location: "Begusarai - Khagaria Sector",
        summary: "A 75km expansion to a six-lane highway, incorporating advanced asphalt technology and safety features to reduce congestion.",
        imageUrl: "https://images.unsplash.com/photo-1599691542527-04f74fe9a6a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        status: "Completed",
      },
      {
        title: "Chautham Arterial Road Network",
        location: "Chautham, Bihar",
        summary: "Development of a new 45km ring road and arterial network to improve local connectivity around our new headquarters.",
        imageUrl: "https://images.unsplash.com/photo-1509316976299-60165822f378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        status: "Completed",
      },
      {
        title: "Kosi River Mega Bridge",
        location: "Connecting Supaul and Madhubani",
        summary: "A state-of-the-art cable-stayed bridge designed to withstand seismic activity and improve all-weather transport.",
        imageUrl: "https://images.unsplash.com/photo-1524706935313-0a728b7e7d6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        status: "In Progress",
      },
    ],
  },
  {
    category: "Urban Development",
    icon: Building2,
    description: "Crafting modern, sustainable urban spaces that enhance quality of life and create vibrant community hubs for future generations.",
    projects: [
      {
        title: "Patna Smart City Redevelopment",
        location: "Patna, Bihar",
        summary: "A landmark project involving intelligent traffic systems, sustainable waste management, and public space revitalization.",
        imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        status: "Completed",
      },
      {
        title: "Mannati Infratech HQ",
        location: "Chautham, Bihar",
        summary: "Our new headquarters, a LEED Platinum certified green building, showcasing the future of corporate infrastructure.",
        imageUrl: "https://images.unsplash.com/photo-1613963931023-5dc1595632d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        status: "Completed",
      },
    ],
  },
  {
    category: "Water & Environmental",
    icon: Droplets,
    description: "Engineering solutions for water management and environmental sustainability, ensuring the preservation of our natural resources.",
    projects: [
       {
        title: "Ganga Riverfront Beautification",
        location: "Patna, Bihar",
        summary: "An eco-friendly development of ghats and public parks along the Ganga, including water treatment facilities.",
        imageUrl: "https://images.unsplash.com/photo-1621503219362-92353162776c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        status: "Completed",
      },
      {
        title: "Bihar Rural Water Supply Scheme",
        location: "State-wide",
        summary: "A large-scale initiative to provide piped, potable water to over 500 villages, improving public health and sanitation.",
        imageUrl: "https://images.unsplash.com/photo-1591182432395-519d679b83a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        status: "In Progress",
      },
    ]
  }
];


// --- Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};

const cardGridVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
    },
};

const iconFloatVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// --- Sub-components for Cleaner Code ---
const ProjectCard = ({ project }) => {
  const isCompleted = project.status === "Completed";
const navigate = useNavigate();
  return (
    <motion.div 
      variants={cardVariants} 
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-md border border-slate-200/80 overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:border-cyan-200"
    >
      <div className="relative overflow-hidden h-64">
        <motion.img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover" 
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
        <motion.div 
          className={`absolute top-5 right-5 px-4 py-1.5 text-xs font-bold text-white rounded-full backdrop-blur-md ${isCompleted ? 'bg-emerald-500/90' : 'bg-orange-500/90'}`}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {project.status}
        </motion.div>
      </div>
      <div className="p-7">
        <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300">{project.title}</h3>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-1 rounded-full bg-cyan-500"></div>
          <p className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">{project.location}</p>
        </div>
        <p className="text-slate-600 text-base leading-relaxed">{project.summary}</p>
        <motion.div 
          className="mt-6 flex items-center text-cyan-600 font-semibold text-sm group-hover:text-cyan-700 cursor-pointer"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        onClick={() => navigate("/contact")}

        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectCategory = ({ data, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const Icon = data.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.section 
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`py-24 relative ${isEven ? 'bg-white' : 'bg-slate-50'}`}
    >
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeInUp}
        >
          <motion.div 
            className="mx-auto bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-5 rounded-2xl border-2 border-cyan-500/20 w-fit mb-6 shadow-lg"
            variants={iconFloatVariants}
            animate="animate"
          >
            <Icon className="w-10 h-10 text-cyan-600" />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 to-slate-700 text-transparent bg-clip-text tracking-tight">
            {data.category}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-700 text-lg leading-relaxed">{data.description}</p>
        </motion.div>
        
        <motion.div 
          variants={cardGridVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {data.projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

// --- Main Projects Page Component ---
const ProjectsPage = () => {
 const navigate = useNavigate();

 return (
    <div className="bg-white min-h-screen font-manrope">
      {/* Hero Section */}
      <section className="relative h-[75vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Collaborative engineering project"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-900/50 to-cyan-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <motion.div 
          className="absolute inset-0 backdrop-blur-[1px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
        
        {/* Animated Grid Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </motion.div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-block px-5 py-2 bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 rounded-full text-cyan-300 font-semibold text-sm tracking-wider uppercase">
              Our Work Speaks
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight !leading-tight mb-6"
          >
            Portfolio of {' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 text-transparent bg-clip-text">
              Excellence
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="mt-6 text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our diverse range of projects that showcase our unwavering commitment to quality, innovation, and sustainable development across Bihar.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
            className="mt-10"
          >
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/services")}
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <motion.div 
              className="w-1 h-2 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section 
        className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "15+", label: "Years Experience" },
              { number: "500+", label: "Happy Clients" },
              { number: "25+", label: "Awards Won" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <motion.h3 
                  className="text-4xl sm:text-5xl font-extrabold text-white mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-cyan-100 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <main>
        {projectsData.map((category, index) => (
          <ProjectCategory key={index} data={category} index={index} />
        ))}
      </main>

      {/* Call to Action */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Build the <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">Future?</span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's collaborate on your next infrastructure project and create something extraordinary together.
          </motion.p>
          <motion.button 
            className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-3 mx-auto group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
onClick={() => navigate("/contact")}
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectsPage;
