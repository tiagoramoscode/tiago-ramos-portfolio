import { Button } from "@/components/Button";

export default function Home() {
  return (
    <section className="section section--dark hero">
      <div className="section__inner section__inner--centered">
        <h2 className="hero__title">Artistic Vision Meets Code.</h2>
        <p className="hero__description">
          Exploring the intersection between art, design, and technology — where ideas
          become experiences.
        </p>
        <Button href="https://www.behance.net/cosmic-dust">View Portfolio</Button>
      </div>
    </section>
  );
}