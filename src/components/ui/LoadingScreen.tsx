"use client";

import { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.css";

const BOOT_LINES = [
  "Initializing TKJ Squad OS...",
  "Loading network modules... [OK]",
  "Starting cybersecurity protocols... [OK]",
  "Mounting web development stack... [OK]",
  "Connecting to SMKS Rajasa... [OK]",
  "All systems operational.",
];

export default function LoadingScreen() {
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Hapus sessionStorage check — selalu tampil tiap reload
    let lineIndex = 0;

    // Munculkan tiap baris dengan jeda 400ms
    const lineInterval = setInterval(() => {
      if (lineIndex < BOOT_LINES.length) {
        setLines((prev) => [...prev, BOOT_LINES[lineIndex] ?? ""]);
        lineIndex++;
      } else {
        clearInterval(lineInterval);
      }
    }, 400);

    // Progress bar naik selama ~3.5 detik
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 35);

    // Selesai setelah semua baris + sedikit jeda
    const doneTimer = setTimeout(() => {
      setDone(true);
      setTimeout(() => setHidden(true), 800);
    }, 3200);

    return () => {
      clearInterval(lineInterval);
      clearInterval(progressInterval);
      clearTimeout(doneTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`${styles.overlay} ${done ? styles.exit : ""}`}>
      <div className={styles.terminal}>
        <div className={styles.terminalBar}>
          <span className={styles.dot} style={{ background: "#ff5f57" }} />
          <span className={styles.dot} style={{ background: "#febc2e" }} />
          <span className={styles.dot} style={{ background: "#28c840" }} />
          <span className={styles.termTitle}>tkj-squad ~ boot</span>
        </div>
        <div className={styles.terminalBody}>
          <p className={styles.ascii}>
            {`╔════════════════════════════╗\n║  TKJ SQUAD — SMKS RAJASA  ║\n╚════════════════════════════╝`}
          </p>
          {lines.map((line, i) => (
            <p key={i} className={styles.bootLine} style={{ animationDelay: `${i * 0.05}s` }}>
              <span className={styles.prompt}>{">"}</span> {line}
            </p>
          ))}
          {lines.length > 0 && (
            <div className={styles.progressWrap}>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${progress}%` }} />
              </div>
              <span className={styles.progressNum}>{progress}%</span>
            </div>
          )}
          {done && <p className={styles.ready}>✓ READY — Welcome to TKJ Squad</p>}
          <span className={styles.cursor}>█</span>
        </div>
      </div>
    </div>
  );
}