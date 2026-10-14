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

export type CareerEntry = {
  year: string;
  title: string;
  description: string[];
  tags?: string[];
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

export const career: CareerEntry[] = [
  {
    year: '2013',
    title: 'フリーランス Web エンジニアとして活動開始',
    description: [
      '大学在学中に Web 制作のコーディングや WordPress のテーマ開発を受託。',
      '低予算・短納期の案件を数多くこなし、継続して依頼をもらえる関係を築く。',
    ],
    tags: ['HTML/CSS', 'JavaScript', 'PHP', 'WordPress'],
  },
  {
    year: '2016',
    title: 'ワーキングホリデーでオーストラリアへ',
    description: [
      'メルボルンを拠点にフリーランス Web エンジニアとして活動。',
      '現地の音楽レーベルで、所属アーティスト向け CMS とサイトテンプレートを開発。日英の通訳・翻訳も担当。',
      '現地で立ち上がった日本語 T シャツブランドに参画し、EC サイトの構築と運営、バックオフィスを担当。',
    ],
    tags: ['PHP', 'CodeIgniter', 'WordPress', 'WooCommerce'],
  },
  {
    year: '2017',
    title: '暗号通貨ユーザー向け SNS の開発',
    description: ['帰国後、暗号通貨ユーザー向け SNS の開発事業に参画し、フロントエンドを担当。'],
    tags: ['Vue.js'],
  },
  {
    year: '2018',
    title: 'Web 制作・システム開発会社を共同創業、取締役に就任',
    description: [
      '技術選定からインフラ構築までフルスタック開発の責任者として事業を牽引。',
      '外部パートナーを含む開発チームのディレクションと人材育成、経理などバックオフィスも担当。',
    ],
    tags: ['React', 'Next.js', 'Vue', 'Nuxt', 'Node.js', 'Python', 'AWS'],
  },
  {
    year: '2020',
    title: 'Web 制作会社のテクニカルディレクター(業務委託)',
    description: ['オリジナル WordPress テーマの開発と、海外開発者と代表のコミュニケーション仲介を担当。'],
    tags: ['WordPress', 'English'],
  },
  {
    year: '2021',
    title: 'システム開発会社のテクニカルディレクター(業務委託)',
    description: [
      'プロジェクトマネージャー兼ディレクターとして Web 開発プロジェクトを主導。',
      'プライム上場の不動産会社向け自社 CRM ツール開発で、リードエンジニアを務める。',
    ],
    tags: ['PM', 'CRM', 'TypeScript'],
  },
  {
    year: '2022',
    title: '輸入販売会社を共同創業、取締役に就任',
    description: [
      '米国からの CBD オイル輸入と総代理店事業を立ち上げ。',
      '自社 EC サイトの開発・保守、モール出店の管理、経理と業務効率化を担当。',
    ],
    tags: ['EC', '輸入業務'],
  },
  {
    year: '2025',
    title: 'AI を活用した自社サービスと個人アプリの開発',
    description: [
      'AI を活用した自社サービスの企画・開発に取り組む。',
      '個人でも iPhone / Mac アプリ(inumemo・inkotto・gijilog)を開発し、公開している。',
    ],
    tags: ['Swift', 'SwiftUI', 'Cloudflare Workers', 'AI'],
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
