import {
  CORE_COMPETENCIES,
  MAJOR_COMPETENCIES,
  SCHOOL_INFO,
  VISION_TEXT,
} from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <SectionHeader tag="// 01 — ABOUT" title="Identitas Kelompok" />

      <div className={styles.grid}>
        {/* School Profile */}
        <div className={`${styles.card} reveal`}>
          <div className={styles.cornerBr} />
          <h3 className={styles.cardTitle}>⊕ PROFIL SEKOLAH</h3>
          <div className={styles.infoRow}>
            <span>Nama Sekolah</span>
            <span>{SCHOOL_INFO.name}</span>
          </div>
          <div className={styles.infoRow}>
            <span>Alamat</span>
            <span>{SCHOOL_INFO.address}</span>
          </div>
          <div className={styles.infoRow}>
            <span>Jurusan</span>
            <span>{SCHOOL_INFO.major}</span>
          </div>
          <div className={styles.infoRow}>
            <span>Akreditasi</span>
            <span>{SCHOOL_INFO.accreditation}</span>
          </div>
          <div className={styles.infoRow}>
            <span>Website</span>
            <span>{SCHOOL_INFO.website}</span>
          </div>
        </div>

        {/* Major description */}
        <div className={`${styles.card} reveal`}>
          <div className={styles.cornerBr} />
          <h3 className={styles.cardTitle}>⊕ TENTANG JURUSAN TKJ</h3>
          <ul className={styles.list}>
            {MAJOR_COMPETENCIES.map((item) => (
              <li key={item} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Vision */}
        <div className={`${styles.card} reveal`}>
          <div className={styles.cornerBr} />
          <h3 className={styles.cardTitle}>⊕ VISI KELOMPOK</h3>
          <p className={styles.visionText}>{VISION_TEXT}</p>
        </div>

        {/* Core competencies */}
        <div className={`${styles.card} reveal`}>
          <div className={styles.cornerBr} />
          <h3 className={styles.cardTitle}>⊕ KOMPETENSI INTI</h3>
          {CORE_COMPETENCIES.map((comp) => (
            <div key={comp.label} className={styles.infoRow}>
              <span>{comp.label}</span>
              <span>{comp.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
