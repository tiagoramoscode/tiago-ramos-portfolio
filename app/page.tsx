import { Button } from "@/components/Button";

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20 text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
        Artistic Vision Meets Code.
      </h2>
      <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
        Exploring the intersection between art, design, and technology — where ideas
        become experiences.
      </p>
      <Button href="https://www.behance.net/cosmic-dust">View Portfolio</Button>
    </section>
  );
}