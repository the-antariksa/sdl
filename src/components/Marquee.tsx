"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Marquee.module.css";

export default function Marquee() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const items = [
    "OCEAN FREIGHT",
    "AIR CARGO",
    "GROUND TRANSPORT",
    "CUSTOMS BROKERAGE",
    "WAREHOUSE PLANNING",
    "CARGO INSURANCE",
    "SHIPMENT TRACKING",
    "SUPPLY CHAIN",
  ];

  return (
    <div
      className={`${styles.marquee} ${isVisible ? styles.visible : ""}`}
      ref={ref}
      id="marquee-section"
    >
      <div className={styles.marqueeTrack}>
        <div className={styles.marqueeContent}>
          {items.map((item, i) => (
            <span key={i} className={styles.marqueeItem}>
              <span className={styles.marqueeText}>{item}</span>
              <span className={styles.marqueeDot}>◆</span>
            </span>
          ))}
          {items.map((item, i) => (
            <span key={`dup-${i}`} className={styles.marqueeItem}>
              <span className={styles.marqueeText}>{item}</span>
              <span className={styles.marqueeDot}>◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
