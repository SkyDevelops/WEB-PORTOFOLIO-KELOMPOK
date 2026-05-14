import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <SectionHeader tag="// 05 — CONTACT US" title="Hubungi Kami" />

      <div className={styles.wrapper}>
        <div className={`${styles.grid} reveal`}>
          <div className={styles.item}>
            <div className={styles.icon}>📧</div>
            <p className={styles.label}>EMAIL KELOMPOK</p>
            <p className={styles.value}>tegarmi839@gmail.com</p>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>📱</div>
            <p className={styles.label}>WHATSAPP</p>
            <p className={styles.value}>+62 812-1692-0386</p>
          </div>
        </div>

        <div className={`${styles.note} reveal`}>
          <div className={styles.noteCorner} />
          <p className={styles.noteText}>
            Kami terbuka untuk kolaborasi project, pertanyaan teknis, maupun diskusi
            seputar dunia teknologi jaringan. Jangan ragu untuk menghubungi kami!
          </p>
          <p className={styles.hours}>◈ Senin – Jumat: 08.00 – 16.00 WIB ◈</p>
        </div>
      </div>
    </section>
  );
}
