import "../src/styles/main.scss";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
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
        <SiteHeader />
        <main className="site-main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}