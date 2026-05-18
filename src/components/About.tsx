"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`${styles.about} ${isVisible ? styles.visible : ""}`}
      ref={sectionRef}
      id="about"
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>
            <span className={styles.labelLine}></span>
            About Us
          </span>
          <h2 className={styles.sectionTitle}>
            We Are The <span className={styles.titleAccent}>Architect</span>
            <br />
            Of Transport
          </h2>
        </div>

        {/* Content Grid */}
        <div className={styles.grid}>
          {/* Image Side */}
          <div className={styles.imageCol}>
            <div className={styles.imageMain}>
              <Image
                src="/images/hero-cargo.png"
                alt="SDL Cargo container ship at port"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className={styles.imageOverlay}></div>
            </div>
            <div className={styles.imageSmall}>
              <Image
                src="/images/warehouse.png"
                alt="SDL Cargo warehouse operations"
                fill
                sizes="(max-width: 900px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.experienceBadge}>
              <span className={styles.badgeNumber}>15+</span>
              <span className={styles.badgeText}>
                Years of
                <br />
                Experience
              </span>
            </div>
          </div>

          {/* Text Side */}
          <div className={styles.textCol}>
            <p className={styles.leadText}>
              SDL Cargo is a premier freight forwarding company that coordinates
              and organizes the movement of shipments on behalf of shippers by
              liaising with carriers across the globe.
            </p>

            <p className={styles.bodyText}>
              As described by FIATA, we serve as the &ldquo;architect of transport&rdquo; — 
              managing the entire logistics chain from origin to final destination. 
              Our carriers utilize a variety of shipping modes, including ships, 
              airplanes, trucks, and railroads, often using multiple modes for a 
              single shipment to optimize efficiency and cost.
            </p>

            <p className={styles.bodyText}>
              Our international freight forwarding team specializes in cross-border 
              logistics with deep expertise in customs documentation, export declarations, 
              bills of lading, and regulatory compliance across different countries and 
              jurisdictions.
            </p>

            {/* Feature Blocks */}
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3.5 18.5L9.5 12.5L13.5 16.5L21 9"
                      stroke="var(--color-accent)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 9H21V13"
                      stroke="var(--color-accent)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.featureTitle}>End-to-End Process</h4>
                  <p className={styles.featureDesc}>
                    Complete shipping solutions from origin to final destination
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="var(--color-accent)"
                      strokeWidth="2"
                    />
                    <path
                      d="M3 12H21M12 3C14.5 5.5 15.5 8.5 15.5 12C15.5 15.5 14.5 18.5 12 21C9.5 18.5 8.5 15.5 8.5 12C8.5 8.5 9.5 5.5 12 3Z"
                      stroke="var(--color-accent)"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.featureTitle}>Global Network</h4>
                  <p className={styles.featureDesc}>
                    Extensive coverage across continents and trade routes
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                      stroke="var(--color-accent)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="var(--color-accent)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.featureTitle}>Cargo Insurance</h4>
                  <p className={styles.featureDesc}>
                    Full protection and security for your valuable shipments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
