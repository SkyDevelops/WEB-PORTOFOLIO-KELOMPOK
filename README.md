# TKJ Squad — SMKS Rajasa Surabaya

Website profil kelompok TKJ yang dibangun dengan **Next.js 15 App Router**, **TypeScript (strict)**, dan **CSS Modules**.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development
npm run dev

# Type check
npm run type-check

# Build production
npm run build
```

---

## 📁 Struktur Proyek

```
tkj-squad/
├── src/
│   ├── app/
│   │   ├── globals.css          # CSS variables, reset, animasi global
│   │   ├── layout.tsx           # Root layout + metadata
│   │   └── page.tsx             # Halaman utama (entry point)
│   │
│   ├── components/
│   │   ├── ui/                  # Komponen reusable/atomic
│   │   │   ├── Cursor.tsx               # Custom cursor (client)
│   │   │   ├── Cursor.module.css
│   │   │   ├── CVModal.tsx              # Modal CV (client)
│   │   │   ├── CVModal.module.css
│   │   │   ├── GridBackground.tsx       # Animated grid background
│   │   │   ├── GridBackground.module.css
│   │   │   ├── MemberCard.tsx           # Kartu anggota 3D flip (client)
│   │   │   ├── MemberCard.module.css
│   │   │   ├── ScrollReveal.tsx         # IntersectionObserver (client)
│   │   │   ├── SectionHeader.tsx        # Header section reusable
│   │   │   └── SectionHeader.module.css
│   │   │
│   │   └── sections/            # Komponen halaman (section)
│   │       ├── Navbar.tsx               # Navigasi fixed
│   │       ├── Navbar.module.css
│   │       ├── Hero.tsx                 # Hero section
│   │       ├── Hero.module.css
│   │       ├── About.tsx                # Profil & info sekolah
│   │       ├── About.module.css
│   │       ├── Team.tsx                 # Grid anggota + state CV
│   │       ├── Team.module.css
│   │       ├── Certificates.tsx         # Grid sertifikat
│   │       ├── Certificates.module.css
│   │       ├── Projects.tsx             # Grid project
│   │       ├── Projects.module.css
│   │       ├── Contact.tsx              # Kontak
│   │       ├── Contact.module.css
│   │       ├── Footer.tsx
│   │       └── Footer.module.css
│   │
│   ├── lib/
│   │   └── data.ts              # Semua data konstan (members, certs, projects)
│   │
│   └── types/
│       └── index.ts             # TypeScript interfaces & enums
│
├── public/                      # Static assets (foto anggota, dll)
├── next.config.ts
├── tsconfig.json                # TypeScript strict mode
├── package.json
└── README.md
```

---

## 🏗️ Arsitektur

### Server vs Client Components

| Komponen | Type | Alasan |
|---|---|---|
| `page.tsx`, `layout.tsx` | Server | No interactivity needed |
| `Navbar`, `Hero`, `About` | Server | Static content |
| `Certificates`, `Projects` | Server | Static content |
| `Team` | **Client** | Manages `activeMember` state |
| `MemberCard` | **Client** | onClick handler |
| `CVModal` | **Client** | useEffect + state |
| `Cursor` | **Client** | mousemove events, RAF |
| `ScrollReveal` | **Client** | IntersectionObserver |

### TypeScript Strict

Semua type didefinisikan di `src/types/index.ts`:
- **Enums**: `MemberRole`, `SocialPlatform`, `TechCategory`
- **Interfaces**: `Member`, `Certificate`, `Project`, `CVProject`, `MemberCV`, `CVContact`, `SocialLink`, `NavItem`, `SchoolInfo`, `CoreCompetency`

---

## ✏️ Cara Menambah Data

### Tambah Anggota Baru

Edit `src/lib/data.ts`, tambahkan object ke array `MEMBERS`:

```ts
{
  id: 5,
  name: "Nama Lengkap",
  role: MemberRole.NetworkEngineer, // pilih dari enum
  emoji: "🖥️",
  skills: ["Skill1", "Skill2"],
  socials: [
    {
      platform: SocialPlatform.GitHub,
      handle: "username",
      url: "https://github.com/username",
    },
  ],
  cv: {
    projects: [{ title: "...", description: "..." }],
    certificates: ["Cert Name"],
    contact: {
      email: "...",
      whatsapp: "...",
      instagram: "...",
      github: "...",
    },
  },
}
```

### Tambah Foto Anggota

1. Taruh foto di `public/photos/nama-foto.jpg`
2. Di `MemberCard.tsx`, ganti `<div className={styles.photo}>{member.emoji}</div>` dengan `<Image src="/photos/nama-foto.jpg" ... />`

---

## 🎨 Design System

CSS Variables di `globals.css`:

| Variable | Value | Usage |
|---|---|---|
| `--cyan` | `#00fff5` | Primary accent |
| `--magenta` | `#ff00ff` | Secondary accent |
| `--dark` | `#050a0f` | Background |
| `--dark2` | `#0a1520` | Section alt bg |
| `--card-bg` | `rgba(0,20,40,0.85)` | Card background |
| `--text` | `#c8f0ff` | Body text |
| `--text-dim` | `#5a8fa8` | Muted text |
| `--font-display` | `Orbitron` | Headings |
| `--font-mono` | `Share Tech Mono` | Labels, tags |
| `--font-body` | `Rajdhani` | Body text |

---

## 📦 Tech Stack

- **Next.js 15** — App Router, Server Components
- **TypeScript 5** — Strict mode, all flags enabled
- **CSS Modules** — Scoped styling, no CSS-in-JS
- **Google Fonts** — Orbitron, Share Tech Mono, Rajdhani
