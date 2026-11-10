import Image from "next/image";
import { Hero } from "@/components/Hero";
import { CustomMenuSections } from "@/components/CustomMenuSections";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import cepheus from "../../src/images/Hubble_CepheusA_1_Vmix_FINAL.jpg";
import magellanicCloud from "../../src/images/Hubble_LMC_L95_3F_flat_FINAL.jpeg";
import saturn from "../../src/images/Saturn 8_24.png";

const portfolioCards = [
  {
    title: "Identidade & sistemas visuais",
    category: "Design de comunicação",
    image: cepheus,
    alt: "Nebulosa iluminada em tons de azul e dourado",
  },
  {
    title: "Experiências digitais",
    category: "Tecnologia criativa",
    image: magellanicCloud,
    alt: "Campo de estrelas na Grande Nuvem de Magalhães",
  },
  {
    title: "Arte & experimentação",
    category: "Exploração visual",
    image: saturn,
    alt: "Saturno e os seus anéis contra um fundo escuro",
  },
];

export function PortfolioContent() {
  return (
    <div className="portfolio-page">
      <ParallaxBackground />
      <div className="portfolio-page__content">
        <Hero />

        <section
          aria-labelledby="about-title"
          className="section portfolio-section"
          id="about"
        >
          <div className="section__inner portfolio-section__intro">
            <p className="portfolio-section__eyebrow">01 / Sobre</p>
            <h2 id="about-title">Criatividade com intenção.</h2>
            <p>
              Sou um profissional multidisciplinar que liga comunicação,
              design e tecnologia. O meu processo começa por ouvir, compreender
              o contexto e encontrar a forma mais clara de dar vida a cada ideia.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="work-title"
          className="section portfolio-section portfolio-section--work"
          id="work"
        >
          <div className="section__inner">
            <p className="portfolio-section__eyebrow">02 / Projetos</p>
            <h2 id="work-title">Um olhar sobre o que é possível.</h2>
            <p className="portfolio-section__lead">
              Uma seleção de áreas de trabalho — personalize estes exemplos com
              os seus projetos, imagens e resultados.
            </p>
            <div className="portfolio-grid">
              {portfolioCards.map((card) => (
                <article className="portfolio-card" key={card.title}>
                  <div className="portfolio-card__image">
                    <Image
                      alt={card.alt}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                      src={card.image}
                    />
                  </div>
                  <p className="portfolio-card__category">{card.category}</p>
                  <h3>{card.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="services-title"
          className="section portfolio-section"
          id="services"
        >
          <div className="section__inner">
            <p className="portfolio-section__eyebrow">03 / Serviços</p>
            <h2 id="services-title">Da primeira conversa ao resultado.</h2>
            <div className="service-list">
              <article>
                <span>01</span>
                <h3>Estratégia &amp; direção</h3>
                <p>Clarificar o desafio, definir prioridades e criar uma visão partilhada.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Design &amp; comunicação</h3>
                <p>Construir identidades e experiências consistentes, pensadas para pessoas.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Prototipagem &amp; tecnologia</h3>
                <p>Transformar conceitos em produtos digitais e experiências funcionais.</p>
              </article>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="contact-title"
          className="section portfolio-section portfolio-section--contact"
          id="contact"
        >
          <div className="section__inner">
            <p className="portfolio-section__eyebrow">04 / Contacto</p>
            <h2 id="contact-title">Vamos criar algo com significado.</h2>
            <p>
              Tem uma ideia, um desafio ou uma colaboração em mente? Vamos
              conversar.
            </p>
            <a className="portfolio-contact-link" href="mailto:hello@tiagoramos.pt">
              hello@tiagoramos.pt
            </a>
          </div>
        </section>
        <CustomMenuSections />
      </div>
    </div>
  );
}
