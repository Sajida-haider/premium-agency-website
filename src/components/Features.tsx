import type { SVGProps } from "react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  BarChart,
  Bolt,
  Globe,
  Layers,
  Shield,
} from "@/components/icons";

type Feature = {
  icon: (props: SVGProps<SVGSVGElement>) => React.ReactNode;
  title: string;
  description: string;
  accent: string;
};

const FEATURES: Feature[] = [
  {
    icon: BarChart,
    title: "Unified analytics",
    description:
      "Pull data from every source into a single canvas. No more switching tabs to understand your business.",
    accent: "from-primary-400/20 to-primary-400/5",
  },
  {
    icon: Bolt,
    title: "Workflow automation",
    description:
      "Turn repetitive routines into hands-free automations that trigger the moment the data changes.",
    accent: "from-amber-400/20 to-amber-400/5",
  },
  {
    icon: SparklesIcon,
    title: "AI-powered insights",
    description:
      "Our models surface the signals hiding in your numbers — and tell you what to do about them.",
    accent: "from-iris-400/20 to-iris-400/5",
  },
  {
    icon: Layers,
    title: "Composable dashboards",
    description:
      "Build the exact view your team needs with drag-and-drop blocks. Share it with one link.",
    accent: "from-sky-400/20 to-sky-400/5",
  },
  {
    icon: Shield,
    title: "Enterprise-grade security",
    description:
      "SOC 2 Type II, end-to-end encryption, and granular permissions baked into everything.",
    accent: "from-rose-400/20 to-rose-400/5",
  },
  {
    icon: Globe,
    title: "Integrations everywhere",
    description:
      "Connect 200+ tools in minutes with native integrations and a powerful open API.",
    accent: "from-teal-400/20 to-teal-400/5",
  },
];

function SparklesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.7}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"
      />
    </svg>
  );
}

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title={
            <>
              Everything you need to{" "}
              <span className="text-gradient">move faster</span>
            </>
          }
          description="A complete toolkit designed to remove friction from analysis to action — beautifully simple on the surface, seriously powerful underneath."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 90}>
              <article className="group relative h-full overflow-hidden rounded-3xl glass p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.06]">
                {/* hover glow */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${feature.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-primary-400 transition-all duration-300 group-hover:scale-110 group-hover:border-primary-400/30 group-hover:bg-primary-400/10">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
