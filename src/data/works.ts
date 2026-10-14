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
  /** 「2018〜」「2021〜2023」のような期間表示。未指定なら year を表示 */
  period?: string;
  /** どの立場での仕事か(自社 / 業務委託 / フリーランス / 個人開発 など) */
  affiliation: string;
  title: string;
  description: string[];
  skills?: string[];
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
    period: '2013〜',
    affiliation: 'フリーランス',
    title: 'フリーランスとして Web 制作を始める',
    description: ['大学在学中に、Web サイトのコーディングと WordPress のテーマ開発を受託。'],
    skills: ['HTML/CSS', 'JavaScript', 'PHP', 'WordPress'],
  },
  {
    year: '2016',
    period: '2016〜2017',
    affiliation: 'フリーランス / SM社・コンテンツマネージャー / SJ社・ディレクター',
    title: 'オーストラリアへ',
    description: [
      'メルボルン、ブリスベン、シドニー、アデレードと東海岸を中心に拠点を移しながら、フリーランスの Web エンジニアとして活動。',
      '現地の音楽レーベルで、所属アーティスト向けの CMS とサイトテンプレートを開発。日英の通訳と翻訳も担当。',
      '現地で立ち上がった日本語 T シャツブランドに参画し、EC サイトの構築と運営、バックオフィスを担当。',
    ],
    skills: ['PHP', 'CodeIgniter', 'WordPress', 'WooCommerce', 'English'],
  },
  {
    year: '2017',
    affiliation: '開発責任者',
    title: 'SNS サービスの開発責任者',
    description: [
      '帰国後、新規 SNS サービスの開発に開発責任者として参画。',
      '機能の要件定義などの上流工程から、デザイナーやバックエンドエンジニアとの連携、フロントエンドの実装までを担当。',
    ],
    skills: ['Vue.js', '要件定義', 'チーム連携'],
  },
  {
    year: '2018',
    period: '2018〜',
    affiliation: '株式会社Placia・取締役',
    title: '株式会社Placia を共同創業',
    description: [
      '取締役として、技術選定からインフラ構築まで開発全般を担当。',
      '外部パートナーを含む開発チームのディレクションと、経理などのバックオフィスも担う。',
      'Web 制作では、WordPress サイトの制作と開発進行を 2025 年まで継続して担当。',
    ],
    skills: ['React', 'Next.js', 'Vue', 'Nuxt', 'Node.js', 'Python', 'AWS', 'WordPress'],
  },
  {
    year: '2020',
    period: '2020〜2022',
    affiliation: 'B社・テクニカルディレクター',
    title: 'Web 制作会社のテクニカルディレクター',
    description: ['業務委託で、WordPress テーマの開発と、海外の開発者と代表の間のやりとりを担当。'],
    skills: ['WordPress', 'English'],
  },
  {
    year: '2021',
    period: '2021〜2023',
    affiliation: 'N社・テクニカルディレクター',
    title: 'システム開発会社のテクニカルディレクター',
    description: [
      '業務委託で、Web 開発プロジェクトのプロジェクトマネージャーとディレクターを担当。',
      'ベトナムのオフショアチームとの橋渡し役として、要件の整理から進行管理、開発ドキュメントや仕様書の整備までを受け持つ。',
      '上場不動産会社の自社 CRM 開発では、リードエンジニアを務める。',
    ],
    skills: ['Vue.js', 'TypeScript', 'PM', 'オフショア開発', 'ドキュメント整備'],
  },
  {
    year: '2022',
    period: '2022〜',
    affiliation: '株式会社沁透・取締役',
    title: '株式会社沁透を共同創業',
    description: [
      '取締役として、米国からの CBD オイルの輸入販売と総代理店事業を立ち上げ。',
      '自社 EC サイトの開発と保守、モール出店の管理、経理を担当。',
      '自由が丘の実店舗の立ち上げと運営管理にも携わる。',
    ],
    skills: ['EC', '輸入業務', '店舗運営'],
  },
  {
    year: '2022',
    affiliation: 'Placia・受託案件',
    title: 'コミュニティ型 Web サービスの受託開発',
    description: ['会員向け Web サービスを、要件定義・技術選定からフロントエンド・バックエンドの実装まで一人で担当。'],
    skills: ['要件定義', '技術選定', 'Nuxt.js', 'Laravel', 'Docker'],
  },
  {
    year: '2024',
    affiliation: 'Placia・受託案件',
    title: '会員制オンライン学習サービスの受託開発',
    description: ['動画や記事で学べる会員制の学習サービスを、要件定義・技術選定からフロントエンド・バックエンドの実装まで一人で担当。'],
    skills: ['要件定義', '技術選定', 'Next.js', 'NestJS', 'TypeScript'],
  },
  {
    year: '2025',
    affiliation: 'Placia・自社サービス / M社・エンジニア',
    title: 'AI を使った自社サービスの企画・開発',
    description: [
      '小規模事業者向けに、入力した事業情報から AI がマーケティング分析レポートを作るサービスを企画・開発。',
      '海外の組織開発コンサルティング会社で、社内プロジェクト管理ツールの開発に参画。',
    ],
    skills: ['Next.js', 'Supabase', 'Stripe', 'LLM', 'English'],
  },
  {
    year: '2026',
    period: '2026〜',
    affiliation: 'Placia・自社サービス / 個人開発',
    title: '飲食店向けの自社サービスと、個人アプリの開発',
    description: [
      '飲食店を起点に、小規模事業者がテンプレートと選択式の設定でホームページを作り、公開・運用できるサービスを開発。',
      'QR コードを起点に、アンケートとクーポンで来店を促す店舗向けの販促の仕組みも開発中。',
      '個人でも iPhone / Mac アプリを作り、公開している。',
    ],
    skills: ['React', 'TypeScript', 'Hono', 'Cloudflare Workers', 'PostgreSQL', 'Drizzle', 'Swift', 'SwiftUI'],
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
