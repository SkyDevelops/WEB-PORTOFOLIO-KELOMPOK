"use client";

import { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/lib/data";
import ThemeToggle from "@/components/ui/ThemeToggle";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>TKJ // RAJASA</div>

      {/* Desktop links */}
      <ul className={styles.links}>
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a href={item.href} className={styles.link}>{item.label}</a>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <ThemeToggle />

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${open ? styles.open : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}>
        <ul className={styles.drawerLinks}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={styles.drawerLink} onClick={close}>
                <span className={styles.drawerArrow}>//</span> {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
