import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Gem, Building } from "lucide-react";

const ValuesSection = () => {
  const values = [
    { icon: <ShieldCheck />, title: "Integrity", description: "Upholding the highest ethical standards in every action and decision." },
    { icon: <Zap />, title: "Innovation", description: "Pioneering new technologies and methods to redefine excellence." },
    { icon: <Gem />, title: "Quality", description: "An unwavering commitment to superior craftsmanship and lasting durability." },
    { icon: <Building />, title: "Community", description: "Building not just projects, but stronger communities for a better tomorrow." },
  ];

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 50, -100, 0],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 90, 180, 270],
          }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 bg-cyan-900/50 rounded-full filter blur-3xl opacity-50"
        />
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 0.8, 1.1, 1],
            rotate: [0, -90, -180, -270],
          }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity, delay: 5 }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/50 rounded-full filter blur-3xl opacity-50"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-16">
          The foundational pillars that guide our company, our projects, and our people.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 text-white text-center"
            >
              <div className="inline-block p-4 bg-white/10 rounded-xl mb-4">
                {React.cloneElement(value.icon, { size: 32, className: "text-cyan-300" })}
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-slate-400 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
