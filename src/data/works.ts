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

export type CareerRole = {
  /** 所属(例: 株式会社Placia)。フリーランスなど所属がない場合は肩書をここに書く */
  org: string;
  /** 肩書(例: 取締役) */
  position?: string;
  /** その肩書での担当内容 */
  lines: string[];
};

export type CareerEntry = {
  year: string;
  /** 「2018〜」「2021〜2023」のような期間表示。未指定なら year を表示 */
  period?: string;
  title: string;
  roles: CareerRole[];
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
    period: '2013〜2022',
    title: 'フリーランスとして Web 制作を始める',
    roles: [
      {
        org: 'フリーランス',
        lines: [
          '大学在学中に、Web サイトのコーディングと WordPress のテーマ開発を受託。',
          'その後も 2022 年まで、サイト制作のほか、技術面のディレクションやプロジェクト管理、SNS 分析レポートの作成、日英の翻訳・通訳を請け負う。',
        ],
      },
    ],
    skills: ['HTML/CSS', 'JavaScript', 'PHP', 'WordPress', 'English'],
  },
  {
    year: '2016',
    period: '2016〜2017',
    title: 'オーストラリアへ',
    roles: [
      {
        org: 'フリーランス',
        lines: ['メルボルン、ブリスベン、シドニー、アデレードと東海岸を中心に拠点を移しながら、Web エンジニアとして活動。'],
      },
      {
        org: 'SM社', position: 'デジタルコンテンツマネージャー',
        lines: [
          '現地の音楽レーベルで、Web とデジタルプラットフォームのコンテンツ管理を担当。所属アーティストとエージェンシーのサイトを構築。',
          '現地プロデューサーと日本人アーティストの間の通訳・翻訳も担う。',
        ],
      },
      {
        org: 'K社', position: 'Web ディレクター',
        lines: [
          '日本人クリエイターがデザインする漢字 T シャツブランドの立ち上げに参画し、海外向け EC サイトを WooCommerce で構築・運用。',
          'ブランド戦略、在庫管理の仕組みづくり、チーム運営とバックオフィスも担当。',
        ],
      },
    ],
    skills: ['PHP', 'CodeIgniter', 'WordPress', 'WooCommerce', 'English'],
  },
  {
    year: '2017',
    title: 'SNS サービスの開発責任者',
    roles: [
      {
        org: '開発責任者',
        lines: [
          '帰国後、新規 SNS サービスの開発に開発責任者として参画。',
          '機能の要件定義などの上流工程から、デザイナーやバックエンドエンジニアとの連携、フロントエンドの実装までを担当。',
        ],
      },
    ],
    skills: ['Vue.js', '要件定義'],
  },
  {
    year: '2018',
    period: '2018〜',
    title: '株式会社Placia を共同創業',
    roles: [
      {
        org: '株式会社Placia', position: '取締役',
        lines: [
          '取締役として社内業務と Web 開発を統括。クライアントの要件をもとに Web プロジェクトの定義・開発・公開を行う。',
          '外部パートナーを含むチームのマネジメントと社内のコミュニケーション、仕様書や技術ドキュメントの作成を担当。',
          '経理と事業計画の策定、ファイル・文書管理による組織運営も担う。',
          'Web 制作では、WordPress サイトの制作と開発進行を 2025 年まで継続して担当。',
        ],
      },
    ],
    skills: ['TypeScript', 'React', 'Next.js', 'NestJS', 'Vue.js', 'Nuxt', 'PHP', 'Laravel', 'WordPress', 'Shopify', 'AWS'],
  },
  {
    year: '2020',
    period: '2020〜2022',
    title: 'Web 制作会社のテクニカルディレクター',
    roles: [
      {
        org: 'B社', position: 'テクニカルディレクター',
        lines: [
          '業務委託で、WordPress を中心とした Web 制作案件の開発を担当。',
          '技術面のディレクションと助言、海外の開発者と経営層の間のコミュニケーションを担う。',
        ],
      },
    ],
    skills: ['WordPress', 'English'],
  },
  {
    year: '2021',
    period: '2021〜2023',
    title: 'システム開発会社のテクニカルディレクター',
    roles: [
      {
        org: 'N社', position: 'テクニカルディレクター',
        lines: [
          '業務委託で、Web 開発プロジェクトのプロジェクトマネージャーとディレクターを担当。クライアントと要件を詰め、ドキュメント化する。',
          'ベトナムのオフショアチームとの橋渡し役として、ワークフローと進行の管理、技術ドキュメントや仕様書の整備を受け持つ。',
          '大手不動産会社の自社 CRM 開発では、リードエンジニアを務める。',
        ],
      },
    ],
    skills: ['Vue.js', 'TypeScript', 'オフショア開発', 'ドキュメント整備'],
  },
  {
    year: '2022',
    period: '2022〜',
    title: '株式会社沁透を共同創業',
    roles: [
      {
        org: '株式会社沁透', position: '取締役',
        lines: [
          '米国からの CBD オイルの輸入販売と総代理店事業を立ち上げ。輸入業務と関連書類の管理を担当。',
          'Shopify による自社 EC サイトの構築と運用、モール出店の管理、経理や文書管理などのバックオフィスを担う。',
          '自由が丘の実店舗の立ち上げと運営管理にも携わる。',
        ],
      },
    ],
    skills: ['Shopify', 'EC', '輸入業務', '店舗運営'],
  },
  {
    year: '2022',
    title: 'コミュニティ型 Web サービスの受託開発',
    roles: [
      {
        org: 'Placia', position: '受託案件',
        lines: ['会員向け Web サービスを、要件定義・技術選定からフロントエンド・バックエンドの実装まで一人で担当。'],
      },
    ],
    skills: ['要件定義', '技術選定', 'Nuxt', 'Laravel', 'Docker'],
  },
  {
    year: '2024',
    title: '会員制オンライン学習サービスの受託開発',
    roles: [
      {
        org: 'Placia', position: '受託案件',
        lines: ['動画や記事で学べる会員制の学習サービスを、要件定義・技術選定からフロントエンド・バックエンドの実装まで一人で担当。'],
      },
    ],
    skills: ['要件定義', '技術選定', 'Next.js', 'NestJS', 'TypeScript'],
  },
  {
    year: '2025',
    title: 'AI を使った自社サービスの企画・開発',
    roles: [
      {
        org: 'Placia', position: '自社サービス',
        lines: ['小規模事業者向けに、入力した事業情報から AI がマーケティング分析レポートを作るサービスを企画・開発。'],
      },
      {
        org: 'M社', position: 'エンジニア',
        lines: ['海外の組織開発コンサルティング会社で、社内プロジェクト管理ツールの開発に参画。'],
      },
    ],
    skills: ['Next.js', 'Supabase', 'Stripe', 'English'],
  },
  {
    year: '2026',
    period: '2026〜',
    title: '飲食店向けの自社サービスと、個人アプリの開発',
    roles: [
      {
        org: 'Placia', position: '自社サービス',
        lines: [
          '飲食店を起点に、小規模事業者がテンプレートと選択式の設定でホームページを作り、公開・運用できるサービスを開発。',
          'QR コードを起点に、アンケートとクーポンで来店を促す店舗向けの販促の仕組みも開発中。',
        ],
      },
      { org: '個人開発', lines: ['iPhone / Mac アプリを作り、公開している。'] },
    ],
    skills: ['React', 'TypeScript', 'Hono', 'Cloudflare Workers', 'PostgreSQL', 'Drizzle ORM', 'Swift', 'SwiftUI'],
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
