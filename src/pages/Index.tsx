import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from '@/components/ProfileCard';
import SocialLink from '@/components/SocialLink';
import WorkCard from '@/components/WorkCard';
import AnimatedBackground from '@/components/AnimatedBackground';
import { works, socials } from '@/data/works';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay },
});

const Index = () => {
  const released = works.filter((w) => w.status === 'released');
  const prototypes = works.filter((w) => w.status === 'prototype');

  return (
    <div className="min-h-screen w-full flex flex-col items-center relative overflow-hidden px-4 py-16 sm:py-24">
      <AnimatedBackground />

      <main className="w-full max-w-md mx-auto z-10">
        <ProfileCard
          name="Masaya Kawai"
          bio="個人でWebアプリを作っています。"
          avatarUrl="/me.jpg"
          className="mb-6"
        />

        <motion.div {...fadeUp(0.15)} className="flex flex-wrap justify-center gap-2">
          {socials.map((s) => (
            <SocialLink key={s.platform} social={s} />
          ))}
        </motion.div>

        <section className="mt-14">
          <motion.h2 {...fadeUp(0.25)} className="mb-3 px-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Works
          </motion.h2>
          <div className="space-y-3">
            {released.map((w, i) => (
              <motion.div key={w.url} {...fadeUp(0.3 + i * 0.08)}>
                <WorkCard work={w} />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <motion.h2 {...fadeUp(0.4)} className="mb-3 px-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Prototypes
          </motion.h2>
          <div className="space-y-3">
            {prototypes.map((w, i) => (
              <motion.div key={w.url} {...fadeUp(0.45 + i * 0.08)}>
                <WorkCard work={w} />
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="mt-16 text-center text-xs text-muted-foreground">
          <p className="opacity-60">&copy; {new Date().getFullYear()} masayakawai.com</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
