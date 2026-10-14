export type WorkStatus = 'released' | 'prototype';

export type Work = {
  id: string;
  name: string;
  url: string;
  tagline: string;
  description: string[];
  status: WorkStatus;
};

// TODO: 説明文は仮置きです。実際のサービス内容に合わせて書き換えてください。
export const works: Work[] = [
  {
    id: 'inumemo',
    name: 'inumemo',
    url: 'https://inumemo.com/',
    tagline: '愛犬との毎日を、さっと記録。',
    description: [
      '愛犬の食事・散歩・体調などを手軽にメモできる記録アプリです。',
      'その日の様子を数タップで残せるので、忙しい日でも続けられます。',
      '記録はカレンダーで振り返ることができ、通院時の共有にも役立ちます。',
    ],
    status: 'released',
  },
  {
    id: 'inkotto',
    name: 'inkotto',
    url: 'https://inkotto.42zz.net/',
    tagline: '小さな思いつきを、こっそり貯める。',
    description: [
      'ふと浮かんだアイデアやメモを、気負わずに書き留めておける場所です。',
      '余計な機能を削ぎ落とし、書くことだけに集中できる画面にしています。',
      '貯めたメモはあとから見返して、次の制作のタネにできます。',
    ],
    status: 'prototype',
  },
  {
    id: 'gijilog',
    name: 'gijilog',
    url: 'https://gijilog.42zz.net/',
    tagline: '会議の記録を、その場で残す。',
    description: [
      '会議中の発言や決定事項を、時系列のログとして素早く記録できるツールです。',
      '話しながらでも入力しやすいシンプルな画面で、議事録づくりの手間を減らします。',
      '残したログはそのまま共有でき、あとからの振り返りにも使えます。',
    ],
    status: 'prototype',
  },
];

export type Social = {
  platform: 'x' | 'github';
  url: string;
};

export const socials: Social[] = [
  { platform: 'x', url: 'https://x.com/42zz' },
  { platform: 'github', url: 'https://github.com/42zz' },
];
