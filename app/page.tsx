"use client";

import Image from "next/image";
import {
  ArrowRight,
  Users,
  ShoppingBag,
  Music,
  Landmark,
  Smartphone,
  Leaf,
  ChevronDown,
  Mail
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ImpactCounters } from "@/components/sections/impact-counters";

const ecosystemPillars = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Citizen Activation",
    description: "Join and participate as a Culture Citizen",
    href: "/ecosystem#citizen-activation"
  },
  {
    icon: <ShoppingBag className="h-6 w-6" />,
    title: "Creative Commerce",
    description: "Buy, sell, and trade cultural products",
    href: "/ecosystem#creative-commerce"
  },
  {
    icon: <Music className="h-6 w-6" />,
    title: "Festivals & Convergences",
    description: "Experience culture across 54 nations",
    href: "/ecosystem#festivals"
  },
  {
    icon: <Landmark className="h-6 w-6" />,
    title: "Creative Finance",
    description: "Fund and invest in creative ventures",
    href: "/ecosystem#creative-finance"
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Digital Infrastructure",
    description: "Mobile-first access via tokens and telecom",
    href: "/ecosystem#digital-infrastructure"
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Impact & Sustainability",
    description: "Track real outcomes in health, green, and education",
    href: "/ecosystem#impact"
  }
];

const featuredFestivals = [
  {
    title: "ReelKulture Lagos",
    date: "March 15-22, 2026",
    location: "Lagos, Nigeria",
    image: "/ReelKulture Lagos — African music festival, concert crowd at night.jpg"
  },
  {
    title: "ReelRhyde Abuja",
    date: "April 5-10, 2026",
    location: "Abuja, Nigeria",
    image: "/ReelRhyde Abuja — live African concert with stage lights.jpg"
  },
  {
    title: "ArtBuddie Accra",
    date: "May 12-18, 2026",
    location: "Accra, Ghana",
    image: "/ArtBuddie Accra — Ghanaian art exhibitioncommunity gathering.png"
  }
];

const marketplaceProducts = [
  { name: "Ankara Print Wall Art", price: "₦15,000", vendor: "Naija Canvas Studio", image: "/Ankara print wall art.png" },
  { name: "Afrobeats Production Kit", price: "₦45,000", vendor: "Afro Sonic Labs", image: "/Music production studio.jpg" },
  { name: "Lagos Street Photography Print", price: "₦8,500", vendor: "Iya Oge Designs", image: "/Lagos street photography.jpg" },
  { name: "Handwoven Kente Tote Bag", price: "₦22,000", vendor: "Accra Weavers Co.", image: "/Handwoven kente tote bag.jpg" }
];

const spotlights = [
  {
    name: "Adaeze Okonkwo",
    role: "Fashion Designer, Lagos",
    quote: "ReelPepper gave my brand a stage that reaches beyond borders. It's not just commerce — it's cultural infrastructure.",
    image: "/African woman portrait — fashion designer.jpg"
  },
  {
    name: "Kwame Asante",
    role: "Filmmaker, Accra",
    quote: "For the first time, I see a platform that treats African creators as the architects, not the content.",
    image: "/African man portrait — filmmaker.jpg"
  },
  {
    name: "Fatimah Bello",
    role: "Music Producer, Abuja",
    quote: "The ecosystem model means my music funds other creators. That's the kind of cycle Africa needs.",
    image: "/African woman portrait — music producer.png"
  }
];

const pathways = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Citizen",
    description: "Join the movement and participate in Africa's creative economy",
    href: "/get-involved"
  },
  {
    icon: <Music className="h-6 w-6" />,
    title: "Creator",
    description: "Showcase your talent and access funding, streaming, and festivals",
    href: "/get-involved"
  },
  {
    icon: <ShoppingBag className="h-6 w-6" />,
    title: "Vendor",
    description: "List your products and reach customers across 54 nations",
    href: "/get-involved"
  },
  {
    icon: <Landmark className="h-6 w-6" />,
    title: "Investor",
    description: "Fund creative ventures and earn structured returns",
    href: "/invest-partner"
  }
];

export default function HomePage() {
  return (
    <>
      {/* ========== 1. HERO ========== */}
      <section className="relative flex min-h-[100svh] items-center bg-green-900">
        <Image
          src="/African cultural performancefestival with vibrant crowd.jpg"
          alt="African performers on stage during a vibrant cultural event."
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-900/60 to-green-900/80" />

        <Container className="relative z-10 py-32">
          <Reveal>
            <h1 className="max-w-4xl font-display text-hero text-white">
              Culture as Capital.
              <br />
              Entertainment as Infrastructure.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-body-lg text-green-100">
              Join 12,400+ Culture Citizens building Africa&apos;s creative economy.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <LinkButton href="/marketplace">Explore Marketplace</LinkButton>
              <LinkButton href="/get-involved" variant="ghost" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                Become a Culture Citizen
              </LinkButton>
              <LinkButton href="/ecosystem" variant="ghost" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                Activate Your Token
              </LinkButton>
            </div>
          </Reveal>
        </Container>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/60">
          <ChevronDown className="h-6 w-6" />
        </div>
      </section>

      {/* ========== 2. ECOSYSTEM OVERVIEW ========== */}
      <Section>
        <SectionHeading
          eyebrow="The Ecosystem"
          title="One Ecosystem. Six Pillars. 54 Nations."
          description="ReelPepper Africa turns cultural participation into structured economic power through six integrated pillars."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystemPillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.05}>
              <a
                href={pillar.href}
                className="group flex h-full flex-col rounded-card border border-warm-100 bg-cream-dark p-6 transition-all duration-150 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-card bg-green-100 text-green-800 transition-colors group-hover:bg-green-800 group-hover:text-white">
                  {pillar.icon}
                </div>
                <h3 className="mt-4 font-body text-card-title text-warm-900">{pillar.title}</h3>
                <p className="mt-1.5 flex-1 text-body text-warm-600">{pillar.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-800 opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ========== 3. FEATURED FESTIVALS ========== */}
      <Section variant="alt">
        <SectionHeading
          eyebrow="Upcoming Festivals"
          title="Experience culture across the continent."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {featuredFestivals.map((festival, i) => (
            <Reveal key={festival.title} delay={i * 0.06}>
              <div className="group overflow-hidden rounded-card border border-warm-100 bg-white">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={festival.image}
                    alt={festival.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-body text-card-title text-warm-900">{festival.title}</h3>
                  <p className="mt-1 text-small text-warm-600">{festival.date}</p>
                  <p className="text-small text-warm-300">{festival.location}</p>
                  <button className="mt-4 rounded-btn bg-gold-500 px-4 py-2 text-sm font-semibold text-green-900 transition-colors hover:bg-gold-400">
                    Register Interest
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-8 text-center">
            <LinkButton href="/festivals" variant="secondary">View All Festivals</LinkButton>
          </div>
        </Reveal>
      </Section>

      {/* ========== 4. MARKETPLACE PREVIEW ========== */}
      <Section>
        <SectionHeading
          eyebrow="The Culture Marketplace"
          title="Shop products from Africa's creative economy."
          description="Discover art, fashion, music, and cultural products from verified vendors across the continent."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {marketplaceProducts.map((product, i) => (
            <Reveal key={product.name} delay={i * 0.05}>
              <div className="group overflow-hidden rounded-card border border-warm-100 bg-white">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-body text-sm font-semibold text-warm-900">{product.name}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-gold-500">{product.price}</p>
                  <p className="mt-0.5 text-small text-warm-300">{product.vendor}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-8">
            <LinkButton href="/marketplace" size="lg">Enter Marketplace</LinkButton>
          </div>
        </Reveal>
      </Section>

      {/* ========== 5. IMPACT COUNTERS ========== */}
      <ImpactCounters />

      {/* ========== 6. CREATOR / VENDOR SPOTLIGHT ========== */}
      <Section>
        <SectionHeading
          eyebrow="Meet the Culture Makers"
          title="The people building Africa's creative economy."
        />
        <div className="grid gap-8">
          {spotlights.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.06}>
              <div
                className={`grid items-center gap-8 md:grid-cols-[1fr_1.2fr] ${
                  i % 2 !== 0 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-card md:[direction:ltr]">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                </div>
                <div className="md:[direction:ltr]">
                  <blockquote className="text-body-lg text-warm-900 italic">
                    &ldquo;{person.quote}&rdquo;
                  </blockquote>
                  <p className="mt-4 font-body text-card-title text-warm-900">{person.name}</p>
                  <p className="text-small text-warm-600">{person.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ========== 7. JOIN THE MOVEMENT CTA ========== */}
      <Section variant="alt">
        <div className="text-center">
          <Reveal>
            <h2 className="font-display text-page-title text-warm-900">
              Your Culture Has Value. Activate It.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-body-lg text-warm-600">
              Join as a citizen, creator, vendor, or investor.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pathways.map((path, i) => (
            <Reveal key={path.title} delay={i * 0.05}>
              <a
                href={path.href}
                className="group flex h-full flex-col items-center rounded-card border border-warm-100 bg-white p-6 text-center transition-all duration-150 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-gold-500 transition-colors group-hover:bg-gold-500 group-hover:text-green-900">
                  {path.icon}
                </div>
                <h3 className="mt-4 font-body text-card-title text-warm-900">{path.title}</h3>
                <p className="mt-1.5 text-small text-warm-600">{path.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-500">
                  Get Started <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Newsletter */}
        <Reveal delay={0.2}>
          <div className="mx-auto mt-12 max-w-md text-center">
            <p className="text-sm font-medium text-warm-600">Stay in the loop</p>
            <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-warm-300" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="h-12 w-full rounded-input border border-warm-100 bg-white pl-10 pr-4 text-sm text-warm-900 outline-none transition focus:border-gold-500"
                />
              </div>
              <button
                type="submit"
                className="h-12 rounded-btn bg-gold-500 px-6 text-sm font-semibold text-green-900 transition-colors hover:bg-gold-400"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
