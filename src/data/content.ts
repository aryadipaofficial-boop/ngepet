import { CurriculumLevel, Testimonial, FaqItem } from '../types';

export const COMMUNITY_STATS = [
  { value: '14,280+', label: 'Warga Terdaftar', context: 'Rebahan aktif di 34 provinsi' },
  { value: 'Rp 8.4 M', label: 'Estimasi Cuan Terakumulasi', context: 'Berdasarkan showcase warga 2025-2026' },
  { value: '98.4%', label: 'Tingkat Kepuasan Warga', context: 'Dari 3.200 ulasan komunitas' },
  { value: '0', label: 'Tumbal Nyawa', context: '100% Halal, legal, & edukasi bisnis' },
];

export const BENEFITS = [
  {
    id: 'tanpa-tumbal',
    title: 'Tanpa Tumbal (Organik & Ads)',
    description: 'Belajar mendatangkan ribuan trafik tertarget tanpa harus mengorbankan waktu tidur, reputasi, apalagi ayam cemani. Fokus pada Meta Ads, TikTok Ads, dan SEO organik.',
    badge: 'Trafik Berkelanjutan',
    iconName: 'Flame',
    color: 'emerald',
  },
  {
    id: 'khodam-ai',
    title: 'Dibantu Khodam AI Modern',
    description: 'Bongkar prompt rahasia ChatGPT, Claude, Midjourney, dan Make.com untuk menulis copywriting, riset produk winning, hingga otomatisasi CS 24/7 tanpa cape.',
    badge: 'Otomatisasi 10x',
    iconName: 'Cpu',
    color: 'emerald',
  },
  {
    id: 'anti-gaptek',
    title: 'Bahasa Tongkrongan Anti Gaptek',
    description: 'Gak ada istilah teknis njelimet yang bikin pening. Penjelasan langkah-demi-langkah dengan analogi receh yang bahkan emak-emak dan kakek-kakek pun langsung paham.',
    badge: 'Ramah Pemula',
    iconName: 'Users',
    color: 'red',
  },
  {
    id: 'lilin-anti-padam',
    title: 'Server Lilin Virtual 24 Jam',
    description: 'Sistem landing page dan email automation yang bekerja saat kamu tidur. Begitu bangun pagi, notifikasi transferan bank dan invoice Shopee sudah menumpuk.',
    badge: 'Rebahan Elit',
    iconName: 'Zap',
    color: 'emerald',
  },
];

export const CURRICULUM_DATA: CurriculumLevel[] = [
  {
    id: 'jin-lampu-kuning',
    name: 'Tingkat 1: Jin Lampu Kuning',
    alias: 'Kitab Pemula',
    badge: 'Pemula Nol Puter',
    targetAudience: 'Untuk yang baru mau mulai, gaptek, atau belum pernah pecah telur online',
    description: 'Fondasi dasar digital marketing tanpa modal gede. Membongkar cara jualan online, merapikan profil media sosial agar dipercaya, dan menulis kata-kata yang bikin pembeli rebutan transfer.',
    duration: '3 Minggu (12 Pertemuan)',
    modulesCount: 4,
    highlightTool: 'ChatGPT Free + Canva + CapCut',
    modules: [
      {
        title: 'Modul 01: Cuci Otak Mindset Cuan',
        description: 'Membongkar cara kerja internet money, membongkar mitos cepat kaya, dan memilih model bisnis: Affiliate vs Dropship vs Jasa.',
        lessons: [
          'Membedakan bisnis riil vs skema tipu-tipu di internet',
          'Riset produk yang dicari orang bukan yang kita sukai semata',
          'Menyiapkan rekening khusus penampung cuan biar gak campur uang dapur',
        ],
        deliverable: 'Peta jalan bisnis 30 hari pertama',
      },
      {
        title: 'Modul 02: Bedah Mantra Copywriting Hipnotis',
        description: 'Menulis teks penawaran yang menyengat emosi pembeli dengan formula PAS (Problem, Agitate, Solution) dibantu template Khodam AI.',
        lessons: [
          'Teknik Headline Hook 3 Detik pertama yang anti-skip',
          'Prompt generator ChatGPT untuk nulis 10 caption jualan dalam 2 menit',
          'Call to Action (CTA) yang bikin calon buyer gak mikir dua kali',
        ],
        deliverable: '15 Bank naskah caption jualan siap posting',
      },
      {
        title: 'Modul 03: Makeover Profil Media Sosial',
        description: 'Menyulap akun TikTok dan Instagram biasa jadi etalase toko digital profesional dengan bio tajam dan link bio terstruktur.',
        lessons: [
          'Formula bio 3 baris: Siapa kamu, apa untungnya buat buyer, klik mana',
          'Desain banner & highlight story dengan Canva tanpa jago desain',
          'Setup linktree/msha.ke untuk katalog produk kilat',
        ],
        deliverable: 'Akun TikTok & IG yang siap konversi',
      },
      {
        title: 'Modul 04: Ritual Pecah Telur Pertama',
        description: 'Eksekusi jualan produk affiliate Shopee/TikTok Shop dengan strategi konten organik tanpa bayar iklan sepeser pun.',
        lessons: [
          'Cara comot sampel gratisan dari supplier untuk konten unboxing',
          'Struktur video 15 detik yang disukai algoritma FYP',
          'Etika membalas komentar buyer agar menjadi repeat order',
        ],
        deliverable: 'Komisi pertama masuk ke rekening',
      },
    ],
  },
  {
    id: 'dukun-trafik',
    name: 'Tingkat 2: Dukun Trafik',
    alias: 'Kitab Menengah',
    badge: 'Praktisi Berkembang',
    targetAudience: 'Sudah pernah jualan tapi omset mandek, ingin kuasai Meta Ads & TikTok Ads',
    description: 'Mendatangkan banjir pengunjung tertarget ke toko online kamu. Belajar strategi paid ads yang anti-boncos, optimasi ranking Google SEO, dan membaca data matriks seperti dukun membaca garis tangan.',
    duration: '4 Minggu (16 Pertemuan)',
    modulesCount: 4,
    highlightTool: 'Meta Ads Manager + TikTok Ads + Google Search Console',
    modules: [
      {
        title: 'Modul 01: Meta Ads & Facebook Ads Anti Boncos',
        description: 'Struktur campaign CBO (Campaign Budget Optimization), split testing kreatif, dan setup pixel/CAPI standar 2026.',
        lessons: [
          'Framework riset audiens: Broad vs Lookalike vs Interest targeting',
          'Metrik wajib dibaca: CPR, CTR link, ROAS, dan Frequency',
          'Aturan golden rule: Kapan harus matikan adset dan kapan harus scale budget',
        ],
        deliverable: '1 Live Campaign Meta Ads dengan ROAS positif',
      },
      {
        title: 'Modul 02: Menguasai Badai TikTok Ads & Spark Ads',
        description: 'Mengendarai tren video pendek dan memanfaatkan Spark Ads untuk mendongkrak penjualan dengan biaya per klik termurah.',
        lessons: [
          'Membuat Hook UGC (User Generated Content) dengan biaya minim',
          'Setup TikTok Shop Ads & GMV Max targeting',
          'Menghindari suspend akun iklan dan trik banding cepat',
        ],
        deliverable: 'Video kreatif ads berdaya konversi tinggi',
      },
      {
        title: 'Modul 03: Optimasi SEO Organik & Google Cuan',
        description: 'Membuat halaman artikel dan produk nangkring di halaman 1 Google tanpa harus bayar biaya per klik selamanya.',
        lessons: [
          'Riset keyword buyer intent dengan volume pencarian stabil',
          'Optimasi On-page SEO: Title, Meta, Heading, dan Speed score',
          'Strategi internal link yang disukai robot Google',
        ],
        deliverable: 'Halaman web terindeks di page 1 Google',
      },
      {
        title: 'Modul 04: Arsitektur Landing Page Hypnoselling',
        description: 'Membangun landing page 1 halaman dengan kecepatan muat di bawah 1 detik dan tingkat konversi di atas 15%.',
        lessons: [
          'Anatomi landing page pemenang: Hero, Proof, Benefit, FAQ, Urgency',
          'Setup checkout cepat via WhatsApp redirect & payment gateway',
          'Heatmap tracking: Melihat kemana kursor pembeli bergerak',
        ],
        deliverable: 'Landing page live siap terima orderan masal',
      },
    ],
  },
  {
    id: 'master-pesugihan',
    name: 'Tingkat 3: Master Pesugihan',
    alias: 'Kitab Mahir',
    badge: 'Scale Up & Otomasi',
    targetAudience: 'Pemilik brand, agen, dan affiliate master yang ingin omset 100jt+ tanpa begadang',
    description: 'Level pamungkas: Membangun sistem yang berjalan sendiri menggunakan multi-agent AI, integrasi workflow Make/Zapier, funnel multi-layer, dan delegasi tim agar kamu benar-benar bisa rebahan elit.',
    duration: '6 Minggu (24 Pertemuan + Mentoring Eksklusif)',
    modulesCount: 4,
    highlightTool: 'Make.com + Claude 3.7 + Custom AI Agents + CRM Funnel',
    modules: [
      {
        title: 'Modul 01: Ekosistem AI Full Automation',
        description: 'Menghubungkan AI ke WhatsApp, database spreadsheet, dan media sosial agar bekerja secara otonom 24/7.',
        lessons: [
          'Membangun CS WhatsApp berbasis AI yang bisa jawab produk dan kirim invoice',
          'Otomatisasi pembuatan konten video AI dari teks skrip sampai render otomatis',
          'Auto-scraping tren produk winning dari marketplace global',
        ],
        deliverable: 'Robot bot AI mandiri yang melayani customer',
      },
      {
        title: 'Modul 02: Infinite Sales Funnel & Value Ladder',
        description: 'Merancang perjalanan pelanggan dari produk gratis (Lead Magnet), Tripwire murah, hingga penawaran High-Ticket bernilai jutaan.',
        lessons: [
          'Merancang email marketing automation sequence 14 hari',
          'Upsell & Downsell one-click di halaman thank you page',
          'Meningkatkan Customer Lifetime Value (LTV) hingga 3x lipat',
        ],
        deliverable: 'Funnel penjualan 3 lapis aktif',
      },
      {
        title: 'Modul 03: Scale Budget dari 1 Juta ke 50 Juta/Hari',
        description: 'Seni scaling iklan tanpa bikin ROAS anjlok: Horisontal vs Vertikal scaling, dan diversifikasi multi-channel ads.',
        lessons: [
          'Surfing budget: Naik turunkan anggaran berdasarkan jam ramai buyer',
          'Mengelola cadangan akun Business Manager (BM) anti kiamat akun',
          'Hedging risiko trafik dengan kombinasi Organic + Ads + Retargeting',
        ],
        deliverable: 'Strategi scale-up teruji tahan banting',
      },
      {
        title: 'Modul 04: Sistemasi Bisnis & Delegasi Lilin',
        description: 'Merekrut dan melatih tim remote (CS, Advertiser, Content Creator) sehingga operasional bisnis tidak bergantung pada kehadiranmu.',
        lessons: [
          'Standard Operating Procedure (SOP) harian berbasis checklist Notion',
          'Key Performance Indicator (KPI) sederhana untuk staf digital',
          'Exit plan: Menikmati kebebasan waktu sejati sebagai owner',
        ],
        deliverable: 'SOP lengkap bisnis autopilot',
      },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Budi Santoso',
    role: 'Warga RT 02 / Mantan Karyawan Pabrik',
    location: 'Surabaya, Jawa Timur',
    quote: 'Sejak gabung Padepokan, tetangga makin curiga saya miara tuyul. Tiap hari di rumah pake sarung tapi paket ekspedisi kurir datang 4 karung sehari. Padahal cuma main TikTok Ads & produk herbal winning. Terima kasih wejangan Kitab Sakti!',
    category: 'tiktok',
    metric: 'Rp 64.200.000',
    metricLabel: 'Omset Bersih Bulan Lalu',
    avatarText: 'BS',
  },
  {
    id: 'testi-2',
    name: 'Rian Pratama',
    role: 'Warga Blok C / Full Time Rebahan',
    location: 'Bandung, Jawa Barat',
    quote: 'Dulu dikira pengangguran karena tiap siang cuma nongkrong di teras sambil ngopi. Sekarang kebeli Honda HR-V cash dari komisi Shopee Affiliate dan otomasi konten AI. Khodam AI Claude bener-bener kayak asisten pribadi yang gak pernah ngeluh lembur.',
    category: 'affiliate',
    metric: '+380%',
    metricLabel: 'Kenaikan Komisi Bulanan',
    avatarText: 'RP',
  },
  {
    id: 'testi-3',
    name: 'Siti Rahma',
    role: 'Ibu Rumah Tangga 2 Anak',
    location: 'Yogyakarta',
    quote: 'Emak saya sempet manggil ustadz buat rukiah kamar saya, gara-gara sering liat grafik hijau naik terus di laptop tengah malam. Pas saya kasih jatah bulanan 10 juta dari jualan skincare via landing page, sekarang emak yang paling rajin bawain kopi pas saya jaga lilin!',
    category: 'funnel',
    metric: '1.240 Order',
    metricLabel: 'Tembus dalam 14 Hari',
    avatarText: 'SR',
  },
  {
    id: 'testi-4',
    name: 'Hendra "Mbah Google" Wijaya',
    role: 'Digital Nomad & Praktisi SEO',
    location: 'Denpasar, Bali',
    quote: 'Gak ada komunitas digital yang se-jujur dan se-kompak Ngepet Online. Gak ada yang jual ludah atau screenshot editan. Semua materinya daging, studi kasusnya riil, dan diskusinya santai kayak di pos ronda tapi isinya insight jutaan rupiah.',
    category: 'ai',
    metric: 'Page #1 Google',
    metricLabel: 'Untuk 42 Keyword Buying',
    avatarText: 'HW',
  },
  {
    id: 'testi-5',
    name: 'Agus Purnomo',
    role: 'Ex-Ojol Driver',
    location: 'Bekasi, Jawa Barat',
    quote: 'Modal HP second dan kuota 50 ribuan, ikut kelas Jin Lampu Kuning. Diajarin cara bikin video affiliate yang nancep di hati orang. Sekarang udah bisa sewa ruko kecil buat stok barang dropship. Gak harus pintar, yang penting beneran mau praktek!',
    category: 'affiliate',
    metric: 'Rp 18.500.000',
    metricLabel: 'Profit Bulan ke-3',
    avatarText: 'AP',
  },
  {
    id: 'testi-6',
    name: 'Dewi Lestari',
    role: 'Owner Brand Fashion Muslimah',
    location: 'Solo, Jawa Tengah',
    quote: 'Sebelum masuk padepokan, boncos iklan Facebook sampai 15 juta. Begitu diajarin teknik split testing dan copywriting di level Dukun Trafik, ROAS langsung stabil di 4.8x. Rasanya pengen sungkem sama para sepuh padepokan.',
    category: 'tiktok',
    metric: 'ROAS 4.8x',
    metricLabel: 'Efisiensi Iklan Meta',
    avatarText: 'DL',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'umum',
    question: 'Apakah ini beneran pesugihan atau ilmu hitam musyrik?',
    answer: 'TENTU SAJA BUKAN! Nama "Ngepet Online" adalah satire dan parodi positif terhadap stigma tetangga di Indonesia yang menganggap orang yang diam di rumah di depan laptop itu memelihara siluman. Seluruh materi di padepokan adalah 100% edukasi bisnis legal, digital marketing, analitik data, dan pemanfaatan Artificial Intelligence (AI). Tanpa dupa, tanpa sesajen, dan tanpa tumbal.',
  },
  {
    id: 'faq-2',
    category: 'biaya',
    question: 'Berapa biaya gabung di Padepokan Ngepet Online?',
    answer: 'Akses masuk grup diskusi komunitas dan materi dasar tingkat Jin Lampu Kuning adalah GRATIS (100% tanpa biaya). Kami juga memiliki workshop intensif dan mentoring berbayar bergaransi untuk tingkat mahir bagi warga yang ingin pendampingan private scale-up bisnis.',
  },
  {
    id: 'faq-3',
    category: 'teknis',
    question: 'Saya gaptek dan cuma punya HP kentang, apakah bisa ikut belajar?',
    answer: 'Sangat bisa! Sesuai tagline kami: "Gak Harus Pintar, Yang Penting Mau Belajar". Materi tingkat Jin Lampu Kuning dirancang ramah smartphone Android/iPhone biasa. Kamu tidak butuh laptop spek dewa untuk mulai riset produk, bikin konten affiliate, atau pakai AI.',
  },
  {
    id: 'faq-4',
    category: 'materi',
    question: 'Berapa lama rata-rata warga baru bisa pecah telur dan ngerasain transferan?',
    answer: 'Tergantung kedisiplinan eksekusi. Warga yang langsung mempraktikkan modul copywriting dan riset affiliate rata-rata menghasilkan pesanan pertama dalam kurun waktu 7 hingga 21 hari sejak bergabung.',
  },
  {
    id: 'faq-5',
    category: 'umum',
    question: 'Apakah ada jaminan pasti kaya raya jika bergabung?',
    answer: 'Tidak ada bisnis halal di dunia ini yang menjamin kaya raya tanpa usaha. Kami tidak menjual mimpi instan atau janji surga. Yang kami sediakan adalah peta jalan teruji, kurikulum taktis, tools AI siap pakai, dan komunitas pendukung yang siap membantu saat kamu menemui kendala.',
  },
  {
    id: 'faq-6',
    category: 'materi',
    question: 'Tools AI apa saja yang akan dipelajari di padepokan?',
    answer: 'Kami mengupas tuntas penggunaan ChatGPT dan Claude untuk riset dan naskah penjualan, Midjourney untuk visual kreatif komersial, ElevenLabs untuk voiceover video, CapCut AI untuk editing kilat, serta Make.com untuk otomatisasi sistem CS dan pesanan.',
  },
  {
    id: 'faq-7',
    category: 'teknis',
    question: 'Bagaimana cara berkonsultasi jika saya bingung di tengah jalan?',
    answer: 'Setiap warga padepokan mendapatkan akses ke grup WhatsApp, channel update Telegram, dan voice room Discord mingguan "Ngaji Trafik & Jaga Lilin Bareng" di mana kamu bisa share screen dan bertanya langsung kepada para mentor.',
  },
];

export const WORDPRESS_GUTENBERG_SPEC = {
  themeName: 'Ngepet Online FSE Theme',
  description: 'WordPress Block Patterns and Full Site Editing (FSE) code specification for high-performance dark mode digital marketing community.',
  pages: [
    { name: 'Front Page (Halaman Depan)', template: 'templates/index.html', blocks: 'wp:cover, wp:group, wp:columns, wp:heading, wp:buttons' },
    { name: 'Kisah Padepokan (Tentang Kami)', template: 'templates/page-about.html', blocks: 'wp:group, wp:media-text, wp:quote, wp:columns' },
    { name: 'Kitab Sakti (Kurikulum)', template: 'templates/page-kurikulum.html', blocks: 'wp:group, wp:details, wp:table, wp:columns' },
    { name: 'Gunjingan Warga (Testimoni)', template: 'templates/page-testimoni.html', blocks: 'wp:query, wp:post-template, wp:columns' },
    { name: 'Pintu Gaib (Pendaftaran)', template: 'templates/page-gabung.html', blocks: 'wp:group, wp:form (or CF7/WPForms), wp:buttons' },
  ],
  cssCode: `/* Custom CSS for WordPress FSE - Dark Mode & Neon Accents */
:root {
  --wp--preset--color--dark-bg: #0b0d10;
  --wp--preset--color--surface: #14181f;
  --wp--preset--color--neon-green: #22c55e;
  --wp--preset--color--cuan-red: #ef4444;
  --wp--preset--color--text-light: #f1f5f9;
}

body.dark-mode {
  background-color: var(--wp--preset--color--dark-bg);
  color: var(--wp--preset--color--text-light);
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.wp-block-group.has-surface-background {
  background-color: var(--wp--preset--color--surface);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 2.5rem;
}

.wp-block-button__link.is-style-neon-green {
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  color: #052e16 !important;
  font-weight: 700;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
  transition: all 0.2s ease-in-out;
}

.wp-block-button__link.is-style-neon-green:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(34, 197, 94, 0.5);
}`,
  sampleGutenbergMarkup: `<!-- wp:cover {"url":"/assets/hero-bg.jpg","dimRatio":85,"overlayColor":"black","minHeight":650,"isDark":true,"align":"full"} -->
<div class="wp-block-cover alignfull is-dark" style="min-height:650px"><span aria-hidden="true" class="wp-block-cover__background has-black-background-color has-background-dim-85 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group {"layout":{"type":"constrained","contentSize":"900px"}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center","level":1,"style":{"typography":{"fontSize":"3.5rem","fontWeight":"800"}}} -->
<h1 class="wp-block-heading has-text-align-center" style="font-size:3.5rem;font-weight:800"><span style="color:#22c55e">NGEPET</span> <span style="color:#ef4444">ONLINE</span></h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"textAlign":"center","style":{"typography":{"fontSize":"1.5rem"}},"textColor":"white"} -->
<p class="has-text-align-center has-white-color has-text-color" style="font-size:1.5rem"><strong>Gak Harus Pintar, Yang Penting Mau Belajar</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"textAlign":"center","textColor":"neutral-300"} -->
<p class="has-text-align-center has-neutral-300-color has-text-color">Komunitas praktisi bisnis digital &amp; AI automation. Rebahan elit, transferan sulit dibendung, 100% tanpa tumbal.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-neon-green"} -->
<div class="wp-block-button is-style-neon-green"><a class="wp-block-button__link wp-element-button" href="#pintu-gaib">Masuk Padepokan</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->`
};
