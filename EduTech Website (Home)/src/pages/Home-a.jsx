import React, { useRef, useEffect } from "react"; // ⬅️ Make sure useEffect is imported
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import HomeHero from "../components/home/HomeHero-a";
import AboutSection from "../components/home/HomeAbout-a";
import MentorsSection from "../components/home/MentorsSection-a";
import CoursesSection from "../components/home/CoursesSection-a";
import JoinUs from "../components/home/JoinUs-a";
import Roadmap from "../components/home/Roadmap-a";
import CtaSection from "../components/home/CTAsection";

const Home = () => {
  // ✅ ADD THIS EFFECT TO CONTROL THE BODY SCROLLBAR
  useEffect(() => {
    // When this component mounts, force the body to hide horizontal overflow
    document.body.style.overflowX = "hidden";

    // When the component unmounts, set the overflow back to its default
    return () => {
      document.body.style.overflowX = "auto";
    };
  }, []); // The empty array [] ensures this runs only on mount and unmount

  // Refs for scroll-based animations
  const aboutRef = useRef(null);
  const coursesRef = useRef(null);
  const roadmapRef = useRef(null);

  /* ... your animation logic remains unchanged ... */
  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });
  const aboutY = useTransform(aboutScroll, [0, 0.3], ["60vh", "0vh"]);
  const aboutOpacity = useTransform(aboutScroll, [0, 0.25], [0, 1]);
  const aboutYSpring = useSpring(aboutY, { stiffness: 200, damping: 25 });

  const { scrollYProgress: coursesScroll } = useScroll({
    target: coursesRef,
    offset: ["start end", "end center"],
  });
  const coursesX = useTransform(coursesScroll, [0, 0.25], ["40vw", "0vw"]);
  const coursesOpacity = useTransform(coursesScroll, [0, 0.5], [0, 1]);
  const coursesXSpring = useSpring(coursesX, { stiffness: 60, damping: 20 });

  const { scrollYProgress: roadmapScroll } = useScroll({
    target: roadmapRef,
    offset: ["start end", "end start"],
  });
  const roadmapY = useTransform(roadmapScroll, [0, 0.3], ["80vh", "0vh"]);
  const roadmapOpacity = useTransform(roadmapScroll, [0, 0.3], [0, 1]);
  const roadmapYSpring = useSpring(roadmapY, { stiffness: 150, damping: 25 });

  return (
    // We can go back to using overflow-x-hidden on the main tag as a good fallback
    <main className="relative overflow-x-hidden">
        {/* Hero Section */}
        <div className="relative z-10">
          <HomeHero />
        </div>

        {/* About Section */}
        <motion.div
          ref={aboutRef}
          style={{ y: aboutYSpring, opacity: aboutOpacity }}
          className="relative z-20 mt-0"
        >
          <div className="bg-black rounded-3xl shadow-2xl p-10 lg:p-2 max-w-[92rem] mx-auto -translate-y-[10vh]">
            <AboutSection />
          </div>
        </motion.div>

        {/* Mentors Section */}
        <div className="relative z-20">
          <MentorsSection />
        </div>

        {/* Courses Section */}
        <motion.div
          ref={coursesRef}
          style={{ x: coursesXSpring, opacity: coursesOpacity }}
          className="relative z-20 mt-0"
        >
          <div className="bg-black rounded-3xl shadow-2xl p-10 lg:p-2 max-w-[92rem] mx-auto -translate-y-[10vh]">
            <CoursesSection />
          </div>
        </motion.div>

        {/* Join Us Section */}
        <div className="relative z-20">
          <JoinUs />
        </div>

        {/* Roadmap Section */}
        <motion.div
          ref={roadmapRef}
          style={{ y: roadmapYSpring, opacity: roadmapOpacity }}
          className="relative z-20 mt-[4rem]"
        >
          <div className="bg-black rounded-3xl shadow-2xl p-10 lg:p-2 max-w-[92rem] mx-auto">
            <Roadmap />
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="relative z-20">
          <CtaSection />
        </div>
    </main>
  );
};

export default Home;