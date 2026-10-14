import React from 'react';
import { motion } from 'framer-motion';
import type { CareerEntry } from '@/data/works';

const CareerSection: React.FC<{ id: string; entries: CareerEntry[] }> = ({ id, entries }) => (
  <section id={id} className="min-h-screen snap-start flex items-center justify-center px-5 py-24">
    <div className="w-full max-w-md">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
        className="mb-6 px-1"
      >
        <h2 className="text-2xl font-bold tracking-tight">Career</h2>
        <p className="mt-1 text-sm text-muted-foreground">これまでの仕事。</p>
      </motion.div>

      <ol className="relative ml-3 border-l border-border/80 pl-7">
        {entries.map((e, i) => (
          <motion.li
            key={`${e.year}-${i}`}
            className="relative pb-8 last:pb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.05 + i * 0.05 }}
          >
            <span className="absolute -left-[35px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background ring-1 ring-border">
              <span className="h-2 w-2 rounded-full bg-foreground" />
            </span>
            <time className="text-xs font-semibold tracking-wider text-muted-foreground">{e.period ?? e.year}</time>
            <div className="mt-1.5 rounded-2xl glass-card p-4">
              <h3 className="text-[15px] font-semibold leading-snug tracking-tight">{e.title}</h3>
              <div className="mt-3 space-y-4">
                {e.roles.map((r) => (
                  <div key={`${r.org}-${r.position ?? ''}`}>
                    <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="rounded-md bg-foreground px-2 py-0.5 text-[11px] font-semibold leading-5 text-background">
                        {r.org}
                      </span>
                      {r.position && <span className="text-[13px] font-bold">{r.position}</span>}
                    </p>
                    <div className="mt-1.5 space-y-1 text-sm leading-relaxed text-foreground/80">
                      {r.lines.map((line, j) => (
                        <p key={j}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {e.skills && e.skills.length > 0 && (
                <div className="mt-3 border-t border-border/60 pt-3">
                  <div className="flex flex-wrap gap-1.5">
                    {e.skills.map((t) => (
                      <span key={t} className="rounded-full bg-secondary px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  </section>
);

export default CareerSection;
