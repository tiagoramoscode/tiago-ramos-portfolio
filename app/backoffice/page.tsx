import { MenuTitleManager } from "@/components/MenuTitleManager";

export default function BackofficePage() {
  return (
    <div className="backoffice">
      <div className="backoffice__inner">
        <p className="portfolio-section__eyebrow">Backoffice / Navegação</p>
        <h1>Gerir títulos do menu</h1>
        <p className="backoffice__intro">
          Crie e remova títulos de navegação. Cada título cria também uma secção
          correspondente na página inicial, pronta para receber conteúdo.
        </p>
        <MenuTitleManager />
        <p className="backoffice__note">
          Protótipo local: as alterações ficam guardadas neste navegador. Esta
          página ainda não tem autenticação nem gravação no servidor.
        </p>
      </div>
    </div>
  );
}
