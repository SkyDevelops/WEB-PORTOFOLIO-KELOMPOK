import {
  type Certificate,
  type CoreCompetency,
  type Member,
  type NavItem,
  type Project,
  type SchoolInfo,
  SocialPlatform,
} from "@/types";

/**
 * ─── NAVIGATION CONFIGURATION ────────────────────────────────────────────────
 * Digunakan untuk link pada Navbar utama
 */
export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Sertifikat", href: "#certificates" },
  { label: "Projects", href: "#projects" },
  { label: "Kontak", href: "#contact" },
];

/**
 * ─── SCHOOL & MAJOR INFORMATION ──────────────────────────────────────────────
 * Data profil sekolah dan kompetensi keahlian
 */
export const SCHOOL_INFO: SchoolInfo = {
  name: "SMKS Rajasa Surabaya",
  address: "Surabaya, Jawa Timur",
  major: "TKJ",
  accreditation: "A",
  website: "smksrajasa.sch.id",
};

export const CORE_COMPETENCIES: CoreCompetency[] = [
  { label: "Jaringan", value: "Cisco, MikroTik" },
  { label: "OS Server", value: "Linux, Windows Server" },
  { label: "Web", value: "HTML/CSS/JS, PHP" },
  { label: "Security", value: "Firewall, VPN, Wireshark" },
  { label: "Cloud", value: "AWS, GCP Basic" },
];

export const VISION_TEXT =
  "Menjadi generasi teknolog muda yang kompeten, inovatif, dan siap menghadapi tantangan industri digital 4.0 dengan keahlian jaringan, keamanan siber, dan pengembangan sistem yang kuat.";

export const MAJOR_COMPETENCIES: string[] = [
  "Instalasi & konfigurasi jaringan komputer",
  "Keamanan jaringan & siber (cybersecurity)",
  "Administrasi server Linux & Windows",
  "Pengembangan web & aplikasi",
  "Troubleshooting hardware & software",
  "Cloud computing & virtualisasi",
];

// ─── MEMBERS ──────────────────────────────────────────────────────────────────

export const MEMBERS: Member[] = [
  {
    id: 1,
    name: "Tegar Muhammad I",
    role: "Prompt Enginer",
    emoji: "🖥️",
    photo: "/images/tegar.jpg",
    skills: ["PHP 60%", "Java 65%", "Python 80%", "FLutter 65%", "C++ 50%"],
    socials: [
      {
        platform: SocialPlatform.WhatsApp,
        handle: "6281216920386",
        url: "https://wa.me/6281216920386",
      },
      {
        platform: SocialPlatform.Instagram,
        handle: "tegar.iz",
        url: "https://instagram.com/tegar.iz",
      },
      {
        platform: SocialPlatform.GitHub,
        handle: "SkyDevelops",
        url: "https://github.com/SkyDevelops",
      },
    ],
    cv: {
      projects: [
        {
          title: "Konfigurasi VPN Site-to-Site",
          description:
            "Membangun koneksi VPN antar kantor menggunakan MikroTik RouterOS",
        },
        {
          title: "Monitoring Jaringan Real-time",
          description:
            "Dashboard monitoring traffic jaringan dengan Grafana & Prometheus",
        },
      ],
      certificates: [
        "Cisco CCNA (Simulasi)",
        "MikroTik MTCNA",
        "Linux Essentials",
      ],
      contact: {
        email: "tegarmi839@gmail.com",
        whatsapp: "+62 812-1692-0386",
        instagram: "@tegar.iz",
        github: "github.com/SkyDevelops",
      },
    },
  },
  {
    id: 2,
    name: "Timy Kakeru",
    role: "Fullstack",
    emoji: "💻",
    photo: "/images/timy.jpg",
    skills: ["PHP 60%", "Java 70%", "Python 80%", "FLutter 85%", "C++ 70%"],
    socials: [
      {
        platform: SocialPlatform.WhatsApp,
        handle: "6281216190772",
        url: "https://wa.me/6281216190772",
      },
      {
        platform: SocialPlatform.GitHub,
        handle: "TimyKakeru",
        url: "https://github.com/TimyKakeru",
      },
    ],
    cv: {
      projects: [
        {
          title: "Sistem Informasi Sekolah",
          description:
            "Aplikasi web manajemen data siswa, guru, dan nilai berbasis PHP & MySQL",
        },
        {
          title: "Landing Page UMKM",
          description:
            "Website profil bisnis responsif menggunakan HTML, CSS, dan JavaScript",
        },
      ],
      certificates: [
        "Web Programming — Dicoding",
        "JavaScript Basic — Dicoding",
        "Google Digital Marketing",
      ],
      contact: {
        email: "siti.nurfadilah@gmail.com",
        whatsapp: "+62 819-8765-4321",
        instagram: "@siti.nurfadilah.dev",
        github: "github.com/siti-nurfadilah",
      },
    },
  },
  {
    id: 3,
    name: "Tri Anishar R",
    role: "Network Enginer",
    emoji: "🔐",
    photo: "/images/tri.jpg",
    skills: ["PHP 60%", "Java 70%", "Python 80%", "Linux 90%", "Cisco 84%"],
    socials: [
      {
        platform: SocialPlatform.WhatsApp,
        handle: "6285704753598",
        url: "https://wa.me/6285704753598",
      },
    ],
    cv: {
      projects: [
        {
          title: "Penetration Testing Lab",
          description:
            "Setup lab simulasi pengujian keamanan jaringan menggunakan VirtualBox & Kali Linux",
        },
        {
          title: "Honeypot Network",
          description:
            "Instalasi dan konfigurasi honeypot untuk mendeteksi aktivitas mencurigakan di jaringan",
        },
      ],
      certificates: [
        "Cybersecurity Fundamentals — IBM",
        "Ethical Hacking — EC-Council (Student)",
        "CompTIA Security+ (Belajar Mandiri)",
      ],
      contact: {
        email: "ahmad.fauzi.sec@gmail.com",
        whatsapp: "+62 856-7890-1234",
        instagram: "@fauzi.sec",
        github: "github.com/ahmad-fauzi-sec",
      },
    },
  },
  {
    id: 4,
    name: "Wahyu Fatkhur R",
    role: "Backend & Network Enginer",
    emoji: "🖧",
    photo: "/images/wahyu.jpg",
    skills: ["PHP 50%", "Java 90%", "Python 80%", "Linux 80%", "Cisco 90%"],
    socials: [
      {
        platform: SocialPlatform.WhatsApp,
        handle: "62895358674433",
        url: "https://wa.me/62895358674433",
      },
    ],
    cv: {
      projects: [
        {
          title: "Deploy Web App dengan Docker",
          description:
            "Containerisasi aplikasi web menggunakan Docker Compose dan deployment ke VPS",
        },
        {
          title: "File Server dengan Samba",
          description:
            "Konfigurasi file server berbasis Samba untuk sharing file dalam jaringan LAN sekolah",
        },
      ],
      certificates: [
        "AWS Cloud Practitioner Essentials",
        "Linux Server Administration — Coursera",
        "Docker Fundamentals",
      ],
      contact: {
        email: "dewi.rahmawati@gmail.com",
        whatsapp: "+62 887-6543-2100",
        instagram: "@dewi.sysadmin",
        github: "github.com/dewi-rahmawati",
      },
    },
  },
];

// ─── CERTIFICATES ─────────────────────────────────────────────────────────────

export const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    owner: "Timy Kakeru",
    icon: "🏅",
    name: "Cisco CCNA (Simulasi)",
    issuer: "Cisco Networking Academy",
    year: "2024",
  },
  {
    id: 2,
    owner: "Tegar Muhammad I",
    icon: "🏆",
    name: "MikroTik MTCNA",
    issuer: "MikroTik Academy",
    year: "2024",
  },
  {
    id: 3,
    owner: "Wahyu Fatkhur R",
    icon: "🎖️",
    name: "Web Programming",
    issuer: "Dicoding Indonesia",
    year: "2024",
  },
  {
    id: 4,
    owner: "Tri Anishar R",
    icon: "🌟",
    name: "Google Digital Marketing",
    issuer: "Google Garage",
    year: "2023",
  },
  {
    id: 5,
    owner: "Timy Kakeru",
    icon: "🔒",
    name: "Cybersecurity Fundamentals",
    issuer: "IBM SkillsBuild",
    year: "2024",
  },
  {
    id: 6,
    owner: "Wahyu Fatkhur R",
    icon: "🏴",
    name: "Ethical Hacking Essentials",
    issuer: "EC-Council CodeRed",
    year: "2024",
  },
  {
    id: 7,
    owner: "Tegar Muhammad I",
    icon: "☁️",
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    year: "2024",
  },
  {
    id: 8,
    owner: "Tri Anishar R",
    icon: "🐳",
    name: "Docker Fundamentals",
    issuer: "Docker Inc.",
    year: "2023",
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    id: 1,
    owner: "Tegar Mi",
    emoji: "🌐",
    name: "Web Portofolio",
    description: "Portofolio kelompok berbasis web yang responsif dan modern.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/SkyDevelops/WEB-PORTOFOLIO-KELOMPOK.git",
  },
  {
    id: 2,
    owner: "Timy Kakeru",
    emoji: "🎮",
    name: "Web Portofolio",
    description: "Portofolio tim dengan tema retro yang unik dan menarik.",
    techStack: ["React", "CSS", "Vite"],
    githubUrl: "https://github.com/TimyKakeru/retro-team-portfolio.git",
  },
  {
    id: 3,
    owner: "Tri Anishar",
    emoji: "💼",
    name: "Web Portofolio",
    description: "Portofolio pribadi yang profesional untuk menampilkan pengalaman dan keahlian.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/SkyDevelops/Portofolio.git",
  },
  {
    id: 4,
    owner: "Wahyu fatkhur",
    emoji: "📰",
    name: "TAR News",
    description: "Aplikasi berita cross-platform yang menyajikan informasi terkini.",
    techStack: ["Flutter", "Dart", "Firebase"],
    githubUrl: "https://github.com/SkyDevelops/TAR-News-Cross-Platform.git",
  },
];
