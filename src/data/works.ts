export type Work = {
  id: string;
  name: string;
  url: string;
  tagline: string;
  description: string[];
  /** public/logos/ 配下の画像パス。未指定なら頭文字を表示 */
  logo?: string;
};

export type Section = {
  id: string;
  label: string;
  title: string;
  lead: string;
  works: Work[];
};

// TODO: 説明文は仮置きです。実際のサービス内容に合わせて書き換えてください。
export const sections: Section[] = [
  {
    id: 'apps',
    label: 'Apps',
    title: 'Apps',
    lead: '自作のアプリやツールを公開しています。',
    works: [
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
        logo: '/logos/inumemo.png',
      },
    ],
  },
  {
    id: 'prototypes',
    label: 'Prototypes',
    title: 'Prototypes',
    lead: '試作中のものを公開しています。',
    works: [
      {
        id: 'inkotto',
        name: 'inkotto',
        url: 'https://inkotto.42zz.net/',
        tagline: '',
        description: ['（説明文を入力してください）'],
        logo: '/logos/inkotto.png',
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
        logo: '/logos/gijilog.png',
      },
    ],
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
