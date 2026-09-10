import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/database';
import { FadeIn } from '../components/ui/ScrollReveal';

type Project = Database['public']['Tables']['projects']['Row'];
type ProjectImage = Database['public']['Tables']['project_images']['Row'];

const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [images, setImages] = useState<ProjectImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Navigation
  const [allProjects, setAllProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
    
    const fetchProject = async () => {
      if (!slug) return;
      try {
        setLoading(true);
        setError(null);
        
        const { data, error: fetchError } = await supabase
          .from('projects')
          .select('*')
          .eq('slug', slug)
          .single();
        
        if (fetchError) throw fetchError;
        setProject(data as any);
        
        // Dynamic SEO Title
        if (data) {
          document.title = `${(data as any).name} — Mayur Rokade`;
        }

        if (data) {
          // Fetch images
          const { data: imgData } = await supabase
            .from('project_images')
            .select('*')
            .eq('project_id', (data as any).id)
            .order('sort_order', { ascending: true });
          
          if (imgData) setImages(imgData as any);
          
          // Fetch all for prev/next
          const { data: allData } = await supabase
            .from('projects')
            .select('*')
            .not('full_description', 'is', null) // Only full case studies
            .order('sort_order', { ascending: true });
            
          if (allData) setAllProjects(allData as any);
        }
      } catch (err: any) {
        console.error(err);
        setError(err.message || 'Failed to load project details.');
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-surface">
        <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-surface px-gutter text-center">
        <span className="material-symbols-outlined text-[48px] text-tertiary mb-space-md">folder_off</span>
        <h1 className="font-display text-4xl text-on-surface mb-space-sm">Project Not Found</h1>
        <p className="font-body-md text-secondary max-w-md mb-space-xl">
          The project case study you're looking for doesn't exist or is unavailable.
        </p>
        <Link to="/#work" className="inline-flex items-center justify-center px-space-lg py-space-sm bg-primary-container text-on-primary font-headline-sm text-headline-sm rounded-lg hover:bg-primary transition-colors">
          Return to Portfolio
        </Link>
      </div>
    );
  }

  // Navigation Logic
  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex !== -1 && currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <FadeIn>
      <div className="w-full pt-24 pb-space-4xl px-gutter bg-surface min-h-screen">
        <div className="max-w-container-wide mx-auto">
          
          {/* HEADER SECTION */}
          <div className="mb-space-3xl">
            <Link to="/#work" className="inline-flex items-center gap-space-xs text-secondary hover:text-primary font-headline-sm mb-space-xl hover:-translate-x-1 transition-all">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              <span>Back to Portfolio</span>
            </Link>
            
            <div className="flex flex-wrap items-center gap-space-xs font-label-mono-sm text-tertiary uppercase mb-space-md">
              {project.category && <span>{project.category}</span>}
              {project.category && project.role && <span>•</span>}
              {project.role && <span className="text-primary font-medium">{project.role}</span>}
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-[72px] text-on-surface mb-space-lg leading-[1.05] tracking-tight uppercase">
              {project.name}
            </h1>
            
            {project.short_description && (
              <p className="font-body-lg text-secondary max-w-3xl leading-relaxed mb-space-xl">
                {project.short_description}
              </p>
            )}
            
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-space-2xs mb-space-xl">
                {project.technologies.map((tech: string, i: number) => (
                  <span key={i} className="font-label-mono-sm px-space-sm py-space-xs rounded-full border border-surface-container-highest text-secondary uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* PROJECT HERO IMAGE */}
          {project.image_url && (
            <div className="w-full bg-surface-container-lowest border border-surface-container-highest rounded-2xl overflow-hidden mb-space-4xl flex items-center justify-center p-space-2xl drop-shadow-sm">
              <img src={project.image_url} alt={`${project.name} interface`} className="w-full max-w-[400px] h-auto object-contain max-h-[600px] mx-auto drop-shadow-2xl" />
            </div>
          )}

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl mb-space-4xl">
            
            {/* MAIN COLUMN */}
            <div className="lg:col-span-8 space-y-space-3xl">
              
              {/* OVERVIEW */}
              {project.full_description && (
                <section>
                  <h2 className="font-headline-lg text-on-surface uppercase tracking-tight mb-space-md pb-space-xs border-b border-surface-container-highest">Project Overview</h2>
                  <div className="font-body-md text-secondary whitespace-pre-wrap leading-relaxed text-lg">
                    {project.full_description}
                  </div>
                </section>
              )}

              {/* MY ROLE */}
              {project.responsibilities && project.responsibilities.length > 0 && (
                <section>
                  <h2 className="font-headline-lg text-on-surface uppercase tracking-tight mb-space-md pb-space-xs border-b border-surface-container-highest">My Role</h2>
                  <ul className="space-y-space-sm">
                    {project.responsibilities.map((resp: string, idx: number) => (
                      <li key={idx} className="flex gap-space-sm">
                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">check_circle</span>
                        <span className="font-body-md text-secondary leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* ENGINEERING & ARCHITECTURE */}
              {project.architecture && (
                <section>
                  <h2 className="font-headline-lg text-on-surface uppercase tracking-tight mb-space-md pb-space-xs border-b border-surface-container-highest">Engineering</h2>
                  <div className="font-body-md text-secondary whitespace-pre-wrap leading-relaxed">
                    {project.architecture}
                  </div>
                </section>
              )}
              
              {/* KEY FEATURES */}
              {project.features && project.features.length > 0 && (
                <section>
                  <h2 className="font-headline-lg text-on-surface uppercase tracking-tight mb-space-md pb-space-xs border-b border-surface-container-highest">Key Features</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    {project.features.map((feature: string, idx: number) => (
                      <div key={idx} className="bg-surface-container-low border border-surface-container-highest rounded-xl p-space-md">
                        <span className="font-body-md text-on-surface font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

            </div>
            
            {/* SIDEBAR COLUMN */}
            <div className="lg:col-span-4 space-y-space-xl lg:pl-space-xl border-t lg:border-t-0 lg:border-l border-surface-container-highest pt-space-2xl lg:pt-0">
              
              {/* PLATFORM */}
              {project.platform && (
                <div>
                  <h3 className="font-label-mono-sm text-tertiary uppercase tracking-wider mb-space-xs">Platforms</h3>
                  <p className="font-body-md text-on-surface font-medium">{project.platform}</p>
                </div>
              )}
              
              {/* TECHNOLOGY STACK */}
              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <h3 className="font-label-mono-sm text-tertiary uppercase tracking-wider mb-space-xs">Technology</h3>
                  <div className="flex flex-wrap gap-2 mt-space-xs">
                    {project.technologies.map((tech: string, i: number) => (
                      <span key={i} className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-on-tertiary-container text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* OUTCOME */}
              {project.outcome && (
                <div>
                  <h3 className="font-label-mono-sm text-tertiary uppercase tracking-wider mb-space-xs">Outcome</h3>
                  <p className="font-body-sm text-secondary leading-relaxed border-l-2 border-primary pl-space-md italic">
                    "{project.outcome}"
                  </p>
                </div>
              )}

            </div>
          </div>

          {/* PROJECT VISUALS GALLERY */}
          {images && images.length > 0 && (
            <section className="mb-space-4xl">
              <h2 className="font-headline-lg text-on-surface uppercase tracking-tight mb-space-lg">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-lg">
                {images.map((img: ProjectImage) => (
                  <div key={img.id} className="bg-surface-container-lowest border border-surface-container-highest rounded-xl overflow-hidden aspect-[4/5] flex items-center justify-center p-space-md cursor-pointer hover:border-on-surface transition-colors" onClick={() => window.open(img.image_url, '_blank')}>
                    <img src={img.image_url} alt={img.alt_text || "Project visual"} className="w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* NAVIGATION FOOTER */}
          <div className="border-t border-surface-container-highest pt-space-2xl flex flex-col sm:flex-row items-center justify-between gap-space-xl">
            <div className="flex-1 text-left w-full sm:w-auto">
              {prevProject && (
                <Link to={`/work/${prevProject.slug}`} className="group inline-flex flex-col">
                  <span className="font-label-mono-sm text-tertiary uppercase tracking-wider mb-1 flex items-center gap-1 group-hover:-translate-x-1 transition-transform">
                    <span className="material-symbols-outlined text-[14px]">arrow_back</span> Previous Project
                  </span>
                  <span className="font-headline-sm text-on-surface group-hover:text-primary transition-colors">{prevProject.name}</span>
                </Link>
              )}
            </div>
            
            <div className="flex-shrink-0">
              <Link to="/#work" className="font-label-mono-sm text-on-surface border border-surface-container-highest px-space-lg py-space-sm rounded-full hover:bg-surface-container transition-colors uppercase tracking-widest">
                All Work
              </Link>
            </div>
            
            <div className="flex-1 text-right w-full sm:w-auto">
              {nextProject && (
                <Link to={`/work/${nextProject.slug}`} className="group inline-flex flex-col items-end">
                  <span className="font-label-mono-sm text-tertiary uppercase tracking-wider mb-1 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Next Project <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </span>
                  <span className="font-headline-sm text-on-surface group-hover:text-primary transition-colors">{nextProject.name}</span>
                </Link>
              )}
            </div>
          </div>

        </div>
      </div>
    </FadeIn>
  );
};

export default ProjectDetails;
