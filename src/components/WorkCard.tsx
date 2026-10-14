import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import AppLogo from '@/components/AppLogo';
import type { Work } from '@/data/works';

const WorkCard: React.FC<{ work: Work }> = ({ work }) => {
  const host = new URL(work.url).host;
  return (
    <article className="glass-card rounded-3xl p-6 transition-all duration-300 hover:shadow-md hover:bg-white/80">
      <div className="flex items-center gap-4">
        <AppLogo name={work.name} src={work.logo} />
        <div className="min-w-0">
          <h3 className="text-xl font-bold tracking-tight">{work.name}</h3>
          {work.tagline && <p className="mt-0.5 text-sm text-muted-foreground">{work.tagline}</p>}
        </div>
      </div>
      <div className="mt-4 space-y-1.5 text-sm leading-relaxed text-foreground/80">
        {work.description.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
      <a
        href={work.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-5 inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-all hover:shadow-md hover:-translate-y-0.5"
      >
        {host}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </article>
  );
};

export default WorkCard;
