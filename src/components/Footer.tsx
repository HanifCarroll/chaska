import Link from "next/link";

const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "+34 600 000 000";
const IG_HANDLE = process.env.NEXT_PUBLIC_INSTAGRAM ?? "chaska.restaurant";
const IG_URL = `https://instagram.com/${IG_HANDLE.replace(/^@/, "")}`;

export default function Footer() {
  return (
    <footer id="visit" className="mt-16 bg-blue text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1.2fr] md:items-start">
          {/* Brand */}
          <div>
            <Link href="/" className="font-script text-4xl leading-none">
              Chaska
            </Link>
            <p className="type-small mt-3 text-white/70 max-w-sm">
              Concepción Arenal 3997, Chacarita — CABA
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col md:items-center gap-2">
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <Link href="/" className="type-ui text-white/85 hover:text-gold">
                Home
              </Link>
              <span className="type-ui text-white/30">|</span>
              <Link
                href="/menu"
                className="type-ui text-white/85 hover:text-gold"
              >
                Menu
              </Link>
              <span className="type-ui text-white/30">|</span>
              <Link
                href="/events"
                className="type-ui text-white/85 hover:text-gold"
              >
                Events
              </Link>
              <span className="type-ui text-white/30">|</span>
              <Link
                href="/wine-club"
                className="type-ui text-white/85 hover:text-gold"
              >
                Wine Club
              </Link>
              <span className="type-ui text-white/30">|</span>
              <Link
                href="/events"
                className="type-ui text-white/85 hover:text-gold"
              >
                Book
              </Link>
            </div>
          </nav>

          {/* Contact */}
          <div className="md:text-right space-y-2">
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="type-ui text-white/85 hover:text-gold block"
            >
              {PHONE}
            </a>
            <div className="flex md:justify-end items-center gap-3">
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/85 hover:text-gold"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://maps.google.com/?q=Concepción%20Arenal%203997%20CABA%20Chacarita"
                target="_blank"
                rel="noopener noreferrer"
                className="type-ui text-white/70 hover:text-gold"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="type-small text-white/50">
            © {new Date().getFullYear()} Chaska
          </p>
          <p className="type-small text-white/40">
            Made with care — Buenos Aires
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
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
