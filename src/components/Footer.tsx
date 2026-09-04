import { Logo } from "@/components/Logo";
import { GitHub, LinkedIn, XSocial } from "@/components/icons";

const FOOTER_COLS = [
  {
    heading: "Product",
    links: ["Overview", "Features", "Security", "Integrations", "Pricing"],
  },
  {
    heading: "Company",
    links: ["About", "Blog", "Careers", "Press", "Contact"],
  },
  {
    heading: "Resources",
    links: ["Documentation", "Guides", "API reference", "Changelog", "Status"],
  },
  {
    heading: "Legal",
    links: ["Privacy", "Terms", "Security", "Cookies"],
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface/40">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-12 py-16 md:grid-cols-[1.5fr_2fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Intelligence for modern teams. We help ambitious companies turn
              scattered data into clear, decisive action.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href="#"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl glass text-muted transition-all hover:text-ink hover:border-white/20"
              >
                <GitHub className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl glass text-muted transition-all hover:text-ink hover:border-white/20"
              >
                <LinkedIn className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl glass text-muted transition-all hover:text-ink hover:border-white/20"
              >
                <XSocial className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {FOOTER_COLS.map((col) => (
              <div key={col.heading}>
                <h3 className="text-sm font-semibold text-ink">{col.heading}</h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted transition-colors hover:text-primary-400"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {year} Aurelia Labs, Inc. All rights reserved.
          </p>
          <p className="text-xs text-muted/70">
            Designed with care · Crafted for modern teams
          </p>
        </div>
      </div>
    </footer>
  );
}
