import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Button } from '../ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const { error } = await supabase
        .from('contact_messages')
        // @ts-ignore
        .insert([formData]);
        
      if (error) throw error;
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section className="w-full py-space-3xl px-gutter bg-surface-container-lowest border-t border-surface-container-highest" id="contact">
      <div className="max-w-[1160px] mx-auto">
        <div className="max-w-2xl mb-space-2xl">
          <span className="font-label-mono-sm text-label-mono-sm text-primary uppercase tracking-widest block mb-space-2xs">Direct Contact</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight mb-space-xs">Let's build something useful.</h2>
          <p className="font-body-md text-body-md text-secondary">Reach out directly or send a message below for architecture discussions, advisory, or mobile leadership roles.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-start">
          {/* Contact Form (Supabase-ready) */}
          <div className="lg:col-span-7 bg-surface p-space-xl border border-surface-container-highest rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-space-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div>
                  <label htmlFor="name" className="font-label-mono-sm text-label-mono-sm text-tertiary uppercase block mb-1">Name</label>
                  <input 
                    id="name"
                    required
                    type="text" 
                    className="w-full px-space-md py-space-xs rounded-lg bg-surface-container-lowest border border-surface-container-highest text-on-surface font-body-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-label-mono-sm text-label-mono-sm text-tertiary uppercase block mb-1">Email</label>
                  <input 
                    id="email"
                    required
                    type="email" 
                    className="w-full px-space-md py-space-xs rounded-lg bg-surface-container-lowest border border-surface-container-highest text-on-surface font-body-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="font-label-mono-sm text-label-mono-sm text-tertiary uppercase block mb-1">Subject</label>
                <input 
                  id="subject"
                  type="text" 
                  required
                  className="w-full px-space-md py-space-xs rounded-lg bg-surface-container-lowest border border-surface-container-highest text-on-surface font-body-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Project Inquiry / Advisory"
                  value={formData.subject}
                  onChange={e => setFormData({...formData, subject: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="message" className="font-label-mono-sm text-label-mono-sm text-tertiary uppercase block mb-1">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  className="w-full px-space-md py-space-xs rounded-lg bg-surface-container-lowest border border-surface-container-highest text-on-surface font-body-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Describe the scope, technical challenges, or collaboration opportunity..."
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                />
              </div>
              
              <div className="pt-space-sm flex items-center justify-between">
                <Button type="submit" disabled={status === 'submitting'} className={status === 'submitting' ? 'opacity-75 cursor-not-allowed px-space-xl py-space-sm bg-primary-container text-on-primary font-headline-sm text-headline-sm rounded-lg hover:bg-primary transition-colors' : 'px-space-xl py-space-sm bg-primary-container text-on-primary font-headline-sm text-headline-sm rounded-lg hover:bg-primary transition-colors'}>
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>
                
                {status === 'success' && <span className="text-[#10b981] font-label-mono-sm">Message sent successfully!</span>}
                {status === 'error' && <span className="text-error font-label-mono-sm">Failed to send message. Try again.</span>}
              </div>
            </form>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-space-lg">
            <div className="space-y-space-md">
              <a href="mailto:rokademayurjp0207@gmail.com" className="p-space-md rounded-xl bg-surface border border-surface-container-highest flex items-center gap-space-sm hover:border-on-surface transition-colors block">
                <div className="w-10 h-10 rounded-full bg-on-tertiary-container flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div className="text-left overflow-hidden">
                  <div className="font-label-mono-sm text-label-mono-sm text-tertiary uppercase">Email</div>
                  <div className="font-body-sm text-body-sm text-on-surface font-medium truncate">rokademayurjp0207@gmail.com</div>
                </div>
              </a>
              <a href="tel:+918767690878" className="p-space-md rounded-xl bg-surface border border-surface-container-highest flex items-center gap-space-sm hover:border-on-surface transition-colors block">
                <div className="w-10 h-10 rounded-full bg-on-tertiary-container flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
                <div className="text-left">
                  <div className="font-label-mono-sm text-label-mono-sm text-tertiary uppercase">Phone</div>
                  <div className="font-body-sm text-body-sm text-on-surface font-medium">+91-8767690878</div>
                </div>
              </a>
            </div>
            
            <div className="p-space-lg bg-surface rounded-xl border border-surface-container-highest">
              <div className="font-label-mono-sm text-label-mono-sm text-tertiary uppercase mb-space-xs">Social Profiles</div>
              <div className="flex flex-col gap-space-sm font-label-code text-label-code">
                <a href="https://www.linkedin.com/in/mayuroakde/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between text-secondary hover:text-primary transition-colors py-1">
                  <span>LinkedIn / mayuroakde</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </a>
                <a href="https://github.com/mayurrokadecp01-svg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between text-secondary hover:text-primary transition-colors py-1 border-t border-surface-container-highest">
                  <span>GitHub / mayurrokadecp01-svg</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
