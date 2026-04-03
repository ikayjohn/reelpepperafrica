import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Ecosystem",
  description:
    "Explore the six pillars of the ReelPepper Africa ecosystem — from citizen activation to impact sustainability."
};

const pillars = [
  {
    id: "citizen-activation",
    title: "Citizen Activation",
    description: "Culture Citizens are enrolled, activated, and connected to every layer of participation.",
    image: "/eco-citizens.png",
    programs: ["Reel4Life", "ReelBuddie", "Reel3rybeFace", "ReelKulture"]
  },
  {
    id: "creative-commerce",
    title: "Creative Commerce",
    description: "A pan-African marketplace where cultural products are discovered, sold, and scaled.",
    image: "/eco-commerce.png",
    programs: ["Shop4Reel", "Crea80candy", "ReelPreneur", "Gift4Reel"]
  },
  {
    id: "festivals",
    title: "Festivals & Convergences",
    description: "Live cultural experiences that move people from audience to active participants.",
    image: "/eco-festival-johannesburg.png",
    programs: ["ReelKulture Festival", "ReelRhyde Mobile", "Krea84Reel", "ArtBuddie", "FlixnFlex"]
  },
  {
    id: "creative-finance",
    title: "Creative Finance",
    description: "Structured investment and funding tools that turn cultural participation into economic returns.",
    image: "/eco-finance.png",
    programs: ["CashMyReel", "ReelBanker", "Fund4Reel", "Reelmonie"]
  },
  {
    id: "digital-infrastructure",
    title: "Digital Infrastructure",
    description: "Mobile-first access layer connecting tokens, telecom, streaming, and analytics.",
    image: "/eco-digital.png",
    programs: ["Stream4Reel", "ReelRhyde", "ReelPulse", "Data4Reel"]
  },
  {
    id: "impact",
    title: "Impact & Sustainability",
    description: "Transparent tracking of real outcomes — health, education, and environmental sustainability.",
    image: "/hero-about-woman.png",
    programs: ["Reel2Green", "Reel2Care", "Aid4Reel", "ReelRoodie"]
  }
];

export default function EcosystemPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Ecosystem"
        title="Six pillars. One unified creative economy."
        description="Every pillar of the ReelPepper ecosystem connects creation, commerce, and impact into a self-sustaining cycle across 54 nations."
        backgroundImage="/hero-festival-main.png"
      />

      {/* Pillar grid — Netflix-style large image cards */}
      <section className="bg-black py-14">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.id} delay={index * 0.05}>
                <a
                  href={`#${pillar.id}`}
                  id={pillar.id}
                  className="group relative block overflow-hidden rounded-lg"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      quality={90}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="text-xs font-semibold uppercase tracking-widest text-gold-500">
                      Pillar {index + 1}
                    </span>
                    <h2 className="mt-1 font-display text-xl font-semibold text-white sm:text-2xl">
                      {pillar.title}
                    </h2>
                    <p className="mt-2 max-w-md text-sm text-white/60">{pillar.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {pillar.programs.map((prog) => (
                        <span
                          key={prog}
                          className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70"
                        >
                          {prog}
                        </span>
                      ))}
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold-500 opacity-0 transition-opacity group-hover:opacity-100">
                      Explore <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent transition-colors group-hover:border-gold-500 rounded-lg" />
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
