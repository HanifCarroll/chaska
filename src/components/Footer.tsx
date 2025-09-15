import Link from "next/link";

const PHONE = process.env.NEXT_PUBLIC_PHONE;
const IG_HANDLE = process.env.NEXT_PUBLIC_IG || "chaska.ba";
const IG_URL = `https://instagram.com/${IG_HANDLE}`;
const MAPS_URL =
  "https://maps.google.com/?q=Concepción%20Arenal%203997%20CABA%20Chacarita";

export default function Footer() {
  return (
    <footer id="visit" className="mt-16 bg-blue text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        {/* Top row: brand left, contact right */}
        <div className="grid gap-6 md:gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-script text-3xl md:text-4xl leading-none"
            >
              Chaska
            </Link>
            <div className="mt-4">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="type-small text-white/80 link-underline hover:text-gold transition-colors inline-block"
              >
                Concepción Arenal 3997, Chacarita — CABA
              </a>
            </div>
            <div className="mt-2">
              <a
                href={`tel:${PHONE}`}
                className="type-small text-white/80 link-underline hover:text-gold transition-colors inline-block"
              >
                {PHONE}
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="md:text-right space-y-2">
            <div className="mt-3">
              <ul className="mt-1 space-y-1 type-small text-white/70">
                <li className="flex items-center justify-between gap-6">
                  <span>Lunes</span>
                  <span>12:30–15 h</span>
                </li>
                <li className="flex items-center justify-between gap-6">
                  <span>Martes</span>
                  <span>12:30–15 h</span>
                </li>
                <li className="flex items-center justify-between gap-6">
                  <span>Miércoles</span>
                  <span>12:30–15 h</span>
                </li>
                <li className="flex items-center justify-between gap-6">
                  <span>Jueves</span>
                  <span>12:30–15 h</span>
                </li>
                <li className="flex items-center justify-between gap-6">
                  <span>Viernes</span>
                  <span>12:30–15 h</span>
                </li>
                <li className="flex items-center justify-between gap-6">
                  <span>Sábado</span>
                  <span>Cerrado</span>
                </li>
                <li className="flex items-center justify-between gap-6">
                  <span>Domingo</span>
                  <span>Cerrado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Centered Instagram icon */}
        <nav className="mt-6 md:mt-8">
          <div className="flex items-center justify-center">
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/90 hover:text-gold"
            >
              <InstagramIcon className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </nav>

        <div className="mt-10 md:mt-12 border-t border-white/10 pt-6 flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between md:gap-4">
          <p className="type-small text-white/60">
            © {new Date().getFullYear()} Chaska
          </p>
          <p className="type-small text-white/50">
            Hecho con cariño — Buenos Aires
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      focusable="false"
    >
      <title>Instagram icon</title>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
