import React from 'react';

const About = () => {
  return (
    <section className="w-full py-space-2xl px-gutter bg-surface-container-low border-t border-b border-surface-container-highest" id="about">
      <div className="max-w-[1160px] mx-auto">
        <div className="max-w-3xl">
          <span className="font-label-mono-sm text-label-mono-sm text-primary uppercase tracking-widest block mb-space-2xs">Profile</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight mb-space-sm">About</h2>
          <p className="font-body-lg text-body-lg text-secondary leading-relaxed mb-space-md">
            I build and lead mobile products from architecture to production. Over 10+ years, I have worked across Android, iOS and cross-platform applications, collaborating with product and engineering teams to ship reliable software across multiple domains.
          </p>
          <div className="inline-flex items-center gap-space-xs font-label-code text-label-code text-on-surface bg-surface-container-lowest px-space-md py-space-xs rounded-lg border border-surface-container-highest">
            <span>Pune, India</span>
            <span className="text-outline-variant">•</span>
            <span>10+ Years</span>
            <span className="text-outline-variant">•</span>
            <span className="text-primary font-medium">Mobile Technical Lead</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
