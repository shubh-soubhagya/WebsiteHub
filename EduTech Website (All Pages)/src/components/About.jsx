import React, { useState, useEffect } from 'react';
import { Shield, Target, Zap } from 'lucide-react';

// --- Animated Card Component ---
// This new component encapsulates the 3D card style and animation logic.
const AnimatedFeatureCard = ({ icon: Icon, title, desc, isVisible }) => {
  // Determine animation classes based on the visibility state
  const animationClasses = isVisible
    ? "[transform:rotate3d(1_,-1,_1,_0deg)]" // Flat, visible state
    : "[transform:rotate3d(1_,-1,_1,_30deg)]"; // Tilted, exiting state

  const blurClasses = isVisible ? "blur-none" : "blur";

  return (
    // Main container with a base color and decorative SVG
    <div className="relative h-80 w-72 bg-sky-900/50 rounded-xl overflow-hidden border border-sky-400/30 shadow-2xl shadow-black/50">
      <svg y={0} xmlns="http://www.w3.org/2000/svg" x={0} width={100} viewBox="0 0 10 10" preserveAspectRatio="xMidYMid meet" height={100} className="fill-sky-500/20 w-72 h-72 absolute -bottom-24 -left-28">
        <path d="M0,5A5,5,0,1,0,5,0,5,5,0,0,0,0,5ZM8.12,5A3.12,3.12,0,1,1,5,1.88,3.12,3.12,0,0,1,8.12,5Z" />
      </svg>
      
      {/* Blurred background layer that also animates */}
      <div className={`absolute w-64 h-72 bg-slate-900/50 z-10 top-4 left-4 opacity-50 rounded-2xl duration-500 ease-in-out ${blurClasses} ${animationClasses}`} />

      {/* Content layer with the 3D transform */}
      <div className={`absolute w-64 h-72 z-10 top-4 left-4 p-5 rounded-2xl flex flex-col justify-between items-start gap-4 duration-500 ease-in-out ${animationClasses}`}>
        <div>
          <div className="inline-block p-3 rounded-xl bg-slate-900/50 border border-slate-700 mb-4 shadow-lg">
            <Icon className="w-8 h-8 text-sky-400" />
          </div>
          <h3 className="text-slate-100 text-2xl font-extrabold">{title}</h3>
          <p className="text-slate-400 font-medium text-sm mt-2">
            {desc}
          </p>
        </div>
        <button className="bg-slate-800/80 text-sky-300 px-4 py-2 rounded-xl hover:bg-sky-600 hover:text-white duration-300 text-sm font-semibold">
          Learn more
        </button>
      </div>
    </div>
  );
};


// --- Main About Component ---
const About = () => {
  const features = [
    { icon: Shield, title: 'Proven Track Record', desc: 'A legacy of over 2,500 successful selections in UPSC & BPSC examinations.' },
    { icon: Target, title: 'Strategic Approach', desc: 'A scientifically designed curriculum that merges traditional wisdom with modern pedagogy.' },
    { icon: Zap, title: 'Innovative Pedagogy', desc: 'Cutting-edge technology and AI-powered analytics to create personalized learning paths.' }
  ];

  const stats = [
    { num: '15+', label: 'Years of Excellence' },
    { num: '2500+', label: 'Success Stories' },
    { num: '50+', label: 'Expert Faculty' },
    { num: '98%', label: 'Success Rate' }
  ];

  // State to manage the currently displayed card and its animation phase
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationState, setAnimationState] = useState('in'); // Can be 'in' or 'out'

  // This effect handles the cycling timer
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationState('out'); // Trigger the exit animation
    }, 4000); // Change card every 4 seconds
    return () => clearInterval(timer);
  }, [activeIndex]); // The timer resets whenever the active card changes

  // This effect manages the state change after the exit animation completes
  useEffect(() => {
    if (animationState === 'out') {
      const timeout = setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
        setAnimationState('in'); // Switch to the new card and trigger its entrance animation
      }, 500); // This duration must match the animation duration in the card component
      return () => clearTimeout(timeout);
    }
  }, [animationState, features.length]);

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-[#0A192F] to-[#0D254C] overflow-hidden font-sans">
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
        <div className="w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
        <div className="w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-sky-900/50 border border-sky-400/30 rounded-full text-sky-300 text-sm font-semibold">
              Our Ethos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-6">
            A Legacy of Excellence in Civil Services
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Pioneering a new era of civil service education through innovation, dedication, and an unwavering commitment to our aspirants' success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-100">
              Our Mission: To Empower Bihar's Future Leaders
            </h3>
            <p className="text-slate-400 leading-relaxed">
              The Brilliant Bihar was founded with a singular vision: to democratize access to world-class civil service education. We believe every aspiring civil servant in Bihar deserves the finest mentorship, resources, and strategic guidance.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Our holistic approach combines rigorous academic training with personality development and interview mastery, ensuring our students don't just clear exams—they excel in their administrative careers.
            </p>
          </div>

          <div className="space-y-8 bg-slate-900/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-lg">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-6">
                 <div className="text-5xl font-extrabold bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent w-32 text-left">
                  {stat.num}
                </div>
                <div className="border-l-2 border-slate-700 pl-6">
                  <div className="text-slate-400 text-lg">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-100">How We Achieve Excellence</h3>
        </div>
        
        {/* Container for the animated card */}
        <div className="flex justify-center items-center min-h-[350px]">
          <AnimatedFeatureCard
            key={activeIndex} // Using key to ensure the component re-mounts on change
            {...features[activeIndex]}
            isVisible={animationState === 'in'}
          />
        </div>
      </div>
    </section>
  );
};

export default About;

