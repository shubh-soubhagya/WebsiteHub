import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, PlayCircle, HelpCircle, Library, ClipboardCheck, FileSignature, BarChart3, Mic, Sparkles } from 'lucide-react';

const features = [
  { 
    id: 'mentorship', 
    icon: Users, 
    title: "Expert Mentorship", 
    description: "This isn't just guidance; it's a strategic partnership. You'll receive direct, one-on-one mentorship from distinguished serving IAS/IPS officers and seasoned educators who have mastered the exam. They provide personalized study plans, strategic insights into complex topics, and invaluable advice on navigating the pressures of the preparation journey. Learn from their experience to avoid common pitfalls and build the exact mindset required to succeed." 
  },
  { 
    id: 'classes', 
    icon: PlayCircle, 
    title: "Interactive Classes", 
    description: "Engage in highly interactive live classes where you can ask questions, participate in polls, and collaborate with peers in real-time. Our expert faculty focuses on building a strong conceptual foundation from the ground up. For ultimate flexibility, every session is recorded and made available in our library, allowing you to revise complex topics at your own pace, anytime and anywhere, ensuring you never miss a beat." 
  },
  { 
    id: 'doubts', 
    icon: HelpCircle, 
    title: "24/7 Doubt Solving", 
    description: "Never let a lingering doubt slow your progress. Our dedicated 24/7 doubt-solving platform ensures that your academic queries are addressed promptly by subject-matter experts. Whether it's a complex concept from a morning lecture or a question that arises during late-night study, our round-the-clock support system is always available to provide clear, detailed, and accurate solutions, keeping your learning seamless and uninterrupted." 
  },
  { 
    id: 'library', 
    icon: Library, 
    title: "Digital Library", 
    description: "Gain exclusive access to our extensive digital library, a meticulously organized repository of every resource you'll ever need. This comprehensive hub includes curated study notes, standard reference e-books, current affairs magazines, previous year question papers, and even handwritten notes from past toppers. It's your personal, ever-growing knowledge base, available 24/7 to support your studies." 
  },
  { 
    id: 'practice', 
    icon: ClipboardCheck, 
    title: "PYQ-Based Practice", 
    description: "Mastering the exam pattern is crucial, and our practice series is designed for exactly that. We offer a comprehensive suite of tests meticulously crafted based on Previous Year Questions (PYQs). Following each test, you get access to detailed model answers and in-depth video discussions from our experts. This process helps you understand the examiner's mindset, perfect your time management, and learn how to structure high-scoring answers." 
  },
  { 
    id: 'writing', 
    icon: FileSignature, 
    title: "Mains Answer Writing", 
    description: "Success in the Mains exam hinges on the quality of your answers. Our specialized Answer Writing program helps you hone this critical skill through regular practice and expert evaluation. Submit your answers and receive personalized, constructive feedback that focuses on improving structure, incorporating relevant keywords, enhancing content depth, and refining your overall presentation. This iterative process turns writing into one of your biggest strengths." 
  },
  { 
    id: 'feedback', 
    icon: BarChart3, 
    title: "Personalized Feedback", 
    description: "We believe in a data-driven approach to improvement. You'll receive detailed monthly performance reports that provide a granular analysis of your test scores and progress. Through regular Parent-Teacher Meetings (PTMs) and one-on-one feedback sessions, we help you pinpoint your specific areas of strength and weakness. This continuous feedback loop ensures that your study plan is always optimized for consistent and measurable growth." 
  },
  { 
    id: 'motivation', 
    icon: Mic, 
    title: "Motivational Sessions", 
    description: "The journey to becoming a civil servant is a marathon, not a sprint. To keep your motivation high, we host exclusive sessions and podcasts with serving civil servants who share their real-world experiences, challenges, and success stories. Hearing their journey firsthand provides invaluable perspective, renews your determination, and keeps you connected to the larger purpose of your hard work, ensuring you stay inspired until you cross the finish line." 
  }
];

const getCircularPosition = (angle, radius) => {
  const radian = (angle - 90) * (Math.PI / 180);
  return { x: radius * Math.cos(radian), y: radius * Math.sin(radian) };
};

const JoinUsSection = () => {
  const [rotation, setRotation] = useState(0);
  const [activeFeature, setActiveFeature] = useState(features[0]);
  const radius = 160;
  const angleStep = 360 / features.length;

  useEffect(() => {
    const interval = setInterval(() => setRotation(prev => (prev + 0.5) % 360), 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    features.forEach((feature, index) => {
      const currentAngle = (rotation + (index * angleStep)) % 360;
      if (currentAngle >= 60 && currentAngle <= 120) {
        setActiveFeature(feature);
      }
    });
  }, [rotation, angleStep]);

  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-white to-slate-100 flex flex-col items-center justify-center pt-20 pb-20 overflow-hidden">
      <div className="w-full flex flex-col items-center text-center gap-2">
        
        {/* Top Section: Content (Constrained for readability) */}
        <div className="space-y-6 mb-16 px-6">
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-gray-900 leading-tight">
            Why Join <span className="text-black-600">The Brilliant Bihar?</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed font-sans max-w-2xl mx-auto">
            We provide a holistic ecosystem for your success, combining expert guidance with cutting-edge resources to ensure you're not just prepared, but ahead of the competition.
          </p>
          <div className="mt-8 h-1 w-24 bg-blue-600 rounded-full mx-auto"></div>
        </div>

        {/* Bottom Section: Full-width Animation Container */}
        <div className="relative h-[350px] w-full flex items-center justify-center">
          
          {/* Central Anchor for the revolving icons (in the left half) */}
          <div className="absolute top-1/2 left-[305px] -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] bg-blue-600 rounded-full flex items-center justify-center shadow-2xl z-20">
            <Sparkles className="w-12 h-12 text-white" />
          </div>

          {/* Revolving Icons */}
          {features.map((feature, index) => {
            const currentAngle = (rotation + (index * angleStep)) % 360;
            const pos = getCircularPosition(currentAngle, radius);
            const isActive = activeFeature && activeFeature.id === feature.id;
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                className="absolute z-10"
                style={{
                  top: `calc(40% + ${pos.y}px)`,
                  left: `calc(18% + ${pos.x}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{ scale: isActive ? 1.25 : 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-blue-600 border-2 border-gray-200'
                }`}>
                  <Icon className="w-8 h-8" />
                </div>
              </motion.div>
            );
          })}

          {/* Expanded Card (in the right half) */}
          <AnimatePresence>
            {activeFeature && (
              <motion.div
                key={activeFeature.id}
                className="absolute left-[600px] top-[70px] right-[120px] -translate-y-1/2 w-85 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 z-50"
                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex-shrink-0 flex items-center justify-center">
                    <activeFeature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold font-serif text-gray-900 text-left">{activeFeature.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed font-sans text-left">{activeFeature.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

export default JoinUsSection;