import React from 'react';
import Hero from '../components/home/hero';
import About from '../components/home/about';
import ChooseUsStylishSolid from '../components/home/chooseus';
import ExploreProj from '../components/home/ExploreProj';
import Testimonials from '../components/home/Testimonials';
import Contacts from '../components/home/contacts';

const Home = () => {
  return (
    <main className="bg-[#0a0a0a]">
      <Hero />
      <About />
      <ChooseUsStylishSolid />
      <ExploreProj />
      <Testimonials />
      <Contacts />
      
    </main>
  );
};

export default Home;
