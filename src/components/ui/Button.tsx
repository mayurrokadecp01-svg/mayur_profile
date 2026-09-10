import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-headline-sm text-headline-sm transition-colors duration-150 px-space-lg py-space-sm",
          {
            "bg-primary-container text-on-primary hover:bg-primary": variant === 'primary',
            "bg-surface-container-lowest text-on-surface border border-surface-container-highest hover:border-on-surface": variant === 'secondary',
            "text-primary hover:underline bg-transparent border-none p-0": variant === 'ghost',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
