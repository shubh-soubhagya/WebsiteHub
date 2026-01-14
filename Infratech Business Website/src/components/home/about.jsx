
import React, { useState, useEffect } from "react";

const storyPoints = [
  {
    title: "Humble Beginnings",
    subtitle:
      "Our journey started with a vision to build better, stronger, and more sustainably from the ground up.",
    color: "bg-cyan-400",
  },
  {
    title: "Unwavering Quality",
    subtitle:
      "Every beam, every blueprint, every structure is a testament to our commitment to excellence.",
    color: "bg-purple-400",
  },
  {
    title: "Trust Earned",
    subtitle:
      "Through transparency and dedication, we’ve built not just structures, but lasting relationships.",
    color: "bg-fuchsia-400",
  },
  {
    title: "'Infratech' Pioneer",
    subtitle:
      "Integrating cutting-edge technology and engineering to redefine modern infrastructure.",
    color: "bg-green-400",
  },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % storyPoints.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-gray-50 py-20 px-6">
      {/* Full-width Heading & Description */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-700 mb-6">
          Our Story & Vision
        </h2>
        <p className="text-gray-900 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
          Born from Bihar’s transformative spirit, Mannati Infratech was founded in Patna to pioneer new benchmarks in quality and innovation. We built our reputation on integrity, evolving into a true ‘Infratech’ leader by integrating advanced technology and sustainable engineering with every project.
        </p>
        <p className="text-gray-900 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-4">
          Today, we proudly build the landmark residential, commercial, and public infrastructure that shapes a modern, prosperous future for our home and contributes to the story of a new India.
        </p>
      </div>

      {/* Horizontal Roadmap (Desktop) & Grid (Mobile) */}
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Connecting Line for Desktop Only */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-300 rounded-full opacity-40 z-0"></div>

        <div className="flex flex-wrap md:flex-nowrap justify-between relative z-10 gap-6">
          {storyPoints.map((point, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center transition-all duration-700 ease-in-out w-full md:w-auto ${
                activeIndex === index
                  ? "scale-105"
                  : "scale-95 opacity-70"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full ${point.color} mb-4 border-2 border-white shadow-lg`}
              ></div>
              <div className="bg-white shadow-lg rounded-xl p-6 w-full sm:w-64">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-800 text-sm md:text-base">{point.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

