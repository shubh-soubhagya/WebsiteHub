import React, { useState, useEffect, useRef } from 'react';
import { Rocket, FileText, CreditCard, Award, Trophy, GraduationCap, Calendar, Users } from 'lucide-react';

const roadmapItems = [
  { id: 1, phase: 'Phase 1', title: 'Launching Date', date: 'October 06, 2025', icon: Rocket },
  { id: 2, phase: 'Phase 2', title: 'Registration', date: 'Oct 06 - Dec 20', icon: FileText },
  { id: 3, phase: 'Phase 3', title: 'Admit Card', date: 'Yet to be Announced', icon: CreditCard },
  { id: 4, phase: 'Phase 4', title: 'Exam', date: 'Yet to be Announced', icon: Award },
  { id: 5, phase: 'Phase 5', title: 'Result', date: 'Yet to be Announced', icon: Trophy },
  { id: 6, phase: 'Phase 6', title: 'Selection', date: 'Yet to be Announced', icon: GraduationCap },
  { id: 7, phase: 'Phase 7', title: 'Start Class', date: 'April 1, 2025', icon: Calendar },
  { id: 8, phase: 'Phase 8', title: 'Meetup', date: 'As per Schedules', icon: Users },
];

export default function Roadmap() {
  const [activeItems, setActiveItems] = useState([]);
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Trigger the animation when visible
          roadmapItems.forEach((item, index) => {
            setTimeout(() => {
              setActiveItems((prev) => [...prev, item.id]);
            }, index * 400);
          });
        }
      },
      { threshold: 0.2 } // adjust sensitivity — 0.2 means 20% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const progressPercentage =
    roadmapItems.length > 1
      ? ((activeItems.length - 1) / (roadmapItems.length - 1)) * 100
      : 0;

  return (
    <section
      ref={sectionRef}
      // UPDATED: Changed py-* to pt-* and added a larger pb-* for more bottom padding
      className="font-sans min-h-screen w-full bg-black text-white pt-22 md:pt-32 pb-56 md:pb-64 relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gradient-to-tr from-cyan-900/40 to-slate-900/20 rounded-full filter blur-3xl opacity-30 z-0"></div>

      {/* Stars Background */}
      <div className="absolute inset-0 z-0">
        {[...Array(60)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-cyan-400 font-semibold mb-2 uppercase tracking-wider">
            Our Journey
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
            Roadmap Timeline
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto mt-4 text-base md:text-lg">
            Follow our journey from launch to success, step by step.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block pt-16">
          <div className="relative">
            {/* main line */}
            <div className="absolute left-0 top-1/2 w-full h-0.5 bg-slate-700 -translate-y-1/2"></div>
            {/* progress line */}
            <div
              className="absolute left-0 top-1/2 h-0.5 bg-cyan-400 -translate-y-1/2 transition-all duration-700 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>

            {/* timeline items */}
            <div className="relative flex justify-between items-center">
              {roadmapItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeItems.includes(item.id);
                const isAbove = index % 2 === 0;

                return (
                  <div
                    key={item.id}
                    className="relative flex flex-col items-center w-[12.5%]"
                  >
                    {/* dot */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                        isActive
                          ? 'bg-cyan-400 border-cyan-400'
                          : 'bg-slate-800 border-slate-700'
                      }`}
                    >
                      {isActive && (
                        <div className="absolute inset-0 rounded-full bg-cyan-400 blur-md animate-pulse"></div>
                      )}
                    </div>

                    {/* Card */}
                    <div
                      className={`relative w-48 lg:w-56 transition-all duration-700 ease-out transform ${
                        isActive
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-75'
                      } ${
                        isAbove
                          ? '-translate-y-[calc(100%+2rem)]'
                          : 'translate-y-[calc(100%+2rem)]'
                      }`}
                    >
                      <div
                        className={`p-[1.5px] bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl shadow-2xl ${
                          isActive && 'shadow-cyan-500/30'
                        }`}
                      >
                        <div className="bg-black rounded-[15px] p-4 relative">
                          {/* Arrow */}
                          <div
                            className={`absolute w-4 h-4 bg-black rotate-45 left-1/2 -translate-x-1/2 ${
                              isAbove
                                ? 'border-b-2 border-r-2 border-slate-700 -bottom-2'
                                : 'border-t-2 border-l-2 border-slate-700 -top-2'
                            }`}
                          ></div>

                          <div className="flex items-start gap-3">
                            <div
                              className={`w-10 h-10 flex items-center justify-center rounded-lg shrink-0 transition-colors duration-500 ${
                                isActive
                                  ? 'bg-cyan-500/20 text-cyan-400'
                                  : 'bg-slate-800 text-slate-400'
                              }`}
                            >
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-cyan-400 uppercase tracking-wide">
                                {item.phase}
                              </p>
                              <h3 className="text-md font-bold text-white mt-1">
                                {item.title}
                              </h3>
                              <p className="text-xs text-slate-400 mt-1">
                                {item.date}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden">
          <div className="relative">
            <div className="absolute left-5 top-0 w-0.5 h-full bg-slate-700"></div>
            <div
              className="absolute left-5 top-0 w-0.5 bg-cyan-400 transition-all duration-500"
              style={{ height: `${progressPercentage}%` }}
            ></div>

            <div className="space-y-10">
              {roadmapItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeItems.includes(item.id);

                return (
                  <div
                    key={item.id}
                    className="relative flex items-start gap-4"
                  >
                    <div className="relative shrink-0 mt-1 z-10">
                      <div
                        className={`w-4 h-4 rounded-full border-2 border-slate-700 transition-all duration-500 ${
                          isActive
                            ? 'bg-cyan-400 border-cyan-400'
                            : 'bg-slate-800'
                        } ml-[13px]`}
                      >
                        {isActive && (
                          <div className="absolute inset-0 rounded-full bg-cyan-400 blur-md animate-pulse"></div>
                        )}
                      </div>
                    </div>

                    <div
                      className={`w-full transition-all duration-700 transform ${
                        isActive
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 -translate-x-8'
                      }`}
                    >
                      <div
                        className={`p-[1.5px] bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl shadow-lg ${
                          isActive && 'shadow-cyan-500/30'
                        }`}
                      >
                        <div className="bg-black rounded-[15px] p-4">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 flex items-center justify-center rounded-lg shrink-0 transition-colors duration-500 ${
                                isActive
                                  ? 'bg-cyan-500/20 text-cyan-400'
                                  : 'bg-slate-800 text-slate-400'
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <p className="text-xs font-bold text-cyan-400 uppercase tracking-wide">
                              {item.phase}
                            </p>
                          </div>
                          <h3 className="text-md font-bold text-white mt-2">
                            {item.title}
                          </h3>
                          <p className="text-xs text-slate-400 mt-1">
                            {item.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}