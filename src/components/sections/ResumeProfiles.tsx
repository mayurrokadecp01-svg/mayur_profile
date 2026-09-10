import React from 'react';

const ResumeProfiles = () => {
  return (
    <section className="w-full py-space-3xl px-gutter" id="resume">
      <div className="max-w-[1160px] mx-auto">
        <div className="mb-space-xl text-center md:text-left">
          <span className="font-label-mono-sm text-label-mono-sm text-primary uppercase tracking-widest block mb-space-2xs">Curriculum Vitae</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight mb-space-2xs">Resume Profiles</h2>
          <p className="font-body-md text-body-md text-secondary">Targeted resumes structured around specialized engineering disciplines.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {/* Resume 1 */}
          <div className="p-space-lg bg-surface-container-lowest border border-surface-container-highest rounded-xl flex flex-col justify-between hover:border-on-surface transition-colors duration-200">
            <div className="mb-space-lg">
              <span className="material-symbols-outlined text-primary text-3xl mb-space-xs block">android</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-2xs">ANDROID FOCUSED</h3>
              <p className="font-body-sm text-body-sm text-secondary">In-depth breakdown of native Android architecture, Compose pipelines, and performance audits.</p>
            </div>
            <a className="inline-flex items-center justify-between px-space-md py-space-xs rounded bg-surface-container text-on-surface font-label-mono-sm text-label-mono-sm hover:bg-on-surface hover:text-on-primary transition-colors" download href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <span>Download PDF</span>
              <span className="material-symbols-outlined text-[16px]">download</span>
            </a>
          </div>
          {/* Resume 2 */}
          <div className="p-space-lg bg-surface-container-lowest border border-surface-container-highest rounded-xl flex flex-col justify-between hover:border-on-surface transition-colors duration-200">
            <div className="mb-space-lg">
              <span className="material-symbols-outlined text-primary text-3xl mb-space-xs block">phone_iphone</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-2xs">iOS FOCUSED</h3>
              <p className="font-body-sm text-body-sm text-secondary">Swift & SwiftUI implementation track record, Combine architectures, and CoreData sync engines.</p>
            </div>
            <a className="inline-flex items-center justify-between px-space-md py-space-xs rounded bg-surface-container text-on-surface font-label-mono-sm text-label-mono-sm hover:bg-on-surface hover:text-on-primary transition-colors" download href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <span>Download PDF</span>
              <span className="material-symbols-outlined text-[16px]">download</span>
            </a>
          </div>
          {/* Resume 3 */}
          <div className="p-space-lg bg-surface-container-lowest border border-surface-container-highest rounded-xl flex flex-col justify-between hover:border-on-surface transition-colors duration-200">
            <div className="mb-space-lg">
              <span className="material-symbols-outlined text-primary text-3xl mb-space-xs block">leaderboard</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-2xs">MOBILE TECHNICAL LEAD</h3>
              <p className="font-body-sm text-body-sm text-secondary">Comprehensive multi-platform leadership, technical roadmapping, and staff management profile.</p>
            </div>
            <a className="inline-flex items-center justify-between px-space-md py-space-xs rounded bg-surface-container text-on-surface font-label-mono-sm text-label-mono-sm hover:bg-on-surface hover:text-on-primary transition-colors" download href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <span>Download PDF</span>
              <span className="material-symbols-outlined text-[16px]">download</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeProfiles;
