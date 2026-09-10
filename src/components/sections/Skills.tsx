import React from 'react';

const Skills = () => {
  return (
    <section className="w-full py-space-3xl px-gutter" id="skills">
      <div className="max-w-[1160px] mx-auto">
        <div className="mb-space-2xl">
          <span className="font-label-mono-sm text-label-mono-sm text-primary uppercase tracking-widest block mb-space-2xs">Technical Mastery</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight mb-space-2xs">Skills</h2>
          <p className="font-body-md text-body-md text-secondary">Categorized engineering competencies honed across production platforms.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {/* CORE */}
          <div className="p-space-lg bg-surface-container-lowest border border-surface-container-highest rounded-xl">
            <div className="font-label-code text-label-code text-tertiary uppercase tracking-wider mb-space-md border-b border-surface-container-highest pb-space-xs">
              CORE
            </div>
            <div className="flex flex-wrap gap-space-2xs">
              <span className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-on-tertiary-container text-primary">Android SDK</span>
              <span className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-on-tertiary-container text-primary">Kotlin</span>
              <span className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-on-tertiary-container text-primary">Java</span>
              <span className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-on-tertiary-container text-primary">Jetpack Compose</span>
            </div>
          </div>
          {/* STRONG */}
          <div className="p-space-lg bg-surface-container-lowest border border-surface-container-highest rounded-xl">
            <div className="font-label-code text-label-code text-tertiary uppercase tracking-wider mb-space-md border-b border-surface-container-highest pb-space-xs">
              STRONG
            </div>
            <div className="flex flex-wrap gap-space-2xs">
              <span className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-surface-container text-on-surface">iOS</span>
              <span className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-surface-container text-on-surface">Swift</span>
              <span className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-surface-container text-on-surface">SwiftUI</span>
            </div>
          </div>
          {/* WORKING */}
          <div className="p-space-lg bg-surface-container-lowest border border-surface-container-highest rounded-xl">
            <div className="font-label-code text-label-code text-tertiary uppercase tracking-wider mb-space-md border-b border-surface-container-highest pb-space-xs">
              WORKING
            </div>
            <div className="flex flex-wrap gap-space-2xs">
              <span className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-surface-container text-on-surface">React Native</span>
              <span className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-surface-container text-on-surface">Python</span>
              <span className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-surface-container text-on-surface">AI/LLM</span>
            </div>
          </div>
          {/* EXPLORING */}
          <div className="p-space-lg bg-surface-container-lowest border border-primary/30 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-surface-container-highest pb-space-xs mb-space-md">
                <span className="font-label-code text-label-code text-primary uppercase tracking-wider">EXPLORING</span>
                <span className="font-label-mono-sm text-[9px] px-1.5 py-0.5 rounded bg-on-tertiary-container text-primary uppercase font-bold">Currently exploring / learning</span>
              </div>
              <div className="flex flex-wrap gap-space-2xs mb-space-sm">
                <span className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-surface-container text-on-surface">KMP</span>
                <span className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-surface-container text-on-surface">CMP</span>
                <span className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-surface-container text-on-surface">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
