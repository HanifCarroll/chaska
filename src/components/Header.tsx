"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "+34 600 000 000";

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Robust body scroll lock while mobile menu is open (handles iOS/Safari)
  useEffect(() => {
    if (!open) return;

    const bodyStyle = document.body.style;
    const original = {
      position: bodyStyle.position,
      top: bodyStyle.top,
      overflow: bodyStyle.overflow,
      width: bodyStyle.width,
    };
    const scrollY = window.scrollY;

    bodyStyle.position = "fixed";
    bodyStyle.top = `-${scrollY}px`;
    bodyStyle.overflow = "hidden";
    bodyStyle.width = "100%";

    return () => {
      bodyStyle.position = original.position;
      bodyStyle.top = original.top;
      bodyStyle.overflow = original.overflow;
      bodyStyle.width = original.width;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  // Measure header height to avoid dimming it and size the panel correctly
  useEffect(() => {
    const measure = () => {
      const h = headerRef.current?.offsetHeight ?? 0;
      setHeaderHeight(h);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur border-b border-blue/10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          {/* Left: Brand */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="font-script font-bold text-blue text-4xl md:text-5xl"
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
              type="button"
            >
              <IconHamburger open={open} />
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
            <Link href="/events" className="btn btn-primary">
              Reservar
            </Link>
          </div>
        </div>

        {/* Mobile menu: dropdown panel under header, slides down */}
        <AnimatePresence>
          {open && (
            <>
              {/* Backdrop */}
              <motion.button
                aria-label="Cerrar menú"
                className="md:hidden fixed left-0 right-0 bottom-0 z-[40] bg-foreground/20 backdrop-blur-[1px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onClick={() => setOpen(false)}
                style={{ top: headerHeight }}
              />

              {/* Panel */}
              <motion.aside
                className="md:hidden absolute left-0 right-0 top-full z-[45] bg-background shadow-xl overflow-y-auto overscroll-none border-b border-blue/10"
                role="dialog"
                aria-modal="true"
                initial={{ y: -16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 38,
                  mass: 0.7,
                }}
                style={{ height: `calc(100vh - ${headerHeight}px)` }}
              >
                <div className="px-4 sm:px-6 py-4 grid gap-2 pb-6">
                  <Link
                    href="/"
                    className="type-ui text-lg py-2 text-olive hover:text-blue"
                    onClick={() => setOpen(false)}
                  >
                    Inicio
                  </Link>
                  <Link
                    href="/menu"
                    className="type-ui text-lg py-2 text-olive hover:text-blue"
                    onClick={() => setOpen(false)}
                  >
                    Menú
                  </Link>
                  <div className="pl-3">
                    <Link
                      href="/menu#food"
                      className="type-small text-sm block py-1 text-olive/80 hover:text-blue"
                      onClick={() => setOpen(false)}
                    >
                      Comida
                    </Link>
                    <Link
                      href="/menu#drinks"
                      className="type-small text-sm block py-1 text-olive/80 hover:text-blue"
                      onClick={() => setOpen(false)}
                    >
                      Bebidas
                    </Link>
                  </div>
                  <Link
                    href="/events"
                    className="type-ui text-lg py-2 text-olive hover:text-blue"
                    onClick={() => setOpen(false)}
                  >
                    Eventos
                  </Link>
                  <Link
                    href="/wine-club"
                    className="type-ui text-lg py-2 text-olive hover:text-blue"
                    onClick={() => setOpen(false)}
                  >
                    Club de Vinos
                  </Link>
                  <hr className="my-2 border-blue/10" />
                  <a
                    href={`tel:${PHONE.replace(/\s/g, "")}`}
                    className="type-ui text-lg py-2 text-blue"
                    onClick={() => setOpen(false)}
                  >
                    Llámanos: {PHONE}
                  </a>
                  <Link
                    href="/#visit"
                    className="type-ui text-lg py-2 text-olive hover:text-blue"
                    onClick={() => setOpen(false)}
                  >
                    Cómo llegar
                  </Link>
                  <Link
                    href="/events"
                    className="btn btn-primary w-full mt-2"
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
      <div aria-hidden className="w-full" style={{ height: headerHeight }} />
    </>
  );
}

function IconHamburger({ open }: { open: boolean }) {
  const transition = { type: "spring", stiffness: 700, damping: 40 } as const;
  return (
    <motion.svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <motion.line
        x1="4"
        y1="6"
        x2="20"
        y2="6"
        strokeLinecap="round"
        style={{ transformOrigin: "12px 12px" }}
        animate={open ? { y: 6, rotate: 45 } : { y: 0, rotate: 0 }}
        transition={transition}
      />
      <motion.line
        x1="4"
        y1="12"
        x2="20"
        y2="12"
        strokeLinecap="round"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.line
        x1="4"
        y1="18"
        x2="20"
        y2="18"
        strokeLinecap="round"
        style={{ transformOrigin: "12px 12px" }}
        animate={open ? { y: -6, rotate: -45 } : { y: 0, rotate: 0 }}
        transition={transition}
      />
    </motion.svg>
  );
}
