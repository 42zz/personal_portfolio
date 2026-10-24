import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from '@/components/ProfileCard';
import SocialLink from '@/components/SocialLink';
import ContactForm from '@/components/ContactForm';
import Nav from '@/components/Nav';
import AnimatedBackground from '@/components/AnimatedBackground';
import { socials } from '@/data/socials';
import { CONTACT_ENABLED } from '@/lib/contact';

const navItems = [{ id: 'social', label: 'Social' }, ...(CONTACT_ENABLED ? [{ id: 'contact', label: 'Contact' }] : [])];

const Index = () => {
  return (
    <div className="relative w-full">
      <AnimatedBackground />
      <Nav items={navItems} />

      <main>
        <section id="social" className="min-h-screen flex items-center justify-center px-5 py-24">
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

        {CONTACT_ENABLED && (
          <section id="contact" className="min-h-screen flex items-center justify-center px-5 py-24">
            <div className="w-full max-w-md">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4 }}
                className="mb-6 px-1"
              >
                <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
                <p className="mt-1 text-sm text-muted-foreground">お仕事のご相談などはこちらから。</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: 0.1 }}
              >
                <ContactForm />
              </motion.div>
            </div>
          </section>
        )}

        <footer className="py-6 text-center text-xs text-muted-foreground">
          <p className="opacity-60">&copy; {new Date().getFullYear()} masayakawai.com</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
