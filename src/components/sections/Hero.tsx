import React from 'react';
import { Button } from '../ui/Button';

const Hero = () => {
  return (
    <section className="w-full py-space-3xl lg:py-space-4xl px-gutter">
      <div className="max-w-[1160px] mx-auto flex flex-col items-start">
        <div className="inline-flex items-center gap-space-xs px-space-sm py-space-2xs rounded bg-surface-container-low border border-surface-container-highest mb-space-lg">
          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
          <span className="font-label-mono-sm text-label-mono-sm text-on-surface uppercase tracking-wider">Mobile Technical Lead</span>
        </div>
        <h1 className="font-display text-display max-w-4xl tracking-tight text-on-surface uppercase leading-[1.1] mb-space-lg">
          Building mobile products that scale beyond the screen.
        </h1>
        <p className="font-body-lg text-body-lg text-secondary max-w-2xl mb-space-md leading-relaxed">
          10+ years building and leading Android and iOS products across enterprise, e-commerce, healthcare, utility and smart-city domains.
        </p>
        <div className="flex items-center gap-space-sm font-label-code text-label-code text-primary mb-space-xl tracking-tight">
          <span>Android</span>
          <span className="text-outline-variant">•</span>
          <span>iOS</span>
          <span className="text-outline-variant">•</span>
          <span>React Native</span>
          <span className="text-outline-variant">•</span>
          <span>AI</span>
        </div>
        <div className="flex flex-wrap items-center gap-space-md">
          <a href="#work" className="inline-flex items-center justify-center rounded-lg font-headline-sm text-headline-sm transition-colors duration-150 px-space-lg py-space-sm bg-primary-container text-on-primary hover:bg-primary">
            View Selected Work
          </a>
          <a href="#resume" className="inline-flex items-center justify-center rounded-lg font-headline-sm text-headline-sm transition-colors duration-150 px-space-lg py-space-sm bg-surface-container-lowest text-on-surface border border-surface-container-highest hover:border-on-surface">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
