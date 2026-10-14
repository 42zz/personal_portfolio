import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from '@/components/ProfileCard';
import SocialLink from '@/components/SocialLink';
import WorkSection from '@/components/WorkSection';
import Nav from '@/components/Nav';
import AnimatedBackground from '@/components/AnimatedBackground';
import { sections, socials } from '@/data/works';

const navItems = [{ id: 'social', label: 'Social' }, ...sections.map((s) => ({ id: s.id, label: s.label }))];

const Index = () => {
  return (
    <div className="relative w-full">
      <AnimatedBackground />
      <Nav items={navItems} />

      <main className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
        <section id="social" className="min-h-screen snap-start flex items-center justify-center px-6 py-24">
          <div className="w-full max-w-md">
            <ProfileCard name="Masaya Kawai" bio="個人でWebアプリを作っています。" avatarUrl="/me.jpg" className="mb-6" />
            <motion.div
              className="flex justify-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {socials.map((s) => (
                <SocialLink key={s.platform} social={s} />
              ))}
            </motion.div>
          </div>
        </section>

        {sections.map((s) => (
          <WorkSection key={s.id} section={s} />
        ))}

        <footer className="snap-end py-6 text-center text-xs text-muted-foreground">
          <p className="opacity-60">&copy; {new Date().getFullYear()} masayakawai.com</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
