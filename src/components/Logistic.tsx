"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Logistic.module.css";

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "Understanding your shipment needs, analyzing routes, and providing competitive rate quotations.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2C7.37 2 2 7.37 2 14s5.37 12 12 12 12-5.37 12-12S20.63 2 14 2z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 12h8M10 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Documentation",
    description:
      "Preparing commercial invoices, export declarations, bills of lading, and all required customs paperwork.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 4h10l6 6v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 4v6h6M8 14h8M8 18h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Shipment",
    description:
      "Coordinating with carriers, freight consolidation, and dispatching via the optimal transport mode.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M2 16h16V6H2v10zM18 16h4l4 4v-8h-8v4z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="7" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="21" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Tracking & Delivery",
    description:
      "Real-time shipment monitoring, customs clearance, and final delivery to the recipient's door.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2l3.09 6.26L24 9.27l-5 4.87L20.18 21 14 17.27 7.82 21 9 14.14l-5-4.87 6.91-1.01L14 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Logistic() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`${styles.logistic} ${isVisible ? styles.visible : ""}`}
      ref={sectionRef}
      id="logistic"
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.sectionLabel}>
              <span className={styles.labelLine}></span>
              How It Works
            </span>
            <h2 className={styles.sectionTitle}>
              Our <span className={styles.titleAccent}>Logistic</span>
              <br />
              Process
            </h2>
          </div>
          <p className={styles.headerRight}>
            From initial consultation to final delivery, our streamlined process
            ensures your cargo moves efficiently across borders with full
            transparency and compliance at every step.
          </p>
        </div>

        {/* Process Steps */}
        <div className={styles.processGrid}>
          {processSteps.map((item, i) => (
            <div
              key={item.step}
              className={styles.processCard}
              style={{ transitionDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className={styles.cardTop}>
                <span className={styles.stepNumber}>{item.step}</span>
                <div className={styles.stepIcon}>{item.icon}</div>
              </div>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDesc}>{item.description}</p>
              {i < processSteps.length - 1 && (
                <div className={styles.connector}>
                  <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
                    <path
                      d="M0 6H36M36 6L30 1M36 6L30 11"
                      stroke="var(--color-accent)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaImage}>
            <Image
              src="/images/air-freight.png"
              alt="Air cargo operations"
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
            <div className={styles.ctaOverlay}></div>
          </div>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              Ready to Ship Your Cargo Worldwide?
            </h3>
            <p className={styles.ctaText}>
              Let our team of logistics experts handle your shipment from origin
              to destination. Get a competitive quote in minutes.
            </p>
            <a href="#contact" className={styles.ctaButton} id="logistic-cta">
              Request a Quote
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
