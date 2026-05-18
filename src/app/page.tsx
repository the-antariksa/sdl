"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Logistic from "@/components/Logistic";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Lock body scroll until expanded
  useEffect(() => {
    if (!isExpanded) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [isExpanded]);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  return (
    <main>
      <Navbar />
      <Hero onExpand={handleExpand} isExpanded={isExpanded} />

      {/* Content sections - only rendered after expand */}
      <div
        style={{
          opacity: isExpanded ? 1 : 0,
          transform: isExpanded ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <Marquee />
        <About />
        <Stats />
        <Services />
        <Logistic />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
