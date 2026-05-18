"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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
    
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        // Calculate normalized mouse position (-1 to 1)
        const x = (clientX / innerWidth) * 2 - 1;
        const y = (clientY / innerHeight) * 2 - 1;
        
        setMousePos({ x, y });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className={styles.hero} ref={heroRef} id="hero">
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
        {/* Giant Interactive Title */}
        <div
          className={`${styles.heroTitleWrapper} ${
            isVisible ? styles.revealed : ""
          }`}
        >
          <h1 
            className={styles.heroTitle}
            style={{
              transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px) rotateY(${mousePos.x * 10}deg) rotateX(${mousePos.y * -10}deg)`,
              transition: "transform 0.1s ease-out"
            }}
          >
            <span className={styles.titleLine}>
              <span className={styles.titleWord} style={{ animationDelay: "0.5s" }}>SDL</span>
            </span>
            <span className={styles.titleLine}>
              <span className={styles.titleWord} style={{ animationDelay: "0.7s", color: "var(--color-accent)" }}>CARGO</span>
            </span>
          </h1>
        </div>

        {/* Bottom Content */}
        <div
          className={`${styles.heroBottom} ${isVisible ? styles.revealed : ""}`}
        >
          <div className={styles.heroSpacer}></div>

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
      <div className={`${styles.scrollHint} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.scrollLine}></div>
        <span className={styles.scrollText}>SCROLL</span>
      </div>
    </section>
  );
}
