"use client";

import { Container } from "@/components/ui/container";
import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";

const counters = [
  { target: 12400, label: "Culture Citizens Activated", suffix: "+" },
  { target: 84, label: "Marketplace Transactions", prefix: "₦", suffix: "M+" },
  { target: 340, label: "Tokens Circulated", suffix: "K+" },
  { target: 127, label: "Creative Ventures Funded" },
  { target: 23, label: "Festival Events" },
  { target: 8500, label: "Trees Pledged", suffix: "+" }
];

export function ImpactCounters() {
  return (
    <section className="bg-green-900 py-[var(--section-py)]">
      <Container>
        <Reveal>
          <p className="mb-12 text-center font-display text-section-title text-white">
            Building cultural infrastructure with measurable momentum.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-10 gap-y-14 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-8">
          {counters.map((counter, i) => (
            <Reveal key={counter.label} delay={i * 0.08}>
              <div className="text-center">
                <p className="font-display text-3xl font-semibold leading-none text-gold-500 sm:text-4xl lg:text-[2.5rem]">
                  <Counter
                    target={counter.target}
                    prefix={counter.prefix}
                    suffix={counter.suffix}
                  />
                </p>
                <p className="mt-4 text-sm leading-snug text-white/90">
                  {counter.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
