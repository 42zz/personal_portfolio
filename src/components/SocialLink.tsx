import React from 'react';
import { Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Social } from '@/data/works';

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const configs = {
  x: { label: 'X', icon: <XIcon className="h-4 w-4" /> },
  github: { label: 'GitHub', icon: <Github className="h-4 w-4" /> },
} as const;

const SocialLink: React.FC<{ social: Social; className?: string }> = ({ social, className }) => {
  const c = configs[social.platform];
  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={c.label}
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium',
        'glass-card transition-all duration-300 hover:bg-foreground hover:text-background hover:shadow-md',
        className,
      )}
    >
      {c.icon}
      <span>{c.label}</span>
    </a>
  );
};

export default SocialLink;
