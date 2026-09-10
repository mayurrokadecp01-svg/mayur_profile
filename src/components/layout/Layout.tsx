import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/85 backdrop-blur-md border-b border-surface-container-highest">
        <div className="h-16 max-w-[1160px] mx-auto px-gutter flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-sm">
            <Link to="/" className="font-headline-sm text-headline-sm text-on-surface tracking-tight uppercase hover:text-primary transition-colors">
              Mayur Rokade
            </Link>
            <span className="hidden sm:inline-flex items-center font-label-mono-sm text-label-mono-sm px-space-xs py-space-2xs rounded bg-on-tertiary-container text-primary uppercase border border-outline-variant/30">
              Mobile Technical Lead
            </span>
          </div>
          <nav className="hidden lg:flex items-center gap-space-lg">
            <a href="/#work" className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">Work</a>
            <a href="/#approach" className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">Approach</a>
            <a href="/#experience" className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">Experience</a>
            <a href="/#skills" className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">Skills</a>
            <a href="/#resume" className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">Resume</a>
            <a href="/#contact" className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-space-sm">
            <a href="/#contact" className="hidden md:inline-flex items-center justify-center font-body-sm text-body-sm px-space-md py-space-xs rounded-xl bg-on-surface text-on-primary hover:bg-primary transition-colors duration-150">
              Get in touch
            </a>
          </div>
        </div>
      </header>
      
      <main className="w-full pt-16 bg-surface flex-grow flex flex-col">
        <Outlet />
      </main>

      <footer className="w-full py-space-xl px-gutter bg-surface-container-lowest border-t border-surface-container-highest">
        <div className="max-w-[1160px] mx-auto flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="font-label-mono-sm text-tertiary uppercase tracking-wider">
            © {new Date().getFullYear()} Mayur Rokade
          </div>
          <div className="flex gap-space-md">
            <Link to="/admin" className="font-label-mono-sm text-primary hover:underline">Admin Login</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
