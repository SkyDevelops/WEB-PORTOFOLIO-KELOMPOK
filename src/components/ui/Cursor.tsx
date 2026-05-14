"use client";

import { useEffect, useRef } from "react";
import styles from "./Cursor.module.css";

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0;
    let my = 0;
    let cx = 0;
    let cy = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mx - 2}px`;
        dotRef.current.style.top  = `${my - 2}px`;
      }
    };

    const animate = () => {
      cx += (mx - cx) * 0.15;
      cy += (my - cy) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = `${cx - 8}px`;
        ringRef.current.style.top  = `${cy - 8}px`;
      }
      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(animate);

    const interactives = document.querySelectorAll<HTMLElement>(
      "a, button, .member-card, .dl-cv-btn"
    );
    const expand   = () => { if (ringRef.current) ringRef.current.style.transform = "scale(2)"; };
    const collapse = () => { if (ringRef.current) ringRef.current.style.transform = "scale(1)"; };

    interactives.forEach((el) => {
      el.addEventListener("mouseenter", expand);
      el.addEventListener("mouseleave", collapse);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", expand);
        el.removeEventListener("mouseleave", collapse);
      });
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
      <div ref={dotRef}  className={styles.dot}  aria-hidden="true" />
    </>
  );
}
