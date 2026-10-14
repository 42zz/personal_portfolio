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
    lead: '個人で作って公開しているアプリ。',
    works: [
      {
        id: 'inumemo',
        name: 'inumemo',
        url: 'https://inumemo.com/',
        tagline: '犬のことぜんぶ、ひとつの記録に。',
        description: [
          'ごはん・お薬・トイレ・散歩など、犬のお世話をワンタップで記録する iPhone アプリ。',
          '家族を招待すると、だれが・いつ・何をしたかを同じ画面で確認できる。',
          '散歩は GPS で道のりを残し、ウィジェットや Siri からも記録できる。',
        ],
        logo: '/logos/inumemo.png',
        platform: 'iPhone',
      },
    ],
  },
  {
    title: 'Prototypes',
    lead: '試作中のもの。',
    works: [
      {
        id: 'inkotto',
        name: 'inkotto',
        url: 'https://inkotto.42zz.net/',
        tagline: 'しゃべって、書く。',
        description: [
          'キーを押しながら話すと、Mac の中の Whisper で文字にして、カーソルのある入力欄に入れる音声入力アプリ。',
          '辞書と修正の学習、言いよどみの除去で、話した言葉がそのまま文章になる。',
          '標準の設定では、音声も文章も Mac の外へ送らない。',
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
          'メニューバーに常駐し、Zoom や Teams の会議をその場で文字起こしする Mac アプリ。',
          '相手の音声と自分のマイクを別々に聞き取り、話者ごとの文字にして、マークやメモを時刻の位置に並べる。',
          '文字起こしは Mac の中だけで動き、音声も文字も外へ送らない。',
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
    title: 'フリーランスとして Web 制作を始める',
    description: ['大学在学中に、Web サイトのコーディングと WordPress のテーマ開発を受託。'],
    tags: ['HTML/CSS', 'JavaScript', 'PHP', 'WordPress'],
  },
  {
    year: '2016',
    title: 'オーストラリアへ',
    description: [
      'メルボルンに拠点を移し、フリーランスの Web エンジニアとして活動。',
      '現地の音楽レーベルで、所属アーティスト向けの CMS とサイトテンプレートを開発。日英の通訳と翻訳も担当。',
      '現地で立ち上がった日本語 T シャツブランドに参画し、EC サイトの構築と運営、バックオフィスを担当。',
    ],
    tags: ['PHP', 'CodeIgniter', 'WordPress', 'WooCommerce'],
  },
  {
    year: '2017',
    title: 'SNS サービスの開発',
    description: ['帰国後、新規 SNS サービスの開発に参画。フロントエンドを担当。'],
    tags: ['Vue.js'],
  },
  {
    year: '2018',
    title: 'Web 制作・システム開発の会社を共同創業',
    description: [
      '取締役として、技術選定からインフラ構築まで開発全般を担当。',
      '外部パートナーを含む開発チームのディレクションと、経理などのバックオフィスも担う。',
    ],
    tags: ['React', 'Next.js', 'Vue', 'Nuxt', 'Node.js', 'Python', 'AWS'],
  },
  {
    year: '2020',
    title: 'Web 制作会社のテクニカルディレクター',
    description: ['業務委託で、WordPress テーマの開発と、海外の開発者と代表の間のやりとりを担当。'],
    tags: ['WordPress', 'English'],
  },
  {
    year: '2021',
    title: 'システム開発会社のテクニカルディレクター',
    description: [
      '業務委託で、Web 開発プロジェクトのプロジェクトマネージャーとディレクターを担当。',
      'ベトナムのオフショアチームとの橋渡し役として、要件の整理から進行管理までを受け持つ。',
      '上場不動産会社の自社 CRM 開発では、リードエンジニアを務める。',
    ],
    tags: ['PM', 'オフショア開発', 'CRM', 'TypeScript'],
  },
  {
    year: '2022',
    title: '輸入販売の会社を共同創業',
    description: [
      '取締役として、米国からの健康食品の輸入と総代理店事業を立ち上げ。',
      '自社 EC サイトの開発と保守、モール出店の管理、経理を担当。',
      '自由が丘の実店舗の立ち上げと運営管理にも携わる。',
    ],
    tags: ['EC', '輸入業務', '店舗運営'],
  },
  {
    year: '2025',
    title: 'AI を使ったサービスと、個人アプリの開発',
    description: [
      'AI を使った自社サービスの企画と開発に取り組む。',
      '個人でも iPhone / Mac アプリ(inumemo・inkotto・gijilog)を作り、公開している。',
    ],
    tags: ['Swift', 'SwiftUI', 'Cloudflare Workers', 'AI'],
  },
  {
    year: '2026',
    title: '飲食店向けの自社サービスを企画・開発',
    description: [
      '飲食店の集客を支える自社サービスの企画と開発に取り組む。',
      '店舗の Web サイトを手間なく用意できる仕組みと、来店のきっかけをつくる販促の仕組みを準備中。',
    ],
    tags: ['Next.js', 'Cloudflare', 'AI'],
  },
];

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
