import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export type NavItem = { id: string; label: string };

const Nav: React.FC<{ items: NavItem[] }> = ({ items }) => {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => !!el);
    // 画面の中央付近(上から45%の位置)を横切っているセクションをアクティブにする。
    // 画面より長いセクションでも正しく判定できる。
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        if (hit) setActive(hit.target.id);
      },
      { root: document.querySelector('main'), rootMargin: '-45% 0px -55% 0px', threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <ul className="flex items-center gap-1 rounded-full glass-effect px-1.5 py-1.5 shadow-sm">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                'block rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors',
                active === item.id
                  ? 'bg-foreground text-background'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
