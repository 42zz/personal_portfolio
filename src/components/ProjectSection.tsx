import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/works';

const ProjectSection: React.FC<{ id: string; projects: Project[] }> = ({ id, projects }) => (
  <section id={id} className="min-h-screen snap-start flex items-center justify-center px-5 py-24">
    <div className="w-full max-w-md">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
        className="mb-4 px-1"
      >
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
        <p className="mt-1 text-sm text-muted-foreground">これまでに携わった仕事や制作の実績です。</p>
      </motion.div>
      <div className="space-y-3">
        {projects.map((p, i) => {
          const inner = (
            <>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <h3 className="text-base font-semibold tracking-tight">{p.name}</h3>
                    <span className="text-xs text-muted-foreground">{p.period}</span>
                  </div>
                  <p className="mt-0.5 text-xs font-medium text-muted-foreground">{p.role}</p>
                </div>
                {p.url && (
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{p.description}</p>
            </>
          );
          const cls = 'group block rounded-2xl glass-card p-5 transition-all duration-300 hover:shadow-md hover:bg-white/80';
          return (
            <motion.div
              key={`${p.name}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
            >
              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className={cls}>
                  {inner}
                </a>
              ) : (
                <article className={cls}>{inner}</article>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProjectSection;
