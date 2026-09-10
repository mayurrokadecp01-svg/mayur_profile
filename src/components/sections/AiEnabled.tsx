import React from 'react';

const AiEnabled = () => {
  return (
    <section className="w-full py-space-2xl px-gutter bg-surface-container-low border-t border-b border-surface-container-highest">
      <div className="max-w-[1160px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-lg">
          <div>
            <span className="font-label-mono-sm text-label-mono-sm text-primary uppercase tracking-widest block mb-space-2xs">Modern Augmentation</span>
            <h2 className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-tight">AI-Enabled Engineering</h2>
          </div>
          <div className="flex flex-wrap items-center gap-space-xs">
            <span className="font-label-mono-sm text-label-mono-sm px-space-sm py-space-2xs rounded bg-surface-container-lowest border border-surface-container-highest text-on-surface">AI / LLM Integration</span>
            <span className="font-label-mono-sm text-label-mono-sm px-space-sm py-space-2xs rounded bg-surface-container-lowest border border-surface-container-highest text-on-surface">AI-Assisted Development</span>
            <span className="font-label-mono-sm text-label-mono-sm px-space-sm py-space-2xs rounded bg-surface-container-lowest border border-surface-container-highest text-on-surface">AI-Assisted Code Review</span>
            <span className="font-label-mono-sm text-label-mono-sm px-space-sm py-space-2xs rounded bg-surface-container-lowest border border-surface-container-highest text-on-surface">AI-Assisted SDLC</span>
            <div className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded bg-primary text-on-primary font-label-mono-sm text-label-mono-sm">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              <span>Microsoft Certified: Azure AI Engineer Associate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiEnabled;
