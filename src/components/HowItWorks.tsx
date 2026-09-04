import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    step: "01",
    title: "Connect your sources",
    description:
      "Link your tools and data in a few clicks. Aurelia syncs automatically, around the clock.",
  },
  {
    step: "02",
    title: "Let Aurelia surface the signal",
    description:
      "Our models flag what's actually moving and why — in plain language, not jargon.",
  },
  {
    step: "03",
    title: "Act with one click",
    description:
      "Turn any insight into a workflow, alert, or report. Your team stays in flow.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Get results in <span className="text-gradient">three simple steps</span>
            </>
          }
          description="No consultants, no months of onboarding. Go from setup to aha-moment in your first afternoon."
        />

        <div className="relative mt-16 grid gap-10 lg:grid-cols-3 lg:gap-8">
          {/* connector line */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-line to-transparent lg:block"
          />
          {STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 130}>
              <div className="relative text-center lg:text-left">
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-primary-400/25 bg-surface-2 text-lg font-semibold text-primary-300 shadow-[0_0_30px_-6px_rgba(52,211,153,0.6)] lg:mx-0">
                  {s.step}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
