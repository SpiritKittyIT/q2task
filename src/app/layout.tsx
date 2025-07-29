import type { Metadata } from "next";
import { Roboto, Lora } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { NavBar } from "./navbar";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Q2 task",
  description: "Made for Q2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${lora.variable}`}>
      <body className="font-[var(--font-lora)] text-[var(--text-primary)] bg-[var(--background)] min-h-screen flex flex-col">
        <header className="bg-[var(--backdrop)] text-[var(--text-inverse)] font-[var(--font-roboto)] px-10 py-4 flex justify-between items-center absolute top-0 w-full z-10">
          <Image
            src="/q2_logo_white1.png"
            alt="Q2 logo"
            width={81}
            height={54}
            priority
          />
          <NavBar />
        </header>

        <main className="flex-auto">
          {children}
        </main>

        <footer className="bg-[var(--inverse-background)] text-[var(--text-inverse)] p-7 text-sm">
          2025 | Q2 Interactive s.r.o.
        </footer>
      </body>
    </html>
  );
}
