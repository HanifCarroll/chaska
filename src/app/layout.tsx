import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Gloock, Dancing_Script } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// Fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const gloock = Gloock({
  variable: "--font-gloock",
  subsets: ["latin"],
  // Gloock provides a regular weight; heavier styles will be faux-weighted by the browser
  weight: ["400"],
  display: "swap",
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chaska — Milanesas de autor y cocina de mundo",
  description:
    "Tu punto de encuentro en Chacarita: milanesas de autor, tacos de mochella y papas wagyu. Ingredientes argentinos con influencias del mundo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${plexMono.variable} ${gloock.variable} ${dancing.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
