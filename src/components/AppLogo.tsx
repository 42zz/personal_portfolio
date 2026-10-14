import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const AppLogo: React.FC<{ name: string; src?: string; className?: string }> = ({ name, src, className }) => {
  const [failed, setFailed] = useState(false);
  const base = 'h-14 w-14 shrink-0 rounded-2xl ring-1 ring-black/5 shadow-sm overflow-hidden';
  if (src && !failed) {
    return (
      <img
        src={src}
        alt={`${name} logo`}
        onError={() => setFailed(true)}
        className={cn(base, 'bg-white object-cover', className)}
      />
    );
  }
  return (
    <div
      aria-hidden="true"
      className={cn(
        base,
        'flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-600 text-white text-xl font-bold',
        className,
      )}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
};

export default AppLogo;
