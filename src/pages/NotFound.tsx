import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-gutter text-center">
      <h1 className="font-display text-display text-on-surface mb-space-sm">404</h1>
      <p className="font-body-lg text-secondary mb-space-lg">The page you are looking for does not exist.</p>
      <Link to="/" className="inline-flex items-center justify-center px-space-lg py-space-sm bg-primary text-on-primary font-headline-sm rounded-lg hover:bg-primary-container transition-colors">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
