import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Teachers from '../components/Teachers';
import Courses from '../components/Courses';
import WhyJoinUs from '../components/WhyJoinUs';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Teachers />
      <Courses />
      <WhyJoinUs />
      <Timeline />
      <Footer />
    </div>
  );
}