import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const pathRefs = useRef([]);
  const textContainerRef = useRef(null);
  const heroRef = useRef(null);

  // Line drawing animation
  useEffect(() => {
    pathRefs.current.forEach((path, index) => {
      if (path) {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
        setTimeout(() => {
          path.style.transition =
            'stroke-dashoffset 4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          path.style.strokeDashoffset = '0';
        }, 500 + index * 100);
      }
    });
  }, []);

  // Parallax mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / 50;
      const y = (clientY - innerHeight / 2) / 50;
      setOffset({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Text animation: sliding in from left
  useEffect(() => {
    const textContainer = textContainerRef.current;
    if (textContainer) {
      const children = textContainer.querySelectorAll('.animate-slide-in');
      children.forEach((child, i) => {
        setTimeout(() => {
          child.classList.remove('opacity-0', '-translate-x-10');
        }, 1500 + i * 200);
      });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden flex justify-center items-center bg-[#111111] font-manrope"
    >
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-700 ease-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542361325-633a43658533?q=80&w=2670&auto=format&fit=crop')`,
          transform: `translate(${offset.x}px, ${offset.y}px) scale(1.05)`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90 via-black/60 to-black/20"></div>
      </div>

      {/* SVG Blueprint */}
      <svg
        className="absolute top-1/2 left-1/2 w-[120%] h-[120%] transition-transform duration-700 ease-out opacity-20"
        style={{
          transform: `translate(calc(-50% + ${-offset.x * 0.5}px), calc(-50% + ${-offset.y * 0.5}px))`,
        }}
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <path ref={(el) => (pathRefs.current[0] = el)} d="M-100 400 L400 0 L900 400 L400 800 Z" stroke="#E2E8F0" strokeWidth="0.5" />
        <path ref={(el) => (pathRefs.current[1] = el)} d="M400 0 L1300 400" stroke="#E2E8F0" strokeWidth="0.5" />
        <path ref={(el) => (pathRefs.current[2] = el)} d="M400 800 L1300 400" stroke="#E2E8F0" strokeWidth="0.5" />
        <path ref={(el) => (pathRefs.current[3] = el)} d="M900 400 L1300 400" stroke="#E2E8F0" strokeWidth="0.5" />
        <path ref={(el) => (pathRefs.current[4] = el)} d="M150 200 L650 600" stroke="#E2E8F0" strokeWidth="0.5" />
        <path ref={(el) => (pathRefs.current[5] = el)} d="M150 600 L650 200" stroke="#E2E8F0" strokeWidth="0.5" />
        <circle ref={(el) => (pathRefs.current[6] = el)} cx="400" cy="400" r="150" stroke="#E2E8F0" strokeWidth="0.5" />
        <circle ref={(el) => (pathRefs.current[7] = el)} cx="400" cy="400" r="300" stroke="#E2E8F0" strokeWidth="0.5" />
        <path ref={(el) => (pathRefs.current[8] = el)} d="M-100 100 H1300" stroke="#94A3B8" strokeWidth="0.25" />
        <path ref={(el) => (pathRefs.current[9] = el)} d="M-100 700 H1300" stroke="#94A3B8" strokeWidth="0.25" />
        <path ref={(el) => (pathRefs.current[10] = el)} d="M100 -100 V900" stroke="#94A3B8" strokeWidth="0.25" />
        <path ref={(el) => (pathRefs.current[11] = el)} d="M1100 -100 V900" stroke="#94A3B8" strokeWidth="0.25" />
      </svg>

      {/* Centered Text */}
      <div
        ref={textContainerRef}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center"
      >
        <h2 className="text-sm sm:text-base md:text-lg text-cyan-400 font-normal tracking-widest mb-3 sm:mb-4 animate-slide-in opacity-0 transform -translate-x-10 transition-all duration-1000 ease-out">
          STRUCTURAL EXCELLENCE. INNOVATIVE DESIGN.
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight mb-4 sm:mb-6 animate-slide-in opacity-0 transform -translate-x-10 transition-all duration-1000 ease-out">
          <span className="block">We Don't Just Build Structures.</span>
          <span className="block text-cyan-400">We Engineer Legacies.</span>
        </h1>

        <p className="max-w-3xl text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed mb-6 sm:mb-8 animate-slide-in opacity-0 transform -translate-x-10 transition-all duration-1000 ease-out">
          Pioneering the future of infrastructure with innovative technology and unparalleled precision. We don't just build structures; we craft enduring landmarks for generations to come.
        </p>

        <div className="animate-slide-in opacity-0 transform -translate-x-10 transition-all duration-1000 ease-out flex gap-4 sm:gap-6">
          <a href="/contact">
            <button className="border border-cyan-400 text-cyan-400 font-normal py-2 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-sm sm:text-base">
              Let's Have a Conversation
            </button>
          </a>
          <a href="/services">
            <button className="border border-cyan-400 text-cyan-400 font-normal py-2 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-sm sm:text-base">
              Discover Our Services
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
