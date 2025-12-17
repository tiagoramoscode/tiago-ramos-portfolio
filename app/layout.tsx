import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tiago Ramos — Portfolio",
  description: "Communication Design, Technology & Art Portfolio Of Tiago Ramos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 min-h-screen flex flex-col`}>
        <header className="border-b border-zinc-800">
          <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-xl font-semibold tracking-wide">Tiago Ramos</h1>
            <p className="text-sm text-zinc-400">Art & Technology</p>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-zinc-800">
          <div className="max-w-5xl mx-auto p-4 text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} Tiago Ramos & Cosmic Dust — All rights reserved
          </div>
        </footer>
      </body>
    </html>
  );
}