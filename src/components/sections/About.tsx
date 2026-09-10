import React from 'react';

const About = () => {
  return (
    <section className="w-full py-space-2xl px-gutter bg-surface-container-low border-t border-b border-surface-container-highest" id="about">
      <div className="max-w-[1160px] mx-auto">
        <div className="max-w-3xl">
          <span className="font-label-mono-sm text-label-mono-sm text-primary uppercase tracking-widest block mb-space-2xs">Profile</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight mb-space-sm">About</h2>
          <p className="font-body-lg text-body-lg text-secondary leading-relaxed mb-space-md">
            Mobile Technical Lead with 10 years of experience building and leading production mobile applications across Android and iOS. Strong in mobile architecture, Kotlin, Swift, Jetpack Compose and SwiftUI, with supporting experience across Java, Spring Boot, REST APIs and AI-enabled application development. Currently expanding into React Native, KMP/CMP and cloud technologies.
          </p>
          <div className="inline-flex items-center gap-space-xs font-label-code text-label-code text-on-surface bg-surface-container-lowest px-space-md py-space-xs rounded-lg border border-surface-container-highest flex-wrap">
            <span>Pune, India</span>
            <span className="text-outline-variant">•</span>
            <span>10 Years Experience</span>
            <span className="text-outline-variant">•</span>
            <span className="text-primary font-medium">Mobile Technical Lead</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
