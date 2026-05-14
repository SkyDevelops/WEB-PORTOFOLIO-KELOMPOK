// ─── ENUMS ────────────────────────────────────────────────────────────────────

export enum MemberRole {
  NetworkEngineer = "Network Engineer",
  WebDeveloper = "Web Developer",
  Cybersecurity = "Cybersecurity",
  ServerAdmin = "Server Admin",
}

export enum SocialPlatform {
  WhatsApp = "whatsapp",
  Instagram = "instagram",
  GitHub = "github",
  TikTok = "tiktok",
}

export enum TechCategory {
  Networking = "Networking",
  WebDev = "Web Dev",
  Security = "Security",
  Cloud = "Cloud",
  Linux = "Linux",
}

// ─── INTERFACES ───────────────────────────────────────────────────────────────

export interface SocialLink {
  platform: SocialPlatform;
  handle: string;
  url: string;
}

export interface CVContact {
  email: string;
  whatsapp: string;
  instagram: string;
  github: string;
}

export interface CVProject {
  title: string;
  description: string;
}

export interface MemberCV {
  projects: CVProject[];
  certificates: string[];
  contact: CVContact;
}

export interface Member {
  id: number;
  name: string;
  role: string;
  emoji: string;
  photo?: string;
  skills: string[];
  socials: SocialLink[];
  cv: MemberCV;
}

export interface Certificate {
  id: number;
  owner: string;
  icon: string;
  name: string;
  issuer: string;
  year: string;
}

export interface Project {
  id: number;
  owner: string;
  emoji: string;
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SchoolInfo {
  name: string;
  address: string;
  major: string;
  accreditation: string;
  website: string;
}

export interface CoreCompetency {
  label: string;
  value: string;
}
