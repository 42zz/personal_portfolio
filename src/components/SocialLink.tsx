import React from 'react';
import { ArrowUpRight, Facebook, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Social } from '@/data/works';

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const configs = {
  x: { label: 'X', icon: <XIcon className="h-5 w-5" /> },
  github: { label: 'GitHub', icon: <Github className="h-5 w-5" /> },
  facebook: { label: 'Facebook', icon: <Facebook className="h-5 w-5" /> },
} as const;

const SocialLink: React.FC<{ social: Social; className?: string }> = ({ social, className }) => {
  const c = configs[social.platform];
  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group flex w-full items-center justify-between rounded-2xl glass-card px-5 py-4',
        'transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:bg-white/80',
        className,
      )}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background">
          {c.icon}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{c.label}</span>
          {social.note && <span className="text-xs text-muted-foreground">{social.note}</span>}
        </div>
      </div>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
};

export default SocialLink;
