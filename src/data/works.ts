export type Work = {
  id: string;
  name: string;
  url: string;
  tagline: string;
  description: string[];
  /** public/logos/ 配下の画像パス。未指定なら頭文字を表示 */
  logo?: string;
  /** 対応プラットフォームなどの短いラベル */
  platform?: string;
};

export type Section = {
  id: string;
  label: string;
  title: string;
  lead: string;
  works: Work[];
};

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
        tagline: '犬のことぜんぶ、ひとつの記録に。',
        description: [
          'ごはん・お薬・トイレ・散歩など、犬のお世話をワンタップで記録できる iPhone アプリです。',
          '家族を招待すれば、だれが・いつ・何をしたかが同じ画面で分かり、あげ忘れや二重にあげることを防げます。',
          '散歩は GPS で道のりや距離を残せて、ウィジェットや Siri からも記録できます。',
        ],
        logo: '/logos/inumemo.png',
        platform: 'iPhone',
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
        tagline: 'しゃべって、書く。',
        description: [
          'キーを押しながら話すと、Mac の中の Whisper で文字にして、カーソルのある入力欄にそのまま入れる音声入力アプリです。',
          '辞書と修正の学習、「えーと」などの言いよどみの除去で、話した言葉がそのまま使える文章になります。',
          '標準設定では音声も文章も Mac の外へ送らず、メニューバーから履歴や辞書を扱えます。',
        ],
        logo: '/logos/inkotto.png',
        platform: 'macOS',
      },
      {
        id: 'gijilog',
        name: 'gijilog',
        url: 'https://gijilog.42zz.net/',
        tagline: '会議を録って、根拠ごと残す。',
        description: [
          'メニューバーに常駐し、Zoom や Teams の会議をその場で文字起こしする Mac アプリです。',
          '相手の音声と自分のマイクを別々に聞き取り、話者ごとの文字にして、重要・決定などのマークやメモを時刻の位置に並べます。',
          '文字起こしは Mac の中だけで動き、音声も文字も外部へ送りません。',
        ],
        logo: '/logos/gijilog.png',
        platform: 'macOS',
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
