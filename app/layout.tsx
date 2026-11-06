import "../src/styles/main.scss";
import { DM_Serif_Display, Inter_Tight, Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-accent",
  display: "swap",
});

export const metadata = {
  title: "Tiago Ramos — Portfolio",
  description: "Communication Design, Technology & Art Portfolio Of Tiago Ramos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT">
      <body
        className={`${oswald.variable} ${interTight.variable} ${dmSerifDisplay.variable} site-shell`}
      >
        <header className="site-header">
          <div className="site-header__inner">
            <p className="site-header__title">Tiago Ramos</p>
            <p className="site-header__tagline">Art & Technology</p>
          </div>
        </header>
        <main className="site-main">{children}</main>
        <footer className="site-footer">
          <div className="site-footer__inner site-footer__inner--centered">
            <p className="site-footer__copyright">
              © {new Date().getFullYear()} Tiago Ramos & Cosmic Dust — All rights reserved
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}