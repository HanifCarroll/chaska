"use client";

import Link from "next/link";
import { useState } from "react";

const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "+34 600 000 000";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-blue/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        {/* Left: Brand */}
        <div className="flex items-center gap-6">
          <button
            className="md:hidden p-2 rounded border border-blue/20 text-blue"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <IconX /> : <IconMenu />}
          </button>

          <Link href="/" className="font-script font-bold text-blue text-3xl md:text-4xl" aria-label="Chaska Home">
            Chaska
          </Link>
        </div>

        {/* Center: Main nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="type-ui text-olive hover:text-blue transition-colors">Home</Link>
          <Link href="/menu" className="type-ui text-olive hover:text-blue transition-colors">Menu</Link>
          <Link href="/events" className="type-ui text-olive hover:text-blue transition-colors">Events</Link>
          <Link href="/wine-club" className="type-ui text-olive hover:text-blue transition-colors">Wine Club</Link>
        </nav>

        {/* Right: CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="type-ui text-olive hover:text-blue transition-colors">
            Call
          </a>
          <Link
            href="/events"
            className="type-ui rounded-full border border-blue/40 text-blue hover:bg-blue hover:text-white transition-colors px-4 py-2"
          >
            Book
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-blue/10 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 grid gap-2">
            <Link href="/" className="type-ui py-2 text-olive hover:text-blue" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/menu" className="type-ui py-2 text-olive hover:text-blue" onClick={() => setOpen(false)}>
              Menu
            </Link>
            <div className="pl-3">
              <a href="/menu#food" className="type-small block py-1 text-olive/80 hover:text-blue" onClick={() => setOpen(false)}>
                Food
              </a>
              <a href="/menu#drinks" className="type-small block py-1 text-olive/80 hover:text-blue" onClick={() => setOpen(false)}>
                Drinks
              </a>
            </div>
            <Link href="/events" className="type-ui py-2 text-olive hover:text-blue" onClick={() => setOpen(false)}>
              Events
            </Link>
            <Link href="/wine-club" className="type-ui py-2 text-olive hover:text-blue" onClick={() => setOpen(false)}>
              Wine Club
            </Link>
            <hr className="my-2 border-blue/10" />
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="type-ui py-2 text-blue" onClick={() => setOpen(false)}>
              Call Us: {PHONE}
            </a>
            <a href="/#visit" className="type-ui py-2 text-olive hover:text-blue" onClick={() => setOpen(false)}>
              Find Us
            </a>
            <Link href="/events" className="type-ui py-2 rounded-full text-center bg-blue text-white mt-2" onClick={() => setOpen(false)}>
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 6l12 12M18 6l-12 12" />
    </svg>
  );
}
