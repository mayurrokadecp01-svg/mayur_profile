import React from 'react';
import Hero from '../components/sections/Hero';
import ImpactStrip from '../components/sections/ImpactStrip';
import SelectedWork from '../components/sections/SelectedWork';
import MoreProducts from '../components/sections/MoreProducts';
import Experience from '../components/sections/Experience';
import Skills from '../components/sections/Skills';
import About from '../components/sections/About';
import AiEnabled from '../components/sections/AiEnabled';
import ResumeProfiles from '../components/sections/ResumeProfiles';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ImpactStrip />
      <SelectedWork />
      <MoreProducts />
      <AiEnabled />
      <Experience />
      <Skills />
      <About />
      <ResumeProfiles />
      <Contact />
    </div>
  );
};

export default Home;
