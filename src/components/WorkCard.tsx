import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Work } from '@/data/works';

const statusLabel: Record<Work['status'], string> = {
  released: '公開中',
  prototype: '試作中',
};

const WorkCard: React.FC<{ work: Work; className?: string }> = ({ work, className }) => {
  const host = new URL(work.url).host;
  return (
    <a
      href={work.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group block w-full rounded-2xl glass-card p-5 text-left',
        'transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md hover:bg-white/80',
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold tracking-tight">{work.name}</h3>
            <span
              className={cn(
                'inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium',
                work.status === 'released'
                  ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200'
                  : 'bg-amber-50 text-amber-700 ring-1 ring-amber-200',
              )}
            >
              {statusLabel[work.status]}
            </span>
          </div>
          <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{work.description}</p>
          <p className="mt-2 text-xs text-muted-foreground/70 truncate">{host}</p>
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </a>
  );
};

export default WorkCard;
