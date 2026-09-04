import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Star } from "@/components/icons";

const TESTIMONIALS = [
  {
    quote:
      "Aurelia replaced three tools for us. Our team finally sees the same numbers and argues a lot less.",
    name: "Sarah Chen",
    role: "VP of Growth, Northwind",
    initials: "SC",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    quote:
      "The AI insights are uncanny. It flagged a pricing issue the day before our week dipped. Genuinely saved us months.",
    name: "Marcus Reid",
    role: "COO, Vertex",
    initials: "MR",
    gradient: "from-iris-400 to-fuchsia-500",
  },
  {
    quote:
      "Setup took an afternoon. By Friday the whole company was using it. Beautifully designed and genuinely powerful.",
    name: "Aisha Bello",
    role: "Head of Data, Harbor",
    initials: "AB",
    gradient: "from-sky-400 to-indigo-500",
  },
  {
    quote:
      "We went from reactive to proactive. Aurelia's automations run while we sleep. It just works.",
    name: "Tom Okafor",
    role: "Founder, Lumina",
    initials: "TO",
    gradient: "from-amber-400 to-orange-500",
  },
] as const;

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Loved by teams"
          title={
            <>
              Don&apos;t take our word for it
            </>
          }
          description="Thousands of modern teams rely on Aurelia to make their big calls with clarity and speed."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 100}>
              <figure className="flex h-full flex-col justify-between rounded-3xl glass p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4" />
                    ))}
                  </div>
                  <blockquote className="mt-5 text-lg leading-relaxed text-ink/90">
                    “{t.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-7 flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-sm font-semibold text-background`}
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
