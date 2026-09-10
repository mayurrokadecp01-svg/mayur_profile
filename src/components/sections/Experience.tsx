import React from 'react';

// We'll later fetch this from Supabase. For now, we'll map static data to verify layout.
const experienceData = [
  {
    title: "Tech Lead",
    company: "NewVision Software Pvt. Ltd.",
    period: "Oct 2021 — Present",
    description: "Guiding mobile architecture, code review standards, release pipelines, and leading cross-functional engineering teams."
  },
  {
    title: "Senior Software Developer",
    company: "Aventior Digital Pvt. Ltd.",
    period: "Nov 2020 — Aug 2021",
    description: "Engineered high-reliability mobile applications with clean modular architecture and seamless RESTful integrations."
  },
  {
    title: "Senior Software Developer",
    company: "Aryaomnitalk Wireless Solution Pvt. Ltd.",
    period: "Jun 2020 — Nov 2020",
    description: "Developed mission-critical communication and telemetry mobile tools with location mapping services."
  },
  {
    title: "Senior Software Developer",
    company: "Virat Consultancies & IT Services",
    period: "Dec 2017 — Jun 2020",
    description: "Built scalable native Android and iOS applications across utility and enterprise client domains."
  },
  {
    title: "Android Application Developer",
    company: "SparxVenture Technology Pvt. Ltd.",
    period: "Oct 2016 — Dec 2017",
    description: "Implemented native Android features, lifecycle management, offline SQLite caching, and UI workflows."
  }
];

const Experience = () => {
  return (
    <section className="w-full py-space-3xl px-gutter bg-surface-container-low border-t border-b border-surface-container-highest" id="experience">
      <div className="max-w-[760px] mx-auto">
        <div className="mb-space-2xl">
          <span className="font-label-mono-sm text-label-mono-sm text-primary uppercase tracking-widest block mb-space-2xs">Career Trajectory</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight mb-space-2xs">Experience</h2>
          <p className="font-body-md text-body-md text-secondary">A decade leading and delivering high-stakes mobile applications.</p>
        </div>
        <div className="relative border-l border-surface-container-highest ml-3 pl-space-xl space-y-space-2xl">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative group">
              <div className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full ring-4 ring-surface-container-low ${index === 0 ? 'bg-primary' : 'bg-outline-variant group-hover:bg-primary transition-colors'}`}></div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-space-2xs mb-space-2xs">
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">{exp.title}</h3>
                <span className="font-label-mono-sm text-label-mono-sm text-tertiary">{exp.period}</span>
              </div>
              <div className="font-body-sm text-body-sm text-primary font-medium mb-space-xs">{exp.company}</div>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
