"use client";

import { useEffect } from "react";
import { type Member } from "@/types";
import styles from "./CVModal.module.css";

interface CVModalProps {
  member: Member | null;
  onClose: () => void;
}

export default function CVModal({ member, onClose }: CVModalProps) {
  useEffect(() => {
    if (member) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [member]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!member) return null;

  const handlePrint = () => window.print();

  return (
    <div
      className={styles.overlay}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`CV ${member.name}`}
    >
      <div className={styles.box}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Tutup CV">
          ✕
        </button>

        <div className={styles.doc}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.photo} aria-hidden="true">
              {member.emoji}
            </div>
            <div>
              <div className={styles.name}>{member.name}</div>
              <div className={styles.roleTitle}>{member.role} — TKJ</div>
              <div className={styles.school}>SMKS Rajasa Surabaya | Angkatan 2025</div>
            </div>
          </div>

          {/* Skills */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>⊕ KOMPETENSI &amp; SKILL</div>
            <div className={styles.skillTags}>
              {member.skills.map((skill) => (
                <span key={skill} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>⊕ PROJECT YANG DIKERJAKAN</div>
            {member.cv.projects.map((project) => (
              <div key={project.title} className={styles.item}>
                <div className={styles.itemTitle}>▸ {project.title}</div>
                <div className={styles.itemSub}>{project.description}</div>
              </div>
            ))}
          </div>

          {/* Certificates */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>⊕ SERTIFIKAT &amp; PENGHARGAAN</div>
            {member.cv.certificates.map((cert) => (
              <div key={cert} className={styles.item}>
                <div className={styles.itemTitle}>🏅 {cert}</div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>⊕ KONTAK</div>
            <div className={styles.contactGrid}>
              <div className={styles.contactItem}>
                <span>EMAIL</span>
                <span>{member.cv.contact.email}</span>
              </div>
              <div className={styles.contactItem}>
                <span>WA</span>
                <span>{member.cv.contact.whatsapp}</span>
              </div>
              <div className={styles.contactItem}>
                <span>IG</span>
                <span>{member.cv.contact.instagram}</span>
              </div>
              <div className={styles.contactItem}>
                <span>GITHUB</span>
                <span>{member.cv.contact.github}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className={styles.actions}>
            <button className={`${styles.btn} ${styles.btnClose}`} onClick={onClose}>
              ✕ TUTUP
            </button>
            <button className={`${styles.btn} ${styles.btnPrint}`} onClick={handlePrint}>
              🖨 PRINT / SAVE PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
