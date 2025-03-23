
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Twitter, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Github, 
  ExternalLink 
} from 'lucide-react';

type SocialPlatform = 'x' | 'instagram' | 'facebook' | 'linkedin' | 'github' | 'other';

interface SocialLinkProps {
  platform: SocialPlatform;
  username: string;
  index: number;
  className?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ 
  platform, 
  username, 
  index,
  className 
}) => {
  // Platform-specific configurations
  const configs = {
    x: {
      icon: <Twitter className="h-5 w-5" />,
      label: 'X',
      url: `https://x.com/${username.replace('@', '')}`,
      bgClass: 'bg-black text-white hover:bg-zinc-800',
    },
    instagram: {
      icon: <Instagram className="h-5 w-5" />,
      label: 'Instagram',
      url: `https://instagram.com/${username.replace('@', '')}`,
      bgClass: 'bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white',
    },
    facebook: {
      icon: <Facebook className="h-5 w-5" />,
      label: 'Facebook',
      url: `https://facebook.com/${username.replace('@', '')}`,
      bgClass: 'bg-blue-600 text-white hover:bg-blue-700',
    },
    linkedin: {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      url: `https://linkedin.com/in/${username.replace('@', '')}`,
      bgClass: 'bg-blue-700 text-white hover:bg-blue-800',
    },
    github: {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      url: `https://github.com/${username.replace('@', '')}`,
      bgClass: 'bg-zinc-900 text-white hover:bg-zinc-800',
    },
    other: {
      icon: <ExternalLink className="h-5 w-5" />,
      label: 'Link',
      url: username,
      bgClass: 'bg-gray-700 text-white hover:bg-gray-600',
    }
  };

  const config = configs[platform];
  
  return (
    <a 
      href={config.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-center justify-between w-full p-4 rounded-xl",
        "transition-all duration-300 ease-out",
        "transform hover:scale-[1.02] hover:shadow-md",
        "border border-transparent hover:border-white/10",
        config.bgClass,
        className
      )}
      style={{ 
        animationDelay: `${150 * index}ms`,
      }}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm">
          {config.icon}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium">{config.label}</span>
          <span className="text-xs opacity-80">{username}</span>
        </div>
      </div>
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
        <ExternalLink className="h-4 w-4" />
      </div>
    </a>
  );
};

export default SocialLink;
