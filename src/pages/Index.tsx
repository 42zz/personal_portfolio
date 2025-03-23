
import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from '@/components/ProfileCard';
import SocialLink from '@/components/SocialLink';
import AnimatedBackground from '@/components/AnimatedBackground';

type SocialLinkData = {
  platform: 'x' | 'instagram' | 'facebook' | 'linkedin' | 'github' | 'other';
  username: string;
};

const socialLinks: SocialLinkData[] = [
  { platform: 'x', username: '@42zz' },
  { platform: 'github', username: '@42zz' },
  { platform: 'instagram', username: '@42zz' },
  { platform: 'facebook', username: '@m42zz' },
  { platform: 'linkedin', username: '@masayakawai' },
];

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-4 py-12">
      <AnimatedBackground />
      
      <div className="w-full max-w-md mx-auto z-10">
        <ProfileCard 
          name="Masaya Kawai"
          bio="Freelance web developer focused on frontend. Backend capable. Delivering creative and efficient web solutions."
          avatarUrl="/me.jpg"
        />
        
        <motion.div 
          className="space-y-3 w-full mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.platform}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <SocialLink
                platform={link.platform}
                username={link.username}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <footer className="mt-12 text-center text-xs text-muted-foreground">
          <p className="opacity-60">&copy; {new Date().getFullYear()} masayakawai.com</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
