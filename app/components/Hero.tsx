import heroDesktop from "../../src/images/hero-2400.webp";
import heroMobile from "../../src/images/hero-1080.webp";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <picture className="hero__media">
        <source media="(max-width: 768px)" srcSet={heroMobile.src} />
        {/* eslint-disable-next-line @next/next/no-img-element -- These pre-optimized images must bypass the Next.js image optimizer. */}
        <img
          src={heroDesktop.src}
          width={heroDesktop.width}
          height={heroDesktop.height}
          fetchPriority="high"
          decoding="async"
          alt="Nuvem Grande de Magalhães captada pelo telescópio Hubble"
        />
      </picture>
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__content">
        <h1 className="hero__title" id="hero-title">
          TÍTULO AQUI
        </h1>
        <p className="hero__statement">FRASE INSPIRADORA AQUI</p>
        <p className="hero__description">TEXTO AQUI</p>
      </div>
    </section>
  );
}
