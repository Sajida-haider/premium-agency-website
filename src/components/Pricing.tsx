import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Check } from "@/components/icons";
import { cn } from "@/lib/cn";

type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    description: "For individuals exploring what's possible.",
    cta: "Start for free",
    features: [
      "Up to 3 data sources",
      "5 dashboards",
      "Weekly AI insights",
      "Community support",
    ],
  },
  {
    name: "Growth",
    price: "$49",
    period: "/mo",
    description: "For teams ready to scale their decision-making.",
    cta: "Start 14-day trial",
    highlight: true,
    features: [
      "Unlimited data sources",
      "Unlimited dashboards",
      "Daily AI insights",
      "Workflow automations",
      "Priority support",
      "SSO & advanced permissions",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with advanced needs.",
    cta: "Talk to sales",
    features: [
      "Everything in Growth",
      "Dedicated success manager",
      "Custom integrations",
      "SLA & compliance",
      "On-prem / VPC deployment",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Simple pricing that <span className="text-gradient">scales with you</span>
            </>
          }
          description="Start free, upgrade when you're ready. No hidden fees, no surprise invoices."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 110}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300",
                  plan.highlight
                    ? "border border-primary-400/30 bg-gradient-to-b from-primary-500/10 to-transparent shadow-[0_0_50px_-12px_rgba(52,211,153,0.5)] lg:-translate-y-3"
                    : "glass hover:-translate-y-1"
                )}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-400 to-teal-400 px-4 py-1 text-xs font-semibold text-background">
                    Most popular
                  </span>
                )}

                <h3 className="text-lg font-semibold text-ink">{plan.name}</h3>
                <p className="mt-1.5 text-sm text-muted">{plan.description}</p>

                <div className="mt-6 flex items-end gap-1">
                  <span className="text-4xl font-semibold tracking-tight text-ink">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="mb-1 text-sm text-muted">{plan.period}</span>
                  )}
                </div>

                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span
                        className={cn(
                          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                          plan.highlight
                            ? "bg-primary-400/20"
                            : "bg-white/8"
                        )}
                      >
                        <Check
                          className={cn(
                            "h-3 w-3",
                            plan.highlight ? "text-primary-300" : "text-primary-400"
                          )}
                        />
                      </span>
                      <span className="text-sm text-ink/85">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    href="#"
                    variant={plan.highlight ? "primary" : "secondary"}
                    size="lg"
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
