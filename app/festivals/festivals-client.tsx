"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";

import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export type Festival = {
  title: string;
  date: string;
  location: string;
  categories: string[];
  tokenEligible: boolean;
  image: string;
  description: string;
};

type FestivalsClientProps = {
  festivals: Festival[];
};

export function FestivalsClient({ festivals }: Readonly<FestivalsClientProps>) {
  const [countryFilter, setCountryFilter] = useState("All Countries");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [tokenOnly, setTokenOnly] = useState(false);

  const countries = Array.from(
    new Set(festivals.map((festival) => festival.location.split(", ").at(-1)).filter(Boolean))
  );
  const categories = Array.from(
    new Set(festivals.flatMap((festival) => festival.categories))
  );

  const filteredFestivals = festivals.filter((festival) => {
    const country = festival.location.split(", ").at(-1);
    const matchesCountry = countryFilter === "All Countries" || country === countryFilter;
    const matchesCategory =
      categoryFilter === "All Categories" || festival.categories.includes(categoryFilter);
    const matchesToken = !tokenOnly || festival.tokenEligible;

    return matchesCountry && matchesCategory && matchesToken;
  });

  return (
    <>
      <div className="sticky top-[57px] z-30 border-b border-warm-100 bg-cream-dark/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-container items-center gap-3 overflow-x-auto px-[var(--container-padding)] py-3">
          <select
            value={countryFilter}
            onChange={(event) => setCountryFilter(event.target.value)}
            className="h-10 rounded-input border border-warm-100 bg-white px-3 text-sm text-warm-900 outline-none"
          >
            <option>All Countries</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          <select
            value={categoryFilter}
            onChange={(event) => setCategoryFilter(event.target.value)}
            className="h-10 rounded-input border border-warm-100 bg-white px-3 text-sm text-warm-900 outline-none"
          >
            <option>All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <label className="ml-auto flex shrink-0 items-center gap-2 text-sm text-warm-600">
            <input
              type="checkbox"
              checked={tokenOnly}
              onChange={(event) => setTokenOnly(event.target.checked)}
              className="h-4 w-4 rounded accent-gold-500"
            />
            Token Eligible
          </label>
        </div>
      </div>

      <Section>
        {filteredFestivals.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredFestivals.map((festival, i) => (
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
                      <span className="absolute right-3 top-3 rounded-full bg-gold-500 px-2.5 py-1 text-xs font-semibold text-white">
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
                    <button className="mt-4 w-full rounded-btn bg-gold-500 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-gold-500">
                      Register Interest
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="rounded-card border border-warm-100 bg-white p-8 text-center">
            <p className="font-body text-card-title text-warm-900">No festivals match these filters.</p>
            <p className="mt-2 text-small text-warm-600">
              Try a different country, category, or switch off token-only filtering.
            </p>
          </div>
        )}
      </Section>
    </>
  );
}
