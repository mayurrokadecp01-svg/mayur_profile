import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'secondary';
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-label-mono-sm uppercase rounded px-space-xs py-0.5",
        {
          "bg-on-tertiary-container text-primary font-medium": variant === 'default',
          "bg-surface-container text-secondary text-[10px]": variant === 'secondary',
          "border border-surface-container-highest text-tertiary": variant === 'outline',
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
