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
import { ScrollReveal, FadeIn } from '../components/ui/ScrollReveal';

const Home = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <FadeIn>
        <Hero />
      </FadeIn>
      <ScrollReveal delay={0.2}>
        <ImpactStrip />
      </ScrollReveal>
      <ScrollReveal>
        <SelectedWork />
      </ScrollReveal>
      <ScrollReveal>
        <MoreProducts />
      </ScrollReveal>
      <ScrollReveal>
        <AiEnabled />
      </ScrollReveal>
      <ScrollReveal>
        <Experience />
      </ScrollReveal>
      <ScrollReveal>
        <Skills />
      </ScrollReveal>
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <ResumeProfiles />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </div>
  );
};

export default Home;
