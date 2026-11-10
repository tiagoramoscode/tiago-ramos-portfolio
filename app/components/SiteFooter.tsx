"use client";

import { useEffect, useState } from "react";

export function SiteFooter() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateVisibility = () => {
      const { scrollHeight } = document.documentElement;
      const atTop = window.scrollY <= 1;
      const atBottom =
        window.scrollY + window.innerHeight >= scrollHeight - 4;
      setIsVisible(atTop || atBottom);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <footer
      aria-hidden={!isVisible}
      className={`site-footer${isVisible ? " site-footer--visible" : ""}`}
    >
      <p className="site-footer__copyright">
        © {new Date().getFullYear()} Tiago Ramos &amp; Cosmic Dust — All rights reserved
      </p>
    </footer>
  );
}
