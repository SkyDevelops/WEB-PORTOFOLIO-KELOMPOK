import styles from "./Hero.module.css";

const HERO_BADGES = ["Networking", "Cybersecurity", "Web Dev", "Linux", "Cloud"] as const;

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.schoolTag}>◈ SMKS RAJASA SURABAYA ◈</p>
        <h1 className={styles.title}>TKJ SQUAD</h1>
        <p className={styles.sub}>// Teknik Komputer &amp; Jaringan — Angkatan 2025</p>
        <p className={styles.desc}>
          Kelompok siswa TKJ yang berfokus pada jaringan komputer, keamanan siber,
          pengembangan web, dan infrastruktur digital masa depan.
        </p>
        <div className={styles.badges}>
          {HERO_BADGES.map((badge) => (
            <span key={badge} className={styles.badge}>
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
