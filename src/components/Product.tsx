import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Check, Lock } from "@/components/icons";

const PRODUCT_POINTS = [
  {
    title: "Connect in minutes",
    description:
      "Native connectors for your database, CRM, and spreadsheets — no engineering required.",
  },
  {
    title: "Understand at a glance",
    description:
      "Every metric rendered clearly, with intelligent defaults that respect your context.",
  },
  {
    title: "Act without the busywork",
    description:
      "Turn any insight into an automated workflow that updates live as your data changes.",
  },
] as const;

export function Product() {
  return (
    <section id="product" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Product"
          title={
            <>
              From raw data to <span className="text-gradient">decisive action</span>{" "}
              in one place
            </>
          }
          description="Stop stitching together fragile tools. Aurelia is the single surface where your whole team reads, understands, and acts on what matters."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy + points */}
          <div>
            <div className="space-y-8">
              {PRODUCT_POINTS.map((point, i) => (
                <Reveal key={point.title} delay={i * 100} direction="right">
                  <div className="flex gap-4">
                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-400/15">
                      <Check className="h-4 w-4 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ink">
                        {point.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={300}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="#" size="lg" withArrow>
                  Explore the product
                </Button>
                <span className="flex items-center gap-1.5 pl-1 text-sm text-muted">
                  <Lock className="h-4 w-4 text-muted/70" />
                  Secure by default, SOC 2
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right: visual panel */}
          <Reveal direction="left" delay={150}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-iris-500/15 to-primary-500/15 blur-2xl"
              />
              <div className="overflow-hidden rounded-3xl glass">
                <div className="border-b border-line px-5 py-3 text-sm text-muted">
                  Recommended actions
                </div>
                <div className="space-y-3 p-5">
                  {[
                    {
                      tag: "High impact",
                      action: "Re-engage 1,240 weekly churn-risk customers",
                      meta: "Automation ready",
                    },
                    {
                      tag: "Forecast",
                      action: "Q3 revenue trending 18% above target",
                      meta: "Updated 2h ago",
                    },
                    {
                      tag: "Alert",
                      action: "Conversion dipped 3% on the pricing page",
                      meta: "Anomaly detected",
                    },
                  ].map((row) => (
                    <div
                      key={row.action}
                      className="group flex items-center justify-between gap-4 rounded-2xl bg-white/[0.03] p-4 transition-colors hover:bg-white/[0.06]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-primary-400" />
                        <div>
                          <p className="text-sm font-medium text-ink">
                            {row.action}
                          </p>
                          <p className="mt-0.5 text-xs text-muted">{row.meta}</p>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-full border border-primary-400/20 bg-primary-400/10 px-2.5 py-1 text-[11px] font-medium text-primary-300">
                        {row.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
