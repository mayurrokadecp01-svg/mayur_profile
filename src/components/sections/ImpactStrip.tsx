import React from 'react';

const ImpactStrip = () => {
  return (
    <section className="w-full px-gutter pb-space-2xl">
      <div className="max-w-[1160px] mx-auto bg-surface-container-lowest border border-surface-container-highest rounded-xl p-space-lg lg:p-space-xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-lg items-center divide-y sm:divide-y-0 sm:divide-x divide-surface-container-highest">
          <div className="pt-space-xs sm:pt-0 sm:px-space-md text-left">
            <div className="font-display text-3xl lg:text-4xl text-on-surface font-semibold tracking-tight">10+</div>
            <div className="font-label-mono-sm text-label-mono-sm text-tertiary uppercase tracking-wider mt-1">Years Experience</div>
          </div>
          <div className="pt-space-xs sm:pt-0 sm:px-space-md text-left">
            <div className="font-display text-3xl lg:text-4xl text-on-surface font-semibold tracking-tight">20+</div>
            <div className="font-label-mono-sm text-label-mono-sm text-tertiary uppercase tracking-wider mt-1">Mobile Applications</div>
          </div>
          <div className="pt-space-xs sm:pt-0 sm:px-space-md text-left">
            <div className="font-display text-3xl lg:text-4xl text-on-surface font-semibold tracking-tight">20+</div>
            <div className="font-label-mono-sm text-label-mono-sm text-tertiary uppercase tracking-wider mt-1">Google Play Releases</div>
          </div>
          <div className="pt-space-xs sm:pt-0 sm:px-space-md text-left">
            <div className="font-display text-3xl lg:text-4xl text-on-surface font-semibold tracking-tight">10+</div>
            <div className="font-label-mono-sm text-label-mono-sm text-tertiary uppercase tracking-wider mt-1">App Store Releases</div>
          </div>
          <div className="pt-space-xs sm:pt-0 sm:px-space-md text-left col-span-2 sm:col-span-1">
            <div className="font-display text-3xl lg:text-4xl text-primary font-semibold tracking-tight">8</div>
            <div className="font-label-mono-sm text-label-mono-sm text-tertiary uppercase tracking-wider mt-1">Developers Led</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStrip;
