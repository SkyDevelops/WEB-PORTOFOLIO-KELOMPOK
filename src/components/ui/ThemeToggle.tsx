"use client";

import { useTheme } from "./ThemeProvider";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className={styles.btn}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span className={styles.icon}>{theme === "dark" ? "☀" : "◐"}</span>
      <span className={styles.label}>{theme === "dark" ? "LIGHT" : "DARK"}</span>
    </button>
  );
}
