import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        ⟨{" "}
        <span className={styles.accent}>TKJ Squad</span>
        {" "}— SMKS Rajasa Surabaya ⟩ &nbsp;|&nbsp; Crafted with 💻 by{" "}
        <span className={styles.accent}>Kelompok TKJ 2025</span>
        {" "}⟩
      </p>
    </footer>
  );
}
