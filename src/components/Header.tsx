"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "+34 600 000 000";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-blue/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        {/* Left: Brand */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="font-script font-bold text-blue text-3xl md:text-4xl"
            aria-label="Inicio de Chaska"
          >
            Chaska
          </Link>
        </div>

        {/* Center: Main nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="type-ui nav-link text-olive hover:text-blue transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="/menu"
            className="type-ui nav-link text-olive hover:text-blue transition-colors"
          >
            Menú
          </Link>
          <Link
            href="/events"
            className="type-ui nav-link text-olive hover:text-blue transition-colors"
          >
            Eventos
          </Link>
          <Link
            href="/wine-club"
            className="type-ui nav-link text-olive hover:text-blue transition-colors"
          >
            Club de Vinos
          </Link>
        </nav>

        {/* Mobile toggle (right) */}
        <div className="md:hidden">
          <button
            className="p-2 rounded border border-blue/20 text-blue"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen(!open)}
          >
            <IconMenu />
          </button>
        </div>

        {/* Right: CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="type-ui text-olive hover:text-blue transition-colors"
          >
            Llamar
          </a>
          <Link
            href="/events"
            className="type-ui rounded-full border border-blue/40 text-blue hover:bg-blue hover:text-white transition-colors px-4 py-2"
          >
            Reservar
          </Link>
        </div>
      </div>

      {/* Mobile menu: overlay slide-in from right */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.button
              aria-label="Cerrar menú"
              className="md:hidden fixed inset-0 z-[40] bg-foreground/20 backdrop-blur-[1px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.aside
              className="md:hidden fixed inset-0 z-[70] h-screen w-full bg-background shadow-xl overflow-y-auto overscroll-none"
              role="dialog"
              aria-modal="true"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 420,
                damping: 38,
                mass: 0.7,
              }}
            >
              <div className="px-4 sm:px-6 py-4 flex items-center justify-between border-b border-blue/10">
                <Link
                  href="/"
                  className="font-script font-bold text-blue text-2xl"
                  onClick={() => setOpen(false)}
                >
                  Chaska
                </Link>
                <button
                  className="p-2 rounded border border-blue/20 text-blue"
                  aria-label="Cerrar menú"
                  onClick={() => setOpen(false)}
                >
                  <IconX />
                </button>
              </div>

              <div className="px-4 sm:px-6 py-4 grid gap-2">
                <Link
                  href="/"
                  className="type-ui py-2 text-olive hover:text-blue"
                  onClick={() => setOpen(false)}
                >
                  Inicio
                </Link>
                <Link
                  href="/menu"
                  className="type-ui py-2 text-olive hover:text-blue"
                  onClick={() => setOpen(false)}
                >
                  Menú
                </Link>
                <div className="pl-3">
                  <a
                    href="/menu#food"
                    className="type-small block py-1 text-olive/80 hover:text-blue"
                    onClick={() => setOpen(false)}
                  >
                    Comida
                  </a>
                  <a
                    href="/menu#drinks"
                    className="type-small block py-1 text-olive/80 hover:text-blue"
                    onClick={() => setOpen(false)}
                  >
                    Bebidas
                  </a>
                </div>
                <Link
                  href="/events"
                  className="type-ui py-2 text-olive hover:text-blue"
                  onClick={() => setOpen(false)}
                >
                  Eventos
                </Link>
                <Link
                  href="/wine-club"
                  className="type-ui py-2 text-olive hover:text-blue"
                  onClick={() => setOpen(false)}
                >
                  Club de Vinos
                </Link>
                <hr className="my-2 border-blue/10" />
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="type-ui py-2 text-blue"
                  onClick={() => setOpen(false)}
                >
                  Llámanos: {PHONE}
                </a>
                <a
                  href="/#visit"
                  className="type-ui py-2 text-olive hover:text-blue"
                  onClick={() => setOpen(false)}
                >
                  Cómo llegar
                </a>
                <Link
                  href="/events"
                  className="type-ui py-2 rounded-full text-center bg-blue text-white mt-2"
                  onClick={() => setOpen(false)}
                >
                  Reservar ahora
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

function IconMenu() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function IconX() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M6 6l12 12M18 6l-12 12" />
    </svg>
  );
}
