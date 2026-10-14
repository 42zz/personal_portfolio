import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Work } from '@/data/works';

const statusLabel: Record<Work['status'], string> = {
  released: '公開中',
  prototype: '試作中',
};

const WorkSection: React.FC<{ work: Work }> = ({ work }) => {
  const host = new URL(work.url).host;
  return (
    <section
      id={work.id}
      className="min-h-screen snap-start flex items-center justify-center px-6 py-24"
    >
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <span
          className={cn(
            'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
            work.status === 'released'
              ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200'
              : 'bg-amber-50 text-amber-700 ring-1 ring-amber-200',
          )}
        >
          {statusLabel[work.status]}
        </span>
        <h2 className="mt-4 text-4xl font-bold tracking-tight">{work.name}</h2>
        <p className="mt-2 text-lg text-muted-foreground">{work.tagline}</p>
        <div className="mt-6 space-y-2 text-[15px] leading-relaxed text-foreground/80">
          {work.description.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
        <a
          href={work.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:shadow-md hover:-translate-y-0.5"
        >
          {host}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.div>
    </section>
  );
};

export default WorkSection;
