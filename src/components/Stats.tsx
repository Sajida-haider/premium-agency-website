"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

const STATS = [
  { value: 99.99, decimals: 2, suffix: "%", label: "Uptime SLA" },
  { value: 4.8, decimals: 1, suffix: "/5", label: "Average rating" },
  { value: 12000, decimals: 0, suffix: "+", label: "Companies onboard" },
  { value: 200, decimals: 0, suffix: "+", label: "Integrations" },
] as const;

function StatCard({
  value,
  decimals,
  suffix,
  label,
}: {
  value: number;
  decimals: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState("0");
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1600;
            const start = performance.now();

            const tick = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay((value * eased).toFixed(decimals));
              if (progress < 1) requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, decimals]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {display}
        <span className="text-gradient">{suffix}</span>
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative py-16">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 gap-10 rounded-3xl glass px-6 py-12 lg:grid-cols-4">
            {STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
