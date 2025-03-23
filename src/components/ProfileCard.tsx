
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ProfileCardProps {
  name?: string;
  bio?: string;
  avatarUrl?: string;
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name = "@42zz",
  bio = "",
  avatarUrl = "",
  className,
}) => {
  return (
    <motion.div 
      className={cn(
        "flex flex-col items-center text-center mb-8",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative mb-4 group">
        <div 
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-70 blur-md group-hover:opacity-100 transition-opacity"
          style={{ transform: 'scale(0.9)' }}
        />
        <img 
          src={avatarUrl} 
          alt={name} 
          className="relative w-24 h-24 rounded-full border-2 border-white/20 object-cover shadow-lg transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h1 className="text-2xl font-bold tracking-tight">{name}</h1>
      <p className="text-muted-foreground max-w-xs mt-2 text-balance">{bio}</p>
    </motion.div>
  );
};

export default ProfileCard;
