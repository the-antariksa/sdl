"use client";

import { useEffect, useRef, useState, useCallback } from "react";

import styles from "./Hero.module.css";

interface HeroProps {
  onExpand: () => void;
  isExpanded: boolean;
}

export default function Hero({ onExpand, isExpanded }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const heroImg = heroRef.current.querySelector(
          `.${styles.heroImageWrapper}`
        ) as HTMLElement;
        if (heroImg) {
          heroImg.style.transform = `translateY(${scrollY * 0.25}px) scale(${1 + scrollY * 0.0003})`;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleExpand = useCallback(() => {
    onExpand();
    // Small delay then scroll to content
    setTimeout(() => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [onExpand]);

  return (
    <section
      className={`${styles.hero} ${isExpanded ? styles.expanded : ""}`}
      ref={heroRef}
      id="hero"
    >
      {/* Background Video */}
      <div className={styles.heroImageWrapper}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.heroVideo}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}></div>
      </div>

      {/* Grain texture overlay */}
      <div className={styles.grainOverlay}></div>

      {/* Hero Content */}
      <div className={styles.heroContent}>
        {/* Giant Title */}
        <div
          className={`${styles.heroTitleWrapper} ${
            isVisible ? styles.revealed : ""
          }`}
        >
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine}>
              <span className={styles.titleWord} style={{ animationDelay: "0.5s" }}>SDL</span>
            </span>
            <span className={styles.titleLine}>
              <span className={styles.titleWord} style={{ animationDelay: "0.7s" }}>CARGO</span>
            </span>
          </h1>
        </div>

        {/* Bottom Content */}
        <div
          className={`${styles.heroBottom} ${isVisible ? styles.revealed : ""}`}
        >
          {/* Expand Button */}
          <button
            className={`${styles.expandButton} ${isExpanded ? styles.expandedBtn : ""}`}
            onClick={handleExpand}
            aria-label="Expand to explore"
            id="expand-btn"
          >
            <div className={styles.expandCircle}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                className={styles.expandArrow}
              >
                <path
                  d="M11 4V18M11 18L5 12M11 18L17 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className={styles.expandLabel}>
              {isExpanded ? "SCROLLING" : "EXPLORE"}
            </span>
          </button>

          {/* Tagline */}
          <div className={styles.heroTagline}>
            <h2 className={styles.taglineTitle}>
              THE ARCHITECT
              <br />
              OF TRANSPORT
            </h2>
            <p className={styles.taglineText}>
              Coordinating and organizing the movement of shipments globally
              through sea, air, road, and rail — delivering end-to-end logistics
              solutions with precision and reliability.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div className={`${styles.scrollHint} ${isVisible && !isExpanded ? styles.visible : ""}`}>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
}
