import { CERTIFICATES } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./Certificates.module.css";

export default function Certificates() {
  return (
    <section id="certificates" className={styles.section}>
      <SectionHeader tag="// 03 — CERTIFICATES" title="Sertifikat & Penghargaan" />
      <div className={styles.grid}>
        {CERTIFICATES.map((cert) => (
          <div key={cert.id} className={`${styles.card} reveal`}>
            <div className={styles.icon}>{cert.icon}</div>
            <div className={styles.name}>{cert.name}</div>
            <div className={styles.issuer}>{cert.issuer}</div>
            <div className={styles.meta}>
              <span className={styles.owner}>{cert.owner}</span>
              <span className={styles.year}>{cert.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}