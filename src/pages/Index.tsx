import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from '@/components/ProfileCard';
import SocialLink from '@/components/SocialLink';
import WorkSection from '@/components/WorkSection';
import ProjectSection from '@/components/ProjectSection';
import Nav from '@/components/Nav';
import AnimatedBackground from '@/components/AnimatedBackground';
import { workGroups, projects, socials } from '@/data/works';

const navItems = [
  { id: 'social', label: 'Social' },
  { id: 'apps', label: 'Apps' },
  { id: 'projects', label: 'Projects' },
];

const Index = () => {
  return (
    <div className="relative w-full">
      <AnimatedBackground />
      <Nav items={navItems} />

      <main className="h-screen overflow-y-auto snap-y snap-proximity scroll-smooth">
        <section id="social" className="min-h-screen snap-start flex items-center justify-center px-5 py-24">
          <div className="w-full max-w-md">
            <ProfileCard name="Masaya Kawai" avatarUrl="/me.jpg" className="mb-8" />
            <div className="space-y-3">
              {socials.map((s, i) => (
                <motion.div
                  key={s.platform}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                >
                  <SocialLink social={s} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <WorkSection id="apps" groups={workGroups} />
        <ProjectSection id="projects" projects={projects} />

        <footer className="snap-end py-6 text-center text-xs text-muted-foreground">
          <p className="opacity-60">&copy; {new Date().getFullYear()} masayakawai.com</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
