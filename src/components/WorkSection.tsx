import React from 'react';
import { motion } from 'framer-motion';
import WorkCard from '@/components/WorkCard';
import type { WorkGroup } from '@/data/works';

const WorkSection: React.FC<{ id: string; groups: WorkGroup[] }> = ({ id, groups }) => (
  <section id={id} className="min-h-screen snap-start flex items-center justify-center px-5 py-24">
    <div className="w-full max-w-md space-y-10">
      {groups.map((g) => (
        <div key={g.title}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            className="mb-4 px-1"
          >
            <h2 className="text-2xl font-bold tracking-tight">{g.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{g.lead}</p>
          </motion.div>
          <div className="space-y-4">
            {g.works.map((w, i) => (
              <motion.div
                key={w.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
              >
                <WorkCard work={w} />
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default WorkSection;
