export type WorkStatus = 'released' | 'prototype';

export type Work = {
  name: string;
  url: string;
  description: string;
  status: WorkStatus;
  tags?: string[];
};

// TODO: 各サービスの説明文は仮置き。実際の内容に合わせて書き換えてください。
export const works: Work[] = [
  {
    name: 'inumemo',
    url: 'https://inumemo.com/',
    description: '愛犬の日々の記録を残すためのメモアプリ。',
    status: 'released',
    tags: ['Web App'],
  },
  {
    name: 'inkotto',
    url: 'https://inkotto.42zz.net/',
    description: '開発中の試作品。',
    status: 'prototype',
    tags: ['Prototype'],
  },
  {
    name: 'gijilog',
    url: 'https://gijilog.42zz.net/',
    description: '議事録を手早く残すためのログツール。開発中の試作品。',
    status: 'prototype',
    tags: ['Prototype'],
  },
];

export type Social = {
  platform: 'x' | 'github';
  username: string;
};

export const socials: Social[] = [
  { platform: 'x', username: '42zz' },
  { platform: 'github', username: '42zz' },
];
