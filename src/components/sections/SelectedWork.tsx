import React from 'react';
import { Link } from 'react-router-dom';

const SelectedWork = () => {
  return (
    <section className="w-full py-space-3xl px-gutter bg-surface-container-low border-t border-b border-surface-container-highest" id="work">
      <div className="max-w-[1160px] mx-auto">
        <div className="mb-space-2xl">
          <span className="font-label-mono-sm text-label-mono-sm text-primary uppercase tracking-widest block mb-space-2xs">Portfolio Showcase</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight mb-space-2xs">Selected Mobile Work</h2>
          <p className="font-body-md text-body-md text-secondary">A selection of mobile products I have built, led and shipped.</p>
        </div>

        {/* WORK ITEM 1: NEXCART */}
        <div className="w-full bg-surface-container-lowest border border-surface-container-highest rounded-xl overflow-hidden mb-space-2xl hover:border-on-surface transition-all duration-200 group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            <div className="lg:col-span-7 bg-surface-container-high p-space-lg lg:p-space-2xl flex items-center justify-center overflow-hidden">
              <div className="w-full h-full flex items-center justify-center p-space-md">
                <img alt="Nexcart Enterprise Bulk Purchase mobile checkout interface" className="w-full max-h-[500px] object-contain object-top drop-shadow-xl transform group-hover:scale-[1.02] transition-transform duration-500" src="/nexcart.png" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML += '<div class="w-full h-full flex items-center justify-center text-tertiary font-label-mono-sm p-4 text-center">Please add nexcart.png to public folder</div>'; }}/>
              </div>
            </div>
            <div className="lg:col-span-5 p-space-xl lg:p-space-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-space-xs font-label-mono-sm text-label-mono-sm text-tertiary uppercase mb-space-xs">
                  <span>Enterprise E-Commerce Platform</span>
                  <span>•</span>
                  <span className="text-primary font-medium">Technical Lead</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-space-sm tracking-tight">NEXCART</h3>
                <p className="font-body-md text-body-md text-secondary mb-space-lg leading-relaxed">
                  Enterprise e-commerce mobile application featuring full catalog browsing, dynamic cart, wishlist, and transactional checkout flows.
                </p>
                <div className="flex flex-wrap gap-space-2xs mb-space-md">
                  <span className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-on-tertiary-container text-primary font-medium">Kotlin</span>
                  <span className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-on-tertiary-container text-primary font-medium">Jetpack Compose</span>
                  <span className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-on-tertiary-container text-primary font-medium">SwiftUI</span>
                  <span className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-on-tertiary-container text-primary font-medium">Apollo GraphQL</span>
                  <span className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-on-tertiary-container text-primary font-medium">MVVM</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-space-xl">
                  <span className="font-label-mono-sm text-[10px] uppercase px-space-xs py-0.5 rounded bg-surface-container text-secondary">Authentication</span>
                  <span className="font-label-mono-sm text-[10px] uppercase px-space-xs py-0.5 rounded bg-surface-container text-secondary">Checkout</span>
                </div>
              </div>
              <div>
                <Link to="/work/nexcart" className="inline-flex items-center gap-space-xs text-primary font-headline-sm text-headline-sm hover:translate-x-1 transition-transform group-hover:underline">
                  <span>View Case Study</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* WORK ITEM 2: KAHRAMAA */}
        <div className="w-full bg-surface-container-lowest border border-surface-container-highest rounded-xl overflow-hidden mb-space-2xl hover:border-on-surface transition-all duration-200 group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            <div className="lg:col-span-5 p-space-xl lg:p-space-2xl flex flex-col justify-between order-2 lg:order-1">
              <div>
                <div className="flex items-center gap-space-xs font-label-mono-sm text-label-mono-sm text-tertiary uppercase mb-space-xs">
                  <span>Qatar Government Utility Platform</span>
                  <span>•</span>
                  <span className="text-primary font-medium">Technical Lead</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-space-sm tracking-tight">KAHRAMAA</h3>
                <p className="font-body-md text-body-md text-secondary mb-space-lg leading-relaxed">
                  Official bilingual mobile utility self-service platform enabling bill payments, real-time consumption monitoring, and service request tracking.
                </p>
                <div className="flex flex-wrap gap-space-2xs mb-space-md">
                  <span className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-on-tertiary-container text-primary font-medium">Kotlin</span>
                  <span className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-on-tertiary-container text-primary font-medium">Jetpack Compose</span>
                  <span className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-on-tertiary-container text-primary font-medium">SwiftUI</span>
                  <span className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-on-tertiary-container text-primary font-medium">REST APIs</span>
                </div>
              </div>
              <div>
                <Link to="/work/kahramaa" className="inline-flex items-center gap-space-xs text-primary font-headline-sm text-headline-sm hover:translate-x-1 transition-transform group-hover:underline">
                  <span>View Case Study</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7 bg-surface-container-high p-space-lg lg:p-space-2xl flex items-center justify-center overflow-hidden order-1 lg:order-2">
              <div className="w-full h-full flex items-center justify-center p-space-md">
                <img alt="Kahramaa Arabic utility telemetry app" className="w-full max-h-[500px] object-contain object-top drop-shadow-xl transform group-hover:scale-[1.02] transition-transform duration-500" src="/kahramaa.png" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML += '<div class="w-full h-full flex items-center justify-center text-tertiary font-label-mono-sm p-4 text-center">Please add kahramaa.png to public folder</div>'; }}/>
              </div>
            </div>
          </div>
        </div>

        {/* WORK ITEM 3: DOCTIME LOG */}
        <div className="w-full bg-surface-container-lowest border border-surface-container-highest rounded-xl overflow-hidden mb-space-2xl hover:border-on-surface transition-all duration-200 group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            <div className="lg:col-span-7 bg-surface-container-high p-space-lg lg:p-space-2xl flex items-center justify-center overflow-hidden">
              <div className="w-full h-full flex items-center justify-center p-space-md">
                <img alt="DocTime Log patient vitals tracking interface" className="w-full max-h-[500px] object-contain object-top drop-shadow-xl transform group-hover:scale-[1.02] transition-transform duration-500" src="/doctime.png" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML += '<div class="w-full h-full flex items-center justify-center text-tertiary font-label-mono-sm p-4 text-center">Please add doctime.png to public folder</div>'; }}/>
              </div>
            </div>
            <div className="lg:col-span-5 p-space-xl lg:p-space-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-space-xs font-label-mono-sm text-label-mono-sm text-tertiary uppercase mb-space-xs">
                  <span>Healthcare Platform</span>
                  <span>•</span>
                  <span className="text-primary font-medium">Technical Lead</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-space-sm tracking-tight">DOCTIME LOG</h3>
                <p className="font-body-md text-body-md text-secondary mb-space-lg leading-relaxed">
                  Healthcare clinician workforce application facilitating physician time tracking, schedule coordination, and authentication.
                </p>
                <div className="flex flex-wrap gap-space-2xs mb-space-md">
                  <span className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-on-tertiary-container text-primary font-medium">Kotlin</span>
                  <span className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-on-tertiary-container text-primary font-medium">Swift UIKit</span>
                </div>
              </div>
              <div>
                <Link to="/work/doctime-log" className="inline-flex items-center gap-space-xs text-primary font-headline-sm text-headline-sm hover:translate-x-1 transition-transform group-hover:underline">
                  <span>View Case Study</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* WORK ITEM 4 & 5: APCCI + FLEETVIGIL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {/* APCCI */}
          <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-space-xl flex flex-col justify-between hover:border-on-surface transition-colors duration-200">
            <div>
              <div className="flex items-center gap-space-xs font-label-mono-sm text-label-mono-sm text-tertiary uppercase mb-space-xs">
                <span>Smart City Platform</span>
                <span>•</span>
                <span className="text-primary font-medium">Senior Mobile Engineer</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-space-sm tracking-tight">APCCI</h3>
              <p className="font-body-md text-body-md text-secondary mb-space-md leading-relaxed">
                Civic mobile operations suite providing municipal workforce management, attendance tracking, and citizen complaint resolution.
              </p>
            </div>
            <div>
              <Link to="/work/apcci" className="inline-flex items-center gap-space-xs text-primary font-headline-sm text-headline-sm hover:translate-x-1 transition-transform">
                <span>View Case Study</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* FLEETVIGIL */}
          <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl overflow-hidden flex flex-col justify-between hover:border-on-surface transition-colors duration-200">
            <div className="p-space-xl pb-0">
              <div className="flex items-center gap-space-xs font-label-mono-sm text-label-mono-sm text-tertiary uppercase mb-space-xs">
                <span>Fleet Management Platform</span>
                <span>•</span>
                <span className="text-primary font-medium">Senior Mobile Engineer</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-space-sm tracking-tight">FLEETVIGIL</h3>
              <p className="font-body-md text-body-md text-secondary mb-space-md leading-relaxed">
                Commercial fleet operations application providing real-time GPS asset tracking, driver trip monitoring, and vehicle diagnostics.
              </p>
            </div>
            <div className="px-space-xl pb-space-lg flex items-center justify-between">
              <Link to="/work/fleetvigil" className="inline-flex items-center gap-space-xs text-primary font-headline-sm text-headline-sm hover:translate-x-1 transition-transform">
                <span>View Case Study</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SelectedWork;
