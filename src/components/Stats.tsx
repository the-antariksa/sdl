"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Stats.module.css";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

function AnimatedCounter({
  target,
  suffix,
  isVisible,
}: {
  target: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span className={styles.statValue}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats: StatItem[] = [
    { value: 150, suffix: "+", label: "Countries Served" },
    { value: 25000, suffix: "+", label: "Shipments Per Year" },
    { value: 500, suffix: "+", label: "Global Partners" },
    { value: 99, suffix: "%", label: "On-Time Delivery" },
  ];

  return (
    <section
      className={`${styles.stats} ${isVisible ? styles.visible : ""}`}
      ref={ref}
      id="stats"
    >
      <div className={styles.container}>
        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className={styles.statCard}
              style={{ transitionDelay: `${0.1 + i * 0.15}s` }}
            >
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                isVisible={isVisible}
              />
              <span className={styles.statLabel}>{stat.label}</span>
              <div className={styles.statLine}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
