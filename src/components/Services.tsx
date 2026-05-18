"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Services.module.css";

const services = [
  {
    id: "01",
    title: "Ocean Freight",
    description:
      "Full container load (FCL) and less-than-container load (LCL) shipments across all major shipping lanes. Freight consolidation, rate negotiations, and door-to-door delivery.",
    image: "/images/hero-cargo.png",
    features: ["FCL & LCL Shipping", "Rate Negotiation", "Port-to-Port & Door-to-Door"],
  },
  {
    id: "02",
    title: "Air Cargo",
    description:
      "Time-critical shipments via global air freight networks. Express and standard air cargo services with customs clearance and airport-to-airport tracking.",
    image: "/images/air-freight.png",
    features: ["Express & Standard", "Temperature Controlled", "Dangerous Goods Handling"],
  },
  {
    id: "03",
    title: "Ground Transport",
    description:
      "Comprehensive overland logistics via trucks and rail. Cross-border ground transport with full documentation, collection, and last-mile delivery services.",
    image: "/images/truck-fleet.png",
    features: ["FTL & LTL Trucking", "Rail Freight", "Last-Mile Delivery"],
  },
  {
    id: "04",
    title: "Customs Brokerage",
    description:
      "Expert customs clearance and documentation services. Commercial invoice preparation, export declarations, bills of lading, and regulatory compliance across jurisdictions.",
    image: "/images/warehouse.png",
    features: ["Import & Export Clearance", "Documentation", "Regulatory Compliance"],
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
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
      className={`${styles.services} ${isVisible ? styles.visible : ""}`}
      ref={sectionRef}
      id="services"
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>
            <span className={styles.labelLine}></span>
            Our Services
          </span>
          <h2 className={styles.sectionTitle}>
            Comprehensive <span className={styles.titleAccent}>Logistics</span>
            <br />
            Solutions
          </h2>
          <p className={styles.sectionDesc}>
            Modern freight forwarding with end-to-end process — shipping goods from
            the place of origin to the final destination with real-time tracking
            and cargo insurance.
          </p>
        </div>

        {/* Services Layout */}
        <div className={styles.servicesLayout}>
          {/* Left - Service Tabs */}
          <div className={styles.serviceTabs}>
            {services.map((service, i) => (
              <button
                key={service.id}
                className={`${styles.serviceTab} ${
                  activeService === i ? styles.activeTab : ""
                }`}
                onClick={() => setActiveService(i)}
                id={`service-tab-${service.id}`}
              >
                <span className={styles.tabNumber}>{service.id}</span>
                <div className={styles.tabContent}>
                  <h3 className={styles.tabTitle}>{service.title}</h3>
                  <p className={styles.tabDesc}>{service.description}</p>
                </div>
                <svg
                  className={styles.tabArrow}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5 10H15M15 10L11 6M15 10L11 14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ))}
          </div>

          {/* Right - Service Image & Details */}
          <div className={styles.serviceDisplay}>
            <div className={styles.serviceImageWrapper}>
              <Image
                src={services[activeService].image}
                alt={services[activeService].title}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                key={activeService}
              />
              <div className={styles.serviceImageOverlay}></div>
              <div className={styles.serviceImageInfo}>
                <h3 className={styles.serviceImageTitle}>
                  {services[activeService].title}
                </h3>
                <div className={styles.serviceFeatures}>
                  {services[activeService].features.map((feat, i) => (
                    <span key={i} className={styles.serviceFeature}>
                      <span className={styles.featureCheck}>✓</span>
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
