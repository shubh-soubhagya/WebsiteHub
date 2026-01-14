import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    { name: "Rajesh Kumar", title: "Founder & CEO", img: "https://placehold.co/400x400/1e293b/FFFFFF?text=RK", social: { linkedin: "#", twitter: "#" } },
    { name: "Sunita Sharma", title: "Chief Project Engineer", img: "https://placehold.co/400x400/1e293b/FFFFFF?text=SS", social: { linkedin: "#", twitter: "#" } },
    { name: "Amit Patel", title: "Head of Operations", img: "https://placehold.co/400x400/1e293b/FFFFFF?text=AP", social: { linkedin: "#", twitter: "#" } },
    { name: "Priya Singh", title: "Lead Architect", img: "https://placehold.co/400x400/1e293b/FFFFFF?text=PS", social: { linkedin: "#", twitter: "#" } },
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">The Architects of Our Success</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-16">
          Meet the visionary leaders steering Mannati InfraTech towards a brighter future.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img src={member.img} alt={member.name} className="w-full h-auto aspect-square object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-cyan-400 text-sm">{member.title}</p>
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={member.social.linkedin} className="p-2 bg-white/10 rounded-full hover:bg-cyan-500"><Linkedin size={16} /></a>
                  <a href={member.social.twitter} className="p-2 bg-white/10 rounded-full hover:bg-cyan-500"><Twitter size={16} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
