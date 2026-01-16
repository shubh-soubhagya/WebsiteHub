import React, { useState, useEffect } from 'react';
import { Users, BookOpen, TrendingUp, ArrowRight, Target, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

// --- Card Data ---
// Centralizing the data for the interactive card stack.
const cardData = [
    {
        icon: Target,
        title: "Strategic Blueprint",
        description: "Develop a personalized roadmap to navigate the complexities of the civil services exam.",
    },
    {
        icon: Users,
        title: "Elite Mentorship",
        description: "Gain insights and guidance from a network of seasoned officers and educators.",
    },
    {
        icon: BookOpen,
        title: "Comprehensive Material",
        description: "Access curated, up-to-date study resources covering the entire syllabus.",
    },
    {
        icon: Shield,
        title: "Performance Analytics",
        description: "Utilize data-driven feedback to track your progress and identify key areas for improvement.",
    }
];

// --- Single Card Component ---
// A dedicated component for the card's visual structure.
const FeatureCard = ({ icon: Icon, title, description }) => {
    return (
        <div className="absolute h-[22em] w-[24em] border-2 border-sky-500/20 rounded-[1.5em] bg-gradient-to-br from-slate-900/50 to-slate-900/20 text-white p-6 flex flex-col justify-between backdrop-blur-lg shadow-2xl shadow-black/40">
            <div>
                <div className="p-4 w-fit mb-6 bg-gradient-to-br from-sky-500 to-cyan-400 rounded-lg text-white shadow-lg">
                    <Icon className="w-8 h-8" />
                </div>
                <h1 className="text-[2em] font-bold leading-tight text-slate-100">{title}</h1>
                <p className="text-base mt-2 text-slate-400">
                    {description}
                </p>
            </div>
            <div className="text-sm text-sky-300 font-semibold">Learn More →</div>
        </div>
    );
};

// --- Main Hero Component ---
const Hero = () => {
    // State to track the index of the card currently at the front.
    const [activeIndex, setActiveIndex] = useState(0);
    const totalCards = cardData.length;

    // --- Event Handlers for Carousel Navigation ---
    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % totalCards);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
    };
    
    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 4000); // Change card every 4 seconds
        return () => clearInterval(interval); // Cleanup on component unmount
    }, [activeIndex]);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A192F] font-sans">
            {/* Subtle background patterns */}
            <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239CA3AF\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_rgba(56,_189,_248,_0.15),_transparent_40%)]"></div>
             <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,_rgba(167,_139,_250,_0.15),_transparent_40%)]"></div>

            <div className="relative z-10 max-w-7xl w-full mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
                
                {/* Left Side: Headline and CTA */}
                <div className="space-y-8 animate-fade-in-up">
                    <div className="inline-block border border-sky-400/30 bg-sky-900/20 rounded-full px-4 py-2 text-sm font-medium text-sky-300 backdrop-blur-sm">
                        Premier Civil Services Academy of Bihar
                    </div>

                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-100">
                        Forge Your Path to the Civil Services
                    </h1>

                    <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                        Leverage our legacy of excellence. We provide unparalleled mentorship and a strategic framework to transform dedicated aspirants into distinguished officers.
                    </p>

                    <div className="flex flex-wrap gap-4 items-center">
                        <button className="group relative inline-flex items-center justify-center px-8 py-3 h-12 overflow-hidden rounded-md bg-sky-500 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-sky-600 hover:shadow-sky-500/40">
                            <span className="relative">Book a Consultation</span>
                            <ArrowRight className="ml-2 h-5 w-5 opacity-0 transform -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                        </button>
                    </div>
                </div>

                {/* Right Side: Interactive Card Stack */}
                <div className="flex flex-col items-center justify-center">
                    <div className="relative w-[24em] h-[22em] mb-8">
                        {cardData.map((card, index) => {
                            const position = (index - activeIndex + totalCards) % totalCards;
                            
                            let transform, zIndex, opacity;

                            if (position === 0) { // Front card
                                transform = 'translateX(0) scale(1)';
                                zIndex = 3;
                                opacity = 1;
                            } else if (position === 1) { // Card behind
                                transform = 'translateX(40px) scale(0.9)';
                                zIndex = 2;
                                opacity = 1;
                            } else if (position === totalCards - 1) { // Card sliding out
                                transform = 'translateX(-120%) scale(0.8)';
                                zIndex = 1;
                                opacity = 0;
                            } else { // Hidden cards at the back
                                transform = `translateX(80px) scale(0.8)`;
                                zIndex = 0;
                                opacity = 0;
                            }

                            const transition = `transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease-out`;

                            return (
                                <div
                                    key={index}
                                    className="absolute inset-0"
                                    style={{ transform, zIndex, opacity, transition }}
                                >
                                    <FeatureCard {...card} />
                                </div>
                            );
                        })}
                    </div>
                     {/* Navigation Controls */}
                    <div className="flex items-center gap-6">
                        <button 
                            onClick={handlePrev} 
                            className="p-3 rounded-full bg-slate-800/50 text-slate-400 border border-slate-700 hover:bg-slate-700/70 hover:text-white transition-all duration-300"
                            aria-label="Previous Card"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <p className="text-slate-400 font-semibold text-base tabular-nums">
                            {activeIndex + 1} <span className="text-slate-500">/</span> {totalCards}
                        </p>
                        <button 
                            onClick={handleNext}
                            className="p-3 rounded-full bg-slate-800/50 text-slate-400 border border-slate-700 hover:bg-slate-700/70 hover:text-white transition-all duration-300"
                            aria-label="Next Card"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
             {/* Simple fade-in animation */}
            <style jsx global>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default Hero;

