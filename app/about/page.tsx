import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { StoryCard } from "@/components/ui/story-card";

export const metadata = {
  title: "About",
  description:
    "Learn how ReelPepper Africa is redefining culture as economic sovereignty across the continent."
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About ReelPepper Africa"
        title="Redefining Culture as Economic Sovereignty"
        description="ReelPepper Africa is a pan-African creative economy platform that turns cultural participation into structured economic returns."
        backgroundImage="/hero-about-woman.png"
      />

      {/* Vision Statement */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="prose-container">
              <p className="text-body-lg text-warm-600">
                What if culture was not just identity — but infrastructure? What if every song, every
                fabric, every festival was not a spectacle to be consumed, but an engine to be invested
                in?
              </p>
              <p className="text-body-lg text-warm-600">
                ReelPepper Africa exists to answer that question. We are building the economic layer
                beneath Africa&apos;s creative power — a unified ecosystem where culture creates value,
                circulation, and impact at continental scale.
              </p>
              <div className="my-8 border-l-4 border-gold-500 pl-6">
                <p className="text-body-lg text-warm-900 italic">
                  &ldquo;This is not charity. It is not donation. It is not aid. It is structured
                  economic participation in the world&apos;s most culturally rich continent.&rdquo;
                </p>
              </div>
              <p className="text-body-lg text-warm-600">
                The African creative economy represents a $1T addressable market across 500+ cultural
                tribes. ReelPepper Africa is the infrastructure that connects creation to commerce,
                commerce to finance, and finance back to impact.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-card">
              <Image
                src="/hero-about-woman.png"
                alt="Woman in vibrant African-inspired fashion."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Ecosystem Cycle */}
      <Section variant="alt">
        <SectionHeading
          eyebrow="The Ecosystem Cycle"
          title="Creation to Commerce to Impact — and back again."
          description="Every element of the ReelPepper ecosystem feeds the next, creating a self-sustaining cycle of cultural value."
        />
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-5">
            {[
              { step: "01", label: "Creation", desc: "Culture is produced by creators across the continent" },
              { step: "02", label: "Commerce", desc: "Products and experiences enter the marketplace" },
              { step: "03", label: "Tokenization", desc: "Participation is captured as digital value" },
              { step: "04", label: "Finance", desc: "Value flows back to fund new creative ventures" },
              { step: "05", label: "Impact", desc: "Returns are redistributed to health, education, and sustainability" }
            ].map((item, i) => (
              <div
                key={item.label}
                className="flex flex-col items-center rounded-card border border-warm-100 bg-white p-5 text-center"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-100 font-display text-sm font-semibold text-gold-900">
                  {item.step}
                </span>
                <h3 className="mt-3 font-body text-card-title text-warm-900">{item.label}</h3>
                <p className="mt-1 text-small text-warm-600">{item.desc}</p>
                {i < 4 && (
                  <ArrowRight className="mt-3 hidden h-4 w-4 text-gold-500 sm:block" />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Mission / Vision / Philosophy */}
      <Section>
        <SectionHeading
          eyebrow="Core Direction"
          title="Built with mission, vision, and philosophy."
        />
        <div className="grid gap-6 md:grid-cols-3">
          <StoryCard
            title="Mission"
            description="To build a unified platform where African culture can be created, distributed, experienced, and monetized at scale."
          />
          <StoryCard
            title="Vision"
            description="To become the leading cultural infrastructure platform for Africa, powering the next generation of creators, communities, and cultural enterprises."
          />
          <StoryCard
            title="Philosophy"
            description="Culture is not a product. It is a system — and systems must be built with intention, equity, and long-term sustainability."
          />
        </div>
      </Section>

      {/* Agenda 2063 Alignment */}
      <Section variant="alt-blue">
        <SectionHeading
          eyebrow="Continental Alignment"
          title="Contributing to Africa's Agenda 2063."
          description="ReelPepper Africa aligns with the African Union's vision for the continent's future."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { goal: "A Prosperous Africa", contribution: "Building creative economy infrastructure that generates sustainable income across 54 nations." },
            { goal: "An Integrated Continent", contribution: "Connecting creators, vendors, and citizens across borders through a unified digital marketplace." },
            { goal: "Cultural Renaissance", contribution: "Positioning African culture as economic capital, not just heritage — investing in creation and distribution at scale." },
            { goal: "Youth Empowerment", contribution: "Providing pathways for young Africans to participate in the creative economy as citizens, creators, and entrepreneurs." },
            { goal: "Technology & Innovation", contribution: "Mobile-first digital infrastructure with tokenized participation and pan-African payment systems." },
            { goal: "Sustainable Development", contribution: "Impact tracking across health, education, and environmental sustainability through every transaction." }
          ].map((item) => (
            <Reveal key={item.goal}>
              <div className="rounded-card border border-warm-100 bg-white p-6">
                <h3 className="font-body text-card-title text-warm-900">{item.goal}</h3>
                <p className="mt-2 text-body text-warm-600">{item.contribution}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
