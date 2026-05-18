"use client";

import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        {/* Top Section */}
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <div className={styles.logo}>
              <Image
                src="/images/sdl-logo.png"
                alt="SDL Cargo"
                width={80}
                height={32}
                className={styles.logoImage}
              />
            </div>
            <p className={styles.brandDesc}>
              Your trusted partner in global freight forwarding and logistics.
              Moving the world&apos;s cargo with precision, reliability, and care.
            </p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Company</h4>
              <a href="#about" className={styles.footerLink}>About Us</a>
              <a href="#services" className={styles.footerLink}>Services</a>
              <a href="#logistic" className={styles.footerLink}>Logistic</a>
              <a href="#contact" className={styles.footerLink}>Contact</a>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Services</h4>
              <a href="#services" className={styles.footerLink}>Ocean Freight</a>
              <a href="#services" className={styles.footerLink}>Air Cargo</a>
              <a href="#services" className={styles.footerLink}>Ground Transport</a>
              <a href="#services" className={styles.footerLink}>Customs Brokerage</a>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Connect</h4>
              <a href="mailto:info@sdlcargo.com" className={styles.footerLink}>info@sdlcargo.com</a>
              <a href="tel:+62215550123" className={styles.footerLink}>+62 21 555 0123</a>
              <a href="#" className={styles.footerLink}>LinkedIn</a>
              <a href="#" className={styles.footerLink}>Instagram</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} SDL Cargo. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>Privacy Policy</a>
            <a href="#" className={styles.bottomLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
