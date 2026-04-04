"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  ChevronDown,
  Mail,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { Reveal } from "@/components/ui/reveal";
import { ImpactCounters } from "@/components/sections/impact-counters";

const featuredFestivals = [
  {
    title: "ReelKulture Lagos",
    date: "March 15-22, 2026",
    location: "Lagos, Nigeria",
    image: "/festival-lagos.png"
  },
  {
    title: "ReelRhyde Abuja",
    date: "April 5-10, 2026",
    location: "Abuja, Nigeria",
    image: "/festival-abuja.png"
  },
  {
    title: "ArtBuddie Accra",
    date: "May 12-18, 2026",
    location: "Accra, Ghana",
    image: "/festival-accra.png"
  },
  {
    title: "Krea84Reel Port Harcourt",
    date: "April 20-25, 2026",
    location: "Port Harcourt, Nigeria",
    image: "/festival-portharcourt.png"
  },
  {
    title: "FlixnFlex Nairobi",
    date: "June 8-14, 2026",
    location: "Nairobi, Kenya",
    image: "/festival-nairobi.png"
  }
];

const marketplaceProducts = [
  { name: "Ankara Print Wall Art", price: "₦15,000", image: "/product-ankara-art.png" },
  { name: "Afrobeats Production Kit", price: "₦45,000", image: "/product-studio-kit.png" },
  { name: "Lagos Street Photography", price: "₦8,500", image: "/product-lagos-photo.png" },
  { name: "Handwoven Kente Tote", price: "₦22,000", image: "/product-kente-tote.png" },
  { name: "Adire Indigo Runner", price: "₦12,500", image: "/product-adire-runner.png" },
  { name: "Beaded Jewelry Set", price: "₦18,000", image: "/product-jewelry.png" },
  { name: "Handcrafted Djembe", price: "₦55,000", image: "/product-djembe.png" },
  { name: "African Instruments", price: "₦35,000", image: "/product-score-bundle.png" }
];

const spotlights = [
  {
    name: "Adaeze Okonkwo",
    role: "Fashion Designer, Lagos",
    quote: "ReelPepper gave my brand a stage that reaches beyond borders.",
    image: "/maker-designer.png"
  },
  {
    name: "Kwame Asante",
    role: "Filmmaker, Accra",
    quote: "A platform that treats African creators as the architects, not the content.",
    image: "/maker-filmmaker.png"
  },
  {
    name: "Fatimah Bello",
    role: "Music Producer, Abuja",
    quote: "My music funds other creators. That's the kind of cycle Africa needs.",
    image: "/maker-producer.png"
  }
];

const ecosystemImages = [
  { title: "Citizen Activation", image: "/eco-citizens.png", href: "/ecosystem#citizen-activation" },
  { title: "Creative Commerce", image: "/eco-commerce.png", href: "/ecosystem#creative-commerce" },
  { title: "Festivals", image: "/eco-festival-johannesburg.png", href: "/ecosystem#festivals" },
  { title: "Creative Finance", image: "/eco-finance.png", href: "/ecosystem#creative-finance" },
  { title: "Digital Infrastructure", image: "/eco-digital.png", href: "/ecosystem#digital-infrastructure" },
  { title: "Impact & Sustainability", image: "/hero-about-woman.png", href: "/ecosystem#impact" }
];

const heroSlides = [
  {
    eyebrow: "ReelPepper Africa",
    title: "Culture as Capital. Entertainment as Infrastructure.",
    description: "Join 12,400+ Culture Citizens building Africa's creative economy.",
    image: "/hero-festival-main.png",
    primaryCta: { href: "/marketplace", label: "Explore Marketplace" },
    secondaryCta: { href: "/get-involved", label: "Become a Culture Citizen" }
  },
  {
    eyebrow: "Festivals & Convergences",
    title: "Experience Culture Across 54 Nations",
    description: "Live cultural experiences that move people from audience to active participants. Register for upcoming festivals and events.",
    image: "/festival-lagos.png",
    primaryCta: { href: "/festivals", label: "View Festivals" },
    secondaryCta: { href: "/get-involved", label: "Volunteer at Festivals" }
  },
  {
    eyebrow: "The Culture Marketplace",
    title: "The marketplace for Africa's creative economy.",
    description: "Discover art, fashion, music, and cultural products from verified vendors across the continent.",
    image: "/hero-marketplace-vendor.png",
    primaryCta: { href: "/marketplace", label: "Enter Marketplace" },
    secondaryCta: { href: "/get-involved", label: "Become a Vendor" }
  },
  {
    eyebrow: "Invest & Partner",
    title: "Invest in Africa's Creative Economy",
    description: "The African creative economy represents a $1 trillion addressable market across 500+ cultural tribes and 54 nations. ReelPepper Africa is the infrastructure layer.",
    image: "/festival-nairobi.png",
    primaryCta: { href: "/invest-partner", label: "Request Briefing" },
    secondaryCta: { href: "/get-involved", label: "Join the Movement" }
  }
] as const;

const loopedFestivals = [
  ...featuredFestivals,
  ...featuredFestivals,
  ...featuredFestivals
];

export default function HomePage() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const festivalCarouselRef = useRef<HTMLDivElement>(null);
  const firstFestivalCardRef = useRef<HTMLAnchorElement>(null);
  const [activeFestivalIndex, setActiveFestivalIndex] = useState(featuredFestivals.length);
  const [festivalCardStep, setFestivalCardStep] = useState(0);
  const [isFestivalAnimating, setIsFestivalAnimating] = useState(true);

  const scrollFestivals = (direction: "prev" | "next") => {
    setIsFestivalAnimating(true);
    setActiveFestivalIndex((currentIndex) =>
      direction === "next"
        ? currentIndex + 1
        : currentIndex - 1
    );
  };

  const changeHeroSlide = (direction: "prev" | "next") => {
    setActiveHeroSlide((currentSlide) =>
      direction === "next"
        ? (currentSlide + 1) % heroSlides.length
        : (currentSlide - 1 + heroSlides.length) % heroSlides.length
    );
  };

  useEffect(() => {
    const heroInterval = window.setInterval(() => {
      setActiveHeroSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 6000);

    return () => {
      window.clearInterval(heroInterval);
    };
  }, []);

  useEffect(() => {
    const updateFestivalCardStep = () => {
      const container = festivalCarouselRef.current;
      const firstCard = firstFestivalCardRef.current;

      if (!container || !firstCard) {
        return;
      }

      const styles = window.getComputedStyle(container);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || "0");

      setFestivalCardStep(firstCard.offsetWidth + gap);
    };

    updateFestivalCardStep();

    const resizeObserver = new ResizeObserver(() => {
      updateFestivalCardStep();
    });

    if (festivalCarouselRef.current) {
      resizeObserver.observe(festivalCarouselRef.current);
    }

    if (firstFestivalCardRef.current) {
      resizeObserver.observe(firstFestivalCardRef.current);
    }

    window.addEventListener("resize", updateFestivalCardStep);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateFestivalCardStep);
    };
  }, []);

  useEffect(() => {
    const autoplayInterval = window.setInterval(() => {
      setIsFestivalAnimating(true);
      setActiveFestivalIndex((currentIndex) => currentIndex + 1);
    }, 4000);

    return () => {
      window.clearInterval(autoplayInterval);
    };
  }, []);

  useEffect(() => {
    if (isFestivalAnimating) {
      return;
    }

    const animationFrame = window.requestAnimationFrame(() => {
      setIsFestivalAnimating(true);
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [isFestivalAnimating]);

  const handleFestivalAnimationComplete = () => {
    if (activeFestivalIndex < featuredFestivals.length) {
      setIsFestivalAnimating(false);
      setActiveFestivalIndex((currentIndex) => currentIndex + featuredFestivals.length);
      return;
    }

    if (activeFestivalIndex >= featuredFestivals.length * 2) {
      setIsFestivalAnimating(false);
      setActiveFestivalIndex((currentIndex) => currentIndex - featuredFestivals.length);
    }
  };

  return (
    <>
      {/* ========== 1. HERO — Full-screen cinematic ========== */}
      <section className="relative min-h-[100svh] overflow-hidden bg-black">
        <motion.div
          className="flex min-h-[100svh]"
          animate={{ x: `-${activeHeroSlide * 100}%` }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {heroSlides.map((slide) => (
            <div
              key={slide.title}
              className="relative flex min-h-[100svh] w-full min-w-full shrink-0 items-center bg-black"
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

              <Container className="relative z-10 py-32">
                <p className="text-label uppercase tracking-[0.28em] text-gold-500">
                  {slide.eyebrow}
                </p>
                <h1 className="mt-4 max-w-4xl font-display text-hero text-white">
                  {slide.title}
                </h1>
                <p className="mt-5 max-w-2xl text-lg text-white/70">
                  {slide.description}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <LinkButton href={slide.primaryCta.href}>
                    {slide.primaryCta.label}
                  </LinkButton>
                  <LinkButton
                    href={slide.secondaryCta.href}
                    variant="ghost"
                    className="border-white/30 text-white hover:bg-gold-500 hover:text-white hover:border-gold-500"
                  >
                    {slide.secondaryCta.label}
                  </LinkButton>
                </div>
              </Container>
            </div>
          ))}
        </motion.div>

        <Container className="pointer-events-none absolute inset-x-0 bottom-24 z-10">
          <div className="flex items-center justify-between gap-4">
            <div className="pointer-events-auto flex items-center gap-2">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveHeroSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeHeroSlide ? "w-10 bg-gold-500" : "w-2.5 bg-white/35 hover:bg-white/60"
                  }`}
                  aria-label={`Go to hero slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="pointer-events-auto hidden items-center gap-2 sm:flex">
              <button
                type="button"
                onClick={() => changeHeroSlide("prev")}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-gold-500 hover:bg-gold-500 hover:text-white"
                aria-label="Show previous hero slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => changeHeroSlide("next")}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-gold-500 hover:bg-gold-500 hover:text-white"
                aria-label="Show next hero slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Container>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/40">
          <ChevronDown className="h-6 w-6" />
        </div>
      </section>

      {/* ========== 2. ECOSYSTEM — Netflix-style image row ========== */}
      <section className="bg-black py-14">
        <Container>
          <Reveal>
            <div className="mb-8 flex items-end justify-between">
              <h2 className="font-display text-section-title text-white">The Ecosystem</h2>
              <a href="/ecosystem" className="hidden items-center gap-1 text-sm font-medium text-gold-500 sm:inline-flex">
                Explore All <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {ecosystemImages.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04}>
                <a href={item.href} className="group relative block aspect-[4/3] overflow-hidden rounded-lg xl:aspect-[3/4]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    quality={90}
                    className="image-hover-zoom image-hover-zoom-110 object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent transition-colors group-hover:border-gold-500 rounded-lg" />
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== 3. FEATURED FESTIVALS — Wide cinematic cards ========== */}
      <section className="bg-[#0a0a0a] py-14">
        <Container>
          <Reveal>
            <div className="mb-8 flex items-end justify-between">
              <h2 className="font-display text-section-title text-white">Upcoming Festivals</h2>
              <div className="flex items-center gap-3">
                <div className="hidden items-center gap-2 md:flex">
                  <button
                    type="button"
                    onClick={() => scrollFestivals("prev")}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-gold-500 hover:bg-gold-500 hover:text-white"
                    aria-label="Scroll festivals left"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollFestivals("next")}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-gold-500 hover:bg-gold-500 hover:text-white"
                    aria-label="Scroll festivals right"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
                <LinkButton href="/festivals" variant="ghost" size="sm" className="hidden border-white/20 text-white hover:bg-gold-500 hover:text-white hover:border-gold-500 sm:inline-flex">
                  View All
                </LinkButton>
              </div>
            </div>
          </Reveal>
          <div className="overflow-hidden" aria-label="Upcoming festival carousel">
            <motion.div
              ref={festivalCarouselRef}
              className="flex gap-4 pb-4 will-change-transform"
              animate={{ x: -(activeFestivalIndex * festivalCardStep) }}
              onAnimationComplete={handleFestivalAnimationComplete}
              transition={
                isFestivalAnimating
                  ? { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                  : { duration: 0 }
              }
            >
              {loopedFestivals.map((festival, index) => (
                <Link
                  key={`${festival.title}-${index}`}
                  href="/festivals"
                  data-festival-card
                  ref={index === featuredFestivals.length ? firstFestivalCardRef : undefined}
                  className="group relative block w-[85vw] shrink-0 overflow-hidden rounded-lg sm:w-[380px]"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={festival.image}
                      alt={festival.title}
                      fill
                      className="object-cover"
                      sizes="380px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/90 text-white">
                        <Play className="ml-1 h-6 w-6" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="font-display text-lg font-semibold text-white">{festival.title}</h3>
                    <p className="mt-1 text-sm text-white/60">{festival.date} &middot; {festival.location}</p>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent transition-colors group-hover:border-gold-500 rounded-lg" />
                </Link>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ========== 4. MARKETPLACE — Product image grid ========== */}
      <section className="bg-black py-14">
        <Container>
          <Reveal>
            <div className="mb-8 flex items-end justify-between">
              <h2 className="font-display text-section-title text-white">The Culture Marketplace</h2>
              <LinkButton href="/marketplace" variant="ghost" size="sm" className="hidden border-white/20 text-white hover:bg-gold-500 hover:text-white hover:border-gold-500 sm:inline-flex">
                Enter Marketplace
              </LinkButton>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {marketplaceProducts.map((product, i) => (
              <Reveal key={product.name} delay={i * 0.04}>
                <div className="group relative overflow-hidden rounded-lg">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="image-hover-zoom image-hover-zoom-110 object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <h3 className="text-sm font-semibold text-white">{product.name}</h3>
                    <p className="text-sm font-bold text-gold-500">{product.price}</p>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent transition-colors group-hover:border-gold-500 rounded-lg" />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== 5. IMPACT COUNTERS ========== */}
      <ImpactCounters />

      {/* ========== 6. CREATOR SPOTLIGHT — Full-bleed image cards ========== */}
      <section className="bg-[#0a0a0a] py-14">
        <Container>
          <Reveal>
            <h2 className="mb-8 font-display text-section-title text-white">Meet the Culture Makers</h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {spotlights.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.06}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="image-hover-zoom image-hover-zoom-105 object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-sm italic text-white/80">&ldquo;{person.quote}&rdquo;</p>
                    <p className="mt-3 font-display text-lg font-semibold text-white">{person.name}</p>
                    <p className="text-sm text-gold-500">{person.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== 7. FULL-WIDTH CTA BANNER ========== */}
      <section className="relative py-24">
        <Image
          src="/hero-about-woman.png"
          alt="Confident African cultural visionary in contemporary traditional fashion."
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <Container className="relative z-10 text-center">
          <Reveal>
            <h2 className="font-display text-page-title text-white">
              Your Culture Has Value. Activate It.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-white/70">
              Join as a citizen, creator, vendor, or investor.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <LinkButton href="/get-involved">Join the Movement</LinkButton>
              <LinkButton href="/invest-partner" variant="ghost" className="border-white/30 text-white hover:bg-gold-500 hover:text-white hover:border-gold-500">
                Invest / Partner
              </LinkButton>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ========== 8. NEWSLETTER — Minimal dark strip ========== */}
      <section className="bg-black py-12">
        <Container>
          <Reveal>
            <div className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
              <div className="flex-1">
                <p className="font-display text-lg font-semibold text-white">Stay in the loop</p>
                <p className="mt-1 text-sm text-white/50">Get updates on festivals, drops, and ecosystem news.</p>
              </div>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="h-11 rounded-btn border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-gold-500"
                  />
                </div>
                <button
                  type="submit"
                  className="h-11 rounded-btn bg-gold-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-gold-500"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
