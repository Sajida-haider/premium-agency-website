"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";

const FAQS = [
  {
    question: "How long does it take to get set up?",
    answer:
      "Most teams are up and running in under an hour. Connect a few sources, and Aurelia starts surfacing insights immediately. No implementation project required.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Aurelia is SOC 2 Type II certified, encrypts data in transit and at rest, and offers granular permissions and SSO. We never sell or share your data.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. Upgrade, downgrade, or cancel whenever you like from your dashboard. There are no contracts on Starter or Growth plans.",
  },
  {
    question: "Does Aurelia integrate with my tools?",
    answer:
      "Aurelia ships with 200+ native integrations covering databases, CRMs, marketing, and engineering tools. Anything missing can be connected through our open API.",
  },
  {
    question: "What does the AI actually do?",
    answer:
      "Aurelia's models continuously analyze your data to detect anomalies, find opportunities, and summarize what matters in plain language — then help you act on it.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Everything you need to know about getting started with Aurelia. Can't find what you're looking for? Reach out to our team."
        />

        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {FAQS.map((faq, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={faq.question} delay={i * 60}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-colors",
                    open
                      ? "border-primary-400/25 bg-white/[0.04]"
                      : "border-transparent bg-white/[0.02] hover:bg-white/[0.04]"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-medium text-ink">
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full glass text-muted transition-transform duration-300",
                        open && "rotate-45 text-primary-400"
                      )}
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="h-3.5 w-3.5"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
