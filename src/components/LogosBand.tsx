import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

const LOGOS = [
  "Aurora",
  "Helix",
  "Cobalt",
  "Stratus",
  "Meridian",
  "Oak & Fern",
  "Nexa",
] as const;

/**
 * A quiet social-proof strip of "customer" logos used between sections.
 */
export function LogosBand() {
  return (
    <section className="border-y border-line py-14">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted/70">
            Powering decisions at some of the world&apos;s most ambitious teams
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {LOGOS.map((logo) => (
              <span
                key={logo}
                className="select-none text-xl font-semibold tracking-tight text-ink/30 transition-colors hover:text-ink/60"
              >
                {logo}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
