import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { ArrowRight } from "@/components/icons";

export function CTA() {
  return (
    <section className="relative py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="noise relative overflow-hidden rounded-[2.5rem] border border-primary-400/20 px-6 py-16 text-center sm:px-12 sm:py-20">
            {/* Background */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-surface to-iris-500/20" />
              <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-400/20 blur-[100px]" />
              <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-iris-500/20 blur-[100px]" />
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-300">
              Get started
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Ready to see your data{" "}
              <span className="text-gradient">differently?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-muted">
              Join thousands of teams who stopped guessing and started acting.
              Your first insight is minutes away.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="#" size="lg" withArrow className="w-full sm:w-auto">
                Start your free trial
              </Button>
              <Button
                href="#"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Talk to an expert
              </Button>
            </div>

            <p className="mt-5 flex items-center justify-center gap-1.5 text-sm text-muted">
              <ArrowRight className="h-4 w-4 text-primary-400" />
              Free 14-day trial · No credit card required
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
