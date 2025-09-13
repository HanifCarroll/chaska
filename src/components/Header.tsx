"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-blue/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#menu" className="type-ui text-olive hover:text-blue transition-colors">Menu</Link>
          <Link href="#story" className="type-ui text-olive hover:text-blue transition-colors">Our Story</Link>
          <Link href="#visit" className="type-ui text-olive hover:text-blue transition-colors">Visit Us</Link>
        </nav>

        <Link href="/" className="font-script font-bold text-blue text-3xl md:text-4xl" aria-label="Chaska Home">
          Chaska
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="#order"
            className="type-ui rounded-full border border-blue/40 text-blue hover:bg-blue hover:text-white transition-colors px-4 py-2"
          >
            Order Online
          </Link>
          <Link
            href="#reserve"
            className="type-ui rounded-full border border-olive/30 text-olive hover:bg-olive hover:text-white transition-colors px-4 py-2 hidden sm:inline-flex"
          >
            Reserve
          </Link>
        </div>
      </div>
    </header>
  );
}
