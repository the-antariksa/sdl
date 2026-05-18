"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "";
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <nav
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
        id="navbar"
      >
        <div className={styles.navContent}>
          <a href="#" className={styles.logo} onClick={closeMobileMenu}>
            <Image
              src="/images/sdl-logo.png"
              alt="SDL Cargo"
              width={100}
              height={40}
              className={styles.logoImage}
              priority
            />
          </a>

          <div className={styles.navLinks}>
            <a href="#about" className={styles.navLink}>
              <span className={styles.navLinkText}>About Us</span>
              <span className={styles.navLinkLine}></span>
            </a>
            <a href="#services" className={styles.navLink}>
              <span className={styles.navLinkText}>Services</span>
              <span className={styles.navLinkLine}></span>
            </a>
            <a href="#logistic" className={styles.navLink}>
              <span className={styles.navLinkText}>Logistic</span>
              <span className={styles.navLinkLine}></span>
            </a>
            <a href="#contact" className={styles.navLink}>
              <span className={styles.navLinkText}>Contact</span>
              <span className={styles.navLinkLine}></span>
            </a>
          </div>

          <a href="#contact" className={styles.ctaButton} id="nav-cta">
            Get Quote
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className={styles.ctaArrow}
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <button
            className={`${styles.hamburger} ${
              isMobileMenuOpen ? styles.active : ""
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            id="hamburger-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileOverlay} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
        id="mobile-menu"
      >
        <div className={styles.mobileContent}>
          <div className={styles.mobileLinks}>
            <a
              href="#about"
              className={styles.mobileLink}
              onClick={closeMobileMenu}
            >
              <span className={styles.mobileLinkNumber}>01</span>
              <span className={styles.mobileLinkText}>About Us</span>
            </a>
            <a
              href="#services"
              className={styles.mobileLink}
              onClick={closeMobileMenu}
            >
              <span className={styles.mobileLinkNumber}>02</span>
              <span className={styles.mobileLinkText}>Services</span>
            </a>
            <a
              href="#logistic"
              className={styles.mobileLink}
              onClick={closeMobileMenu}
            >
              <span className={styles.mobileLinkNumber}>03</span>
              <span className={styles.mobileLinkText}>Logistic</span>
            </a>
            <a
              href="#contact"
              className={styles.mobileLink}
              onClick={closeMobileMenu}
            >
              <span className={styles.mobileLinkNumber}>04</span>
              <span className={styles.mobileLinkText}>Contact</span>
            </a>
          </div>
          <div className={styles.mobileFooter}>
            <p>info@sdlcargo.com</p>
            <p>+62 21 555 0123</p>
          </div>
        </div>
      </div>
    </>
  );
}
