import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { HeroVisual } from "@/components/HeroVisual";

const MARQUEE_BRANDS = [
  "Northwind",
  "Vertex",
  "Harbor",
  "Lumina",
  "Forth",
  "Nimbus",
  "Quartz",
  "Pinewood",
] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="noise relative overflow-hidden pt-36 pb-20 sm:pt-44"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(52,211,153,0.14),transparent_55%)]" />
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary-500/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute right-[-100px] top-1/3 h-96 w-96 rounded-full bg-iris-500/15 blur-[120px] animate-float" />
        <div className="grid-fade absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] animate-grid-fade" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-muted transition-colors hover:text-ink"
            >
              <span className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-primary-400/15">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
              </span>
              Introducing Aurelia 2.0
              <span className="text-primary-400 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              The clear path through{" "}
              <span className="text-gradient">every decision</span> your team
              makes
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
              Aurelia unifies your data, surfaces the signal hidden in the
              noise, and turns analysis into action — so your team can move
              with remarkable speed and confidence.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="#" size="lg" withArrow className="w-full sm:w-auto">
                Start free
              </Button>
              <Button
                href="#"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Book a demo
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-5 text-sm text-muted/80">
              Free 14-day trial · No credit card required · Cancel anytime
            </p>
          </Reveal>
        </div>

        {/* Product visual */}
        <Reveal delay={200} className="mt-16 sm:mt-20">
          <HeroVisual />
        </Reveal>

        {/* Logo marquee */}
        <Reveal delay={120}>
          <div className="mt-20">
            <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted/70">
              Trusted by forward-thinking teams
            </p>
            <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <div className="flex w-max animate-marquee gap-14">
                {[...MARQUEE_BRANDS, ...MARQUEE_BRANDS].map((brand, i) => (
                  <span
                    key={`${brand}-${i}`}
                    className="text-lg font-semibold text-ink/40 transition-colors hover:text-primary-400"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
