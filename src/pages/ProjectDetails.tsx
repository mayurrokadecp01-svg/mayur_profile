import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/database';

type Project = Database['public']['Tables']['projects']['Row'];
type ProjectImage = Database['public']['Tables']['project_images']['Row'];

const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [images, setImages] = useState<ProjectImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      if (!slug) return;
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('slug', slug)
          .single();
        
        if (error) throw error;
        setProject(data as any);

        if (data) {
          const { data: imgData } = await supabase
            .from('project_images')
            .select('*')
            .eq('project_id', (data as any).id)
            .order('sort_order', { ascending: true });
          
          if (imgData) setImages(imgData as any);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) {
    return <div className="w-full py-space-3xl px-gutter text-center">Loading...</div>;
  }

  if (!project) {
    return (
      <div className="w-full py-space-3xl px-gutter text-center">
        <h1 className="font-display text-4xl text-on-surface mb-space-md">Project Not Found</h1>
        <Link to="/#work" className="text-primary hover:underline">Return to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="w-full py-space-3xl px-gutter bg-surface">
      <div className="max-w-[1160px] mx-auto">
        <Link to="/#work" className="inline-flex items-center gap-space-xs text-primary font-headline-sm mb-space-xl hover:-translate-x-1 transition-transform">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span>Back to Portfolio</span>
        </Link>
        
        <div className="mb-space-2xl">
          <div className="flex items-center gap-space-xs font-label-mono-sm text-tertiary uppercase mb-space-xs">
            <span>{project.category}</span>
            <span>•</span>
            <span className="text-primary font-medium">{project.role}</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-on-surface mb-space-md">{project.name}</h1>
          <p className="font-body-lg text-secondary max-w-3xl leading-relaxed">
            {project.short_description}
          </p>
        </div>

        {project.image_url && (
          <div className="w-full bg-surface-container-high rounded-xl overflow-hidden mb-space-2xl border border-surface-container-highest">
            <img src={project.image_url} alt={project.name} className="w-full h-auto object-cover max-h-[600px]" />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-xl">
          <div className="md:col-span-2 space-y-space-xl">
            <div>
              <h2 className="font-headline-lg text-on-surface mb-space-sm">Overview</h2>
              <div className="font-body-md text-secondary whitespace-pre-wrap leading-relaxed">
                {project.full_description || "Detailed description not available."}
              </div>
            </div>
            
            {project.architecture && (
              <div>
                <h2 className="font-headline-lg text-on-surface mb-space-sm">Architecture</h2>
                <div className="font-body-md text-secondary whitespace-pre-wrap leading-relaxed">
                  {project.architecture}
                </div>
              </div>
            )}
          </div>
          
          <div className="space-y-space-lg">
            <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-space-lg">
              <h3 className="font-label-mono-sm text-tertiary uppercase tracking-wider mb-space-sm border-b border-surface-container-highest pb-space-2xs">Platform</h3>
              <p className="font-body-md text-on-surface">{project.platform}</p>
            </div>
            
            {project.technologies && project.technologies.length > 0 && (
              <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-space-lg">
                <h3 className="font-label-mono-sm text-tertiary uppercase tracking-wider mb-space-sm border-b border-surface-container-highest pb-space-2xs">Technologies</h3>
                <div className="flex flex-wrap gap-space-2xs">
                  {project.technologies.map((tech: string, i: number) => (
                    <span key={i} className="font-label-mono-sm px-space-xs py-space-2xs rounded bg-on-tertiary-container text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
