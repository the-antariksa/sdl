"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      className={`${styles.contact} ${isVisible ? styles.visible : ""}`}
      ref={sectionRef}
      id="contact"
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left - Info */}
          <div className={styles.infoCol}>
            <span className={styles.sectionLabel}>
              <span className={styles.labelLine}></span>
              Get In Touch
            </span>
            <h2 className={styles.sectionTitle}>
              Let&apos;s Move Your
              <br />
              <span className={styles.titleAccent}>Cargo</span> Forward
            </h2>
            <p className={styles.infoText}>
              Ready to ship? Our logistics experts are available 24/7 to provide
              competitive quotes and plan your optimal shipping route.
            </p>

            <div className={styles.contactCards}>
              <div className={styles.contactCard}>
                <div className={styles.cardIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 1C5.58 1 2 4.58 2 9c0 5.25 8 11 8 11s8-5.75 8-11c0-4.42-3.58-8-8-8z" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="10" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.cardLabel}>Office</h4>
                  <p className={styles.cardValue}>Jakarta, Indonesia</p>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.cardIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2 4h16v12H2V4z" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M2 4l8 6 8-6" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.cardLabel}>Email</h4>
                  <p className={styles.cardValue}>info@sdlcargo.com</p>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.cardIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M17 13.5v2a1.5 1.5 0 01-1.63 1.5A14.85 14.85 0 013 4.63 1.5 1.5 0 014.5 3h2a1.5 1.5 0 011.5 1.29c.1.72.28 1.43.54 2.1a1.5 1.5 0 01-.34 1.58L7 9.18a12 12 0 005.82 5.82l1.21-1.21a1.5 1.5 0 011.58-.34c.67.26 1.38.44 2.1.54A1.5 1.5 0 0117 15.5v-2z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.cardLabel}>Phone</h4>
                  <p className={styles.cardValue}>+62 21 555 0123</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className={styles.formCol}>
            <form className={styles.form} onSubmit={handleSubmit} id="contact-form">
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={styles.formInput}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={styles.formInput}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="company">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className={styles.formInput}
                    placeholder="Company name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="service">
                    Service
                  </label>
                  <select id="service" className={styles.formSelect}>
                    <option value="">Select service</option>
                    <option value="ocean">Ocean Freight</option>
                    <option value="air">Air Cargo</option>
                    <option value="ground">Ground Transport</option>
                    <option value="customs">Customs Brokerage</option>
                    <option value="warehouse">Warehouse Planning</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className={styles.formTextarea}
                  placeholder="Tell us about your shipment needs..."
                  rows={5}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`${styles.submitBtn} ${
                  submitted ? styles.submitted : ""
                }`}
                id="submit-btn"
              >
                {submitted ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M4 9L8 13L14 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Sent Successfully!
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
