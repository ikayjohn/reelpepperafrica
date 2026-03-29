import {
  Users,
  ShoppingBag,
  Music,
  Landmark,
  Smartphone,
  Leaf
} from "lucide-react";

import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export const metadata = {
  title: "Ecosystem",
  description:
    "Explore the six pillars of the ReelPepper Africa ecosystem — from citizen activation to impact sustainability."
};

const pillars = [
  {
    id: "citizen-activation",
    icon: <Users className="h-7 w-7" />,
    title: "Citizen Activation",
    description:
      "The foundation of the ecosystem. Culture Citizens are enrolled, activated, and connected to every layer of participation.",
    programs: [
      { name: "Reel4Life", tagline: "Culture Citizen enrollment and activation" },
      { name: "ReelBuddie", tagline: "Peer ambassador network" },
      { name: "Reel3rybeFace", tagline: "Cultural identity profiles" },
      { name: "ReelKulture", tagline: "Heritage preservation programs" }
    ]
  },
  {
    id: "creative-commerce",
    icon: <ShoppingBag className="h-7 w-7" />,
    title: "Creative Commerce",
    description:
      "A pan-African marketplace where cultural products, services, and experiences are discovered, sold, and scaled.",
    programs: [
      { name: "Shop4Reel", tagline: "Marketplace storefront" },
      { name: "Crea80candy", tagline: "Creator merchandise" },
      { name: "ReelPreneur", tagline: "Creative business tools" },
      { name: "Gift4Reel", tagline: "Gift card system" }
    ]
  },
  {
    id: "festivals",
    icon: <Music className="h-7 w-7" />,
    title: "Festivals & Convergences",
    description:
      "Live cultural experiences that move people from audience to active participants, across cities and nations.",
    programs: [
      { name: "ReelKulture Festival", tagline: "Flagship culture festival" },
      { name: "ReelRhyde Mobile Festival", tagline: "Mobile-activated festival experience" },
      { name: "Krea84Reel Festival", tagline: "Creator-focused cultural convergence" },
      { name: "ArtBuddie Convergence", tagline: "Art and community gathering" },
      { name: "FlixnFlex", tagline: "Streaming and screening events" }
    ]
  },
  {
    id: "creative-finance",
    icon: <Landmark className="h-7 w-7" />,
    title: "Creative Finance",
    description:
      "Structured investment, funding, and banking tools that turn cultural participation into economic returns.",
    programs: [
      { name: "CashMyReel", tagline: "Creator funding platform" },
      { name: "ReelBanker", tagline: "Culture capital banking" },
      { name: "Fund4Reel", tagline: "Investment pools for creative ventures" },
      { name: "Reelmonie", tagline: "Token wallet" }
    ]
  },
  {
    id: "digital-infrastructure",
    icon: <Smartphone className="h-7 w-7" />,
    title: "Digital Infrastructure",
    description:
      "Mobile-first access layer connecting tokens, telecom participation, streaming, and analytics across the continent.",
    programs: [
      { name: "Stream4Reel", tagline: "Content streaming platform" },
      { name: "ReelRhyde", tagline: "Mobile and telecom participation" },
      { name: "ReelPulse", tagline: "Media and broadcasting" },
      { name: "Data4Reel", tagline: "Analytics and insights" }
    ]
  },
  {
    id: "impact",
    icon: <Leaf className="h-7 w-7" />,
    title: "Impact & Sustainability",
    description:
      "Transparent tracking of real outcomes — health, education, and environmental sustainability funded through every transaction.",
    programs: [
      { name: "Reel2Green", tagline: "Environmental pledges and tracking" },
      { name: "Reel2Care", tagline: "Health wallet activations" },
      { name: "Aid4Reel", tagline: "Social impact fund" },
      { name: "ReelRoodie", tagline: "Education and skills development" }
    ]
  }
];

export default function EcosystemPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Ecosystem"
        title="Six pillars. One unified creative economy."
        description="Every pillar of the ReelPepper ecosystem connects creation, commerce, and impact into a self-sustaining cycle across 54 nations."
      />

      {pillars.map((pillar, index) => (
        <Section
          key={pillar.id}
          id={pillar.id}
          variant={index % 2 === 0 ? "default" : "alt"}
        >
          <Reveal>
            <div className="mb-8 flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-card bg-green-100 text-green-800">
                {pillar.icon}
              </div>
              <div>
                <span className="eyebrow">Pillar {index + 1}</span>
                <h2 className="mt-1 font-display text-section-title text-warm-900">
                  {pillar.title}
                </h2>
                <p className="mt-2 max-w-2xl text-body-lg text-warm-600">
                  {pillar.description}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pillar.programs.map((program, i) => (
              <Reveal key={program.name} delay={i * 0.05}>
                <div className="rounded-card border border-warm-100 bg-white p-5 transition-all duration-150 hover:shadow-card">
                  <h3 className="font-body text-card-title text-warm-900">
                    {program.name}
                  </h3>
                  <p className="mt-1 text-small text-warm-600">{program.tagline}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
