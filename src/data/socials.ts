export type Social = {
  platform: 'x' | 'github' | 'facebook';
  url: string;
  note?: string;
};

export const socials: Social[] = [
  { platform: 'x', url: 'https://x.com/42zz' },
  { platform: 'github', url: 'https://github.com/42zz' },
  { platform: 'facebook', url: 'https://facebook.com/m42zz' },
];
