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

export type WorkGroup = {
  title: string;
  lead: string;
  works: Work[];
};

export type Project = {
  name: string;
  period: string;
  role: string;
  description: string;
  url?: string;
};

export const workGroups: WorkGroup[] = [
  {
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

// TODO: 過去の実績は仮のエントリです。実際の内容に書き換えてください。
export const projects: Project[] = [
  {
    name: 'プロジェクト名',
    period: '2024',
    role: '企画・設計・開発',
    description: 'どんな課題に対して、何を作り、どんな成果があったかを1〜2文で。',
  },
  {
    name: 'プロジェクト名',
    period: '2023',
    role: 'フロントエンド開発',
    description: 'どんな課題に対して、何を作り、どんな成果があったかを1〜2文で。',
    url: 'https://example.com/',
  },
  {
    name: 'プロジェクト名',
    period: '2022',
    role: '開発',
    description: 'どんな課題に対して、何を作り、どんな成果があったかを1〜2文で。',
  },
];

export type Social = {
  platform: 'x' | 'github' | 'facebook';
  url: string;
  note?: string;
};

export const socials: Social[] = [
  { platform: 'x', url: 'https://x.com/42zz', note: '開発のつぶやき・お知らせ' },
  { platform: 'github', url: 'https://github.com/42zz', note: 'ソースコード' },
  { platform: 'facebook', url: 'https://facebook.com/m42zz' },
];
