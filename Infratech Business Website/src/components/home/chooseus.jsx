import React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Handshake,
  Users,
  UserCheck,
  BadgeDollarSign,
  CalendarClock,
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "25+ Years Experience",
    desc: "Our long history in Bihar is marked by many successful projects and the lasting trust we've earned.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    desc: "Our commitment continues long after project completion, with dedicated support and guidance you can always count on.",
  },
  {
    icon: Users,
    title: "Professional Expertise",
    desc: "Our team consists of experienced engineers, architects, and project managers dedicated to achieving outstanding project results.",
  },
  {
    icon: UserCheck,
    title: "Client-First Approach",
    desc: "We build strong relationships by making your goals our own, collaborating closely at every single stage.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent Pricing",
    desc: "We deliver superior quality with honest, transparent pricing to ensure you receive the best long-term investment.",
  },
  {
    icon: CalendarClock,
    title: "On-Time Delivery",
    desc: "Our expert planning and project management ensure we always deliver your project on time, without compromise.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const ChooseUsStylishSolid = () => {
  return (
    <section className="py-20 bg-gray-100" id="choose-us">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-6xl font-bold mb-6 text-gray-800"
        >
          Why People <span className="text-cyan-600">Choose Us</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-900 mb-12 max-w-2xl mx-auto"
        >
          With over two decades of experience, we pride ourselves on our reliability,
          transparency, and dedication to excellence.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="relative rounded-2xl p-6 shadow-xl cursor-pointer border-2 border-transparent hover:border-black transition-all duration-300"
              style={{ backgroundColor: "#08253bff" }}
            >
              {/* Icon Circle */}
              <div
                className="w-14 h-14 flex items-center justify-center rounded-full mb-4 mx-auto"
                style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Card Text */}
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-white/90 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUsStylishSolid;
