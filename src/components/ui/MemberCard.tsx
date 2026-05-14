"use client";

import { type Member, SocialPlatform } from "@/types";
import styles from "./MemberCard.module.css";

/**
 * ─── MEMBER CARD COMPONENT ───────────────────────────────────────────────────
 * Komponen untuk menampilkan kartu profil member TKJ Squad
 */
interface MemberCardProps {
  member: Member;
}

// Label tampilan untuk setiap platform sosial media
const SOCIAL_LABELS: Record<SocialPlatform, string> = {
  [SocialPlatform.WhatsApp]: "WhatsApp",
  [SocialPlatform.Instagram]: "Instagram",
  [SocialPlatform.GitHub]: "GitHub",
  [SocialPlatform.TikTok]: "TikTok",
};

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  switch (platform) {
    case SocialPlatform.WhatsApp:
      return (
        <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.528 5.844L0 24l6.335-1.508A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.917 0-3.71-.502-5.262-1.381l-.378-.221-3.916.932.948-3.821-.245-.392A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      );
    case SocialPlatform.Instagram:
      return (
        <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case SocialPlatform.GitHub:
      return (
        <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case SocialPlatform.TikTok:
      return (
        <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.94a8.16 8.16 0 004.77 1.52V7.01a4.85 4.85 0 01-1-.32z" />
        </svg>
      );
  }
}

const getSkillLevel = (skill: string) => {
  const match = skill.match(/(\d+)%/);
  if (match && match[1]) return parseInt(match[1], 10);
  return 60;
};

const getSkillName = (skill: string) => {
  return skill.replace(/\s*\d+%/, "").trim();
};

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <div className={`${styles.card} member-card reveal`}>
      <div className={styles.inner}>
        {/* ─── FRONT ─── */}
        <div className={styles.face}>
          <div className={styles.cornerBr} />
          <div className={styles.photo} aria-hidden="true">
            {member.photo ? (
              <img src={member.photo} alt={member.name} className={styles.photoImg} loading="lazy" />
            ) : (
              member.emoji
            )}
          </div>
          <div className={styles.name}>{member.name}</div>
          <div className={styles.role}>{member.role}</div>
          <div className={styles.skills}>
            {member.skills.map((skill) => (
              <div key={skill} className={styles.skillRow}>
                <span className={styles.skillName}>{getSkillName(skill)}</span>
                <div className={styles.skillBar}>
                  <div className={styles.skillProgress} style={{ width: `${getSkillLevel(skill)}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className={styles.hint}>↺ Hover untuk detail kontak</p>
        </div>

        {/* ─── BACK (desktop hover) ─── */}
        <div className={`${styles.face} ${styles.back}`}>
          <div className={styles.cornerBr} />
          <div className={styles.backTitle}>◈ SOCIAL &amp; CONTACT ◈</div>
          <div className={styles.socialLinks}>
            {member.socials.map((social) => (
              <a key={social.platform} className={styles.socialLink} href={social.url} target="_blank" rel="noopener noreferrer">
                <SocialIcon platform={social.platform} />
                {SOCIAL_LABELS[social.platform]}
              </a>
            ))}
          </div>
          <a href={`/cv/${member.id}`} target="_blank" rel="noopener noreferrer" className={`${styles.cvBtn} dl-cv-btn`}>
            ⬇ DOWNLOAD CV
          </a>
        </div>
      </div>

      {/* ─── MOBILE: socials below card ─── */}
      <div className={styles.mobileSocials}>
        {member.socials.map((social) => (
          <a key={social.platform} className={styles.socialLink} href={social.url} target="_blank" rel="noopener noreferrer">
            <SocialIcon platform={social.platform} />
            {SOCIAL_LABELS[social.platform]}
          </a>
        ))}
        <a href={`/cv/${member.id}`} target="_blank" rel="noopener noreferrer" className={`${styles.cvBtn} dl-cv-btn`}>
          ⬇ DOWNLOAD CV
        </a>
      </div>
    </div>
  );
}
