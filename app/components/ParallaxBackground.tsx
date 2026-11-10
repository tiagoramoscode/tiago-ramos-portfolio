"use client";

import { useEffect, useRef } from "react";
import heroDesktop from "../../src/images/hero-2400.webp";
import heroMobile from "../../src/images/hero-1080.webp";

export function ParallaxBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = backgroundRef.current;
    const page = background?.parentElement;
    if (!background || !page) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const updatePosition = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (reduceMotion.matches) {
          background.style.setProperty("--parallax-offset", "0px");
          return;
        }

        const pageTop = page.getBoundingClientRect().top + window.scrollY;
        const scrollWithinPage = Math.max(0, window.scrollY - pageTop);
        background.style.setProperty(
          "--parallax-offset",
          `${-scrollWithinPage * 0.18}px`,
        );
      });
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);
    reduceMotion.addEventListener("change", updatePosition);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
      reduceMotion.removeEventListener("change", updatePosition);
    };
  }, []);

  return (
    <div aria-hidden="true" className="portfolio-page__background" ref={backgroundRef}>
      <picture className="portfolio-page__picture">
        <source media="(max-width: 768px)" srcSet={heroMobile.src} />
        {/* eslint-disable-next-line @next/next/no-img-element -- Pre-optimized background images bypass the Next.js image optimizer. */}
        <img
          alt=""
          decoding="async"
          fetchPriority="high"
          height={heroDesktop.height}
          src={heroDesktop.src}
          width={heroDesktop.width}
        />
      </picture>
      <div className="portfolio-page__overlay" />
    </div>
  );
}
