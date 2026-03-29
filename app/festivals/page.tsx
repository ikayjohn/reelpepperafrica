import Image from "next/image";
import { MapPin, Calendar, Tag } from "lucide-react";

import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export const metadata = {
  title: "Festivals",
  description:
    "Experience culture across 54 nations. Register for upcoming ReelPepper festivals and cultural events."
};

const festivals = [
  {
    title: "ReelKulture Lagos",
    date: "March 15-22, 2026",
    location: "Lagos, Nigeria",
    categories: ["Music", "Film", "Art"],
    tokenEligible: true,
    image: "/ReelKulture Lagos — African music festival, concert crowd at night.jpg",
    description: "A premium culture week of film, music, conversation, and creative commerce designed to activate community at scale."
  },
  {
    title: "ReelRhyde Abuja",
    date: "April 5-10, 2026",
    location: "Abuja, Nigeria",
    categories: ["Music", "Tech"],
    tokenEligible: true,
    image: "/ReelRhyde Abuja — live African concert with stage lights.jpg",
    description: "A mobile-activated festival experience blending live performance, digital participation, and cultural exchange."
  },
  {
    title: "Krea84Reel Port Harcourt",
    date: "April 20-25, 2026",
    location: "Port Harcourt, Nigeria",
    categories: ["Art", "Food"],
    tokenEligible: false,
    image: "/Krea84Reel Port Harcourt — African food & art cultural event.jpg",
    description: "A creator-focused cultural convergence celebrating local art, cuisine, and entrepreneurship."
  },
  {
    title: "ArtBuddie Accra",
    date: "May 12-18, 2026",
    location: "Accra, Ghana",
    categories: ["Art", "Fashion"],
    tokenEligible: true,
    image: "/ArtBuddie Accra — Ghanaian art exhibitioncommunity gathering.png",
    description: "An art and community gathering connecting West African creatives with continental audiences."
  },
  {
    title: "FlixnFlex Nairobi",
    date: "June 8-14, 2026",
    location: "Nairobi, Kenya",
    categories: ["Film", "Music", "Tech"],
    tokenEligible: true,
    image: "/FlixnFlex Nairobi kenyan live music.jpg",
    description: "Streaming, screening, and live performance events bridging East and West African creative scenes."
  },
  {
    title: "ReelKulture Johannesburg",
    date: "July 3-9, 2026",
    location: "Johannesburg, South Africa",
    categories: ["Music", "Art", "Fashion"],
    tokenEligible: false,
    image: "/ReelKulture Johannesburg - South African musicculture festival.jpg",
    description: "The Southern African edition of ReelPepper's flagship culture festival, celebrating diversity and creative exchange."
  }
];

export default function FestivalsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Festivals & Convergences"
        title="Experience Culture Across 54 Nations"
        description="Live cultural experiences that move people from audience to active participants. Register for upcoming festivals and events."
      />

      {/* Filter bar placeholder */}
      <div className="sticky top-[57px] z-30 border-b border-warm-100 bg-cream-dark/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-container items-center gap-3 overflow-x-auto px-[var(--container-padding)] py-3">
          <select className="h-10 rounded-input border border-warm-100 bg-white px-3 text-sm text-warm-900 outline-none">
            <option>All Countries</option>
            <option>Nigeria</option>
            <option>Ghana</option>
            <option>Kenya</option>
            <option>South Africa</option>
          </select>
          <select className="h-10 rounded-input border border-warm-100 bg-white px-3 text-sm text-warm-900 outline-none">
            <option>All Categories</option>
            <option>Music</option>
            <option>Film</option>
            <option>Art</option>
            <option>Food</option>
            <option>Tech</option>
            <option>Fashion</option>
          </select>
          <label className="ml-auto flex shrink-0 items-center gap-2 text-sm text-warm-600">
            <input type="checkbox" className="h-4 w-4 rounded accent-gold-500" />
            Token Eligible
          </label>
        </div>
      </div>

      {/* Festival grid */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {festivals.map((festival, i) => (
            <Reveal key={festival.title} delay={i * 0.05}>
              <article className="group overflow-hidden rounded-card border border-warm-100 bg-white">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={festival.image}
                    alt={festival.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {festival.tokenEligible && (
                    <span className="absolute right-3 top-3 rounded-full bg-gold-500 px-2.5 py-1 text-xs font-semibold text-green-900">
                      Token Eligible
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-body text-card-title text-warm-900">{festival.title}</h3>
                  <div className="mt-2 flex items-center gap-1.5 text-small text-warm-600">
                    <Calendar className="h-3.5 w-3.5" />
                    {festival.date}
                  </div>
                  <div className="mt-1 flex items-center gap-1.5 text-small text-warm-300">
                    <MapPin className="h-3.5 w-3.5" />
                    {festival.location}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {festival.categories.map((cat) => (
                      <span
                        key={cat}
                        className="rounded-full border border-warm-100 px-2.5 py-0.5 text-xs text-warm-600"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-small text-warm-600">{festival.description}</p>
                  <button className="mt-4 w-full rounded-btn bg-gold-500 py-2.5 text-sm font-semibold text-green-900 transition-colors hover:bg-gold-400">
                    Register Interest
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
