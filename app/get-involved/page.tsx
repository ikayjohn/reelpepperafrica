"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { LinkButton } from "@/components/ui/link-button";

const pathways = [
  {
    title: "Become a Culture Citizen",
    who: "Anyone who believes culture has economic value",
    benefits: "Citizen ID, token wallet, marketplace access, festival perks",
    cta: "Become a Citizen",
    image: "/join-citizen.png"
  },
  {
    title: "Become a Creator",
    who: "Musicians, filmmakers, artists, writers, influencers",
    benefits: "Creator profile, funding access, streaming, festival showcase",
    cta: "Apply as Creator",
    image: "/join-creator.png"
  },
  {
    title: "Become a Vendor",
    who: "Brands, merchants, and cultural entrepreneurs",
    benefits: "Marketplace storefront, vendor dashboard, pan-African distribution",
    cta: "Register as Vendor",
    image: "/join-vendor.png"
  },
  {
    title: "Invest / Partner",
    who: "Institutions, funds, corporate sponsors",
    benefits: "Investor briefing, partnership tiers, creative capital fund access",
    cta: "Request Briefing",
    href: "/invest-partner",
    image: "/join-partner.png"
  }
];

const volunteerCards = [
  {
    title: "Volunteer at Festivals",
    description: "Help bring Africa's cultural festivals to life. Contribute your time, skills, and energy.",
    image: "/join-volunteer.png"
  },
  {
    title: "Become a Culture Envoy",
    description: "Represent ReelPepper Africa in your city. Be the bridge between local culture and continental infrastructure.",
    image: "/join-envoy.png"
  }
];

export default function GetInvolvedPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", country: "", interest: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", country: "", interest: "", message: "" });
  };

  return (
    <>
      {/* Hero with background image */}
      <section className="relative bg-black pb-16 pt-28 md:pb-20 md:pt-32 overflow-hidden">
        <Image
          src="/festival-johannesburg.png"
          alt=""
          fill
          className="object-cover opacity-35"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <Container className="relative z-10">
          <Reveal>
            <span className="text-label uppercase text-gold-500">Join the Movement</span>
            <h1 className="mt-3 max-w-3xl font-display text-hero text-white">
              Your culture has value. Activate it.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-white/70">
              Choose your pathway and join Africa&apos;s creative economy.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 4 Pathway cards — image-backed Netflix style */}
      <section className="bg-black py-14">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {pathways.map((path, i) => (
              <Reveal key={path.title} delay={i * 0.05}>
                <a
                  href={path.href || "#register"}
                  className="group relative block overflow-hidden rounded-lg"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={path.image}
                      alt={path.title}
                      fill
                      className="image-hover-zoom image-hover-zoom-110 object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h2 className="font-display text-xl font-semibold text-white">{path.title}</h2>
                    <p className="mt-1 text-sm text-white/60">{path.who}</p>
                    <p className="mt-2 text-sm text-white/50">{path.benefits}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gold-500">
                      {path.cta} <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent transition-colors group-hover:border-gold-500 rounded-lg" />
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Volunteer + Ambassador — image cards */}
      <section className="bg-[#0a0a0a] py-14">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {volunteerCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.05}>
                <div className="group relative overflow-hidden rounded-lg">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="image-hover-zoom image-hover-zoom-105 object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-xl font-semibold text-white">{card.title}</h3>
                    <p className="mt-2 max-w-sm text-sm text-white/60">{card.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Registration form */}
      <Section id="register">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow="Registration"
            title="Tell us how you want to participate."
          />

          {submitted ? (
            <div className="rounded-card border border-gold-500 bg-gold-100 p-6">
              <p className="font-medium text-gold-900">
                Thanks for your interest! We&apos;ll be in touch soon to get you started.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-1.5">
                  <span className="text-small font-medium text-warm-600">Name</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="h-12 rounded-input border border-warm-100 bg-white px-4 text-sm text-warm-900 outline-none transition focus:border-gold-500"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-small font-medium text-warm-600">Email</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="h-12 rounded-input border border-warm-100 bg-white px-4 text-sm text-warm-900 outline-none transition focus:border-gold-500"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-1.5">
                  <span className="text-small font-medium text-warm-600">Phone</span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="h-12 rounded-input border border-warm-100 bg-white px-4 text-sm text-warm-900 outline-none transition focus:border-gold-500"
                    placeholder="+234..."
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-small font-medium text-warm-600">Country</span>
                  <input
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                    className="h-12 rounded-input border border-warm-100 bg-white px-4 text-sm text-warm-900 outline-none transition focus:border-gold-500"
                    placeholder="Nigeria"
                  />
                </label>
              </div>
              <label className="grid gap-1.5">
                <span className="text-small font-medium text-warm-600">I want to join as</span>
                <select
                  required
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className="h-12 rounded-input border border-warm-100 bg-white px-4 text-sm text-warm-900 outline-none transition focus:border-gold-500"
                >
                  <option value="" disabled>Select a pathway</option>
                  <option value="citizen">Culture Citizen</option>
                  <option value="creator">Creator</option>
                  <option value="vendor">Vendor</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="envoy">Culture Envoy</option>
                </select>
              </label>
              <label className="grid gap-1.5">
                <span className="text-small font-medium text-warm-600">Anything else?</span>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="rounded-input border border-warm-100 bg-white px-4 py-3 text-sm text-warm-900 outline-none transition focus:border-gold-500"
                  placeholder="Tell us about yourself..."
                />
              </label>
              <button
                type="submit"
                className="h-12 rounded-btn bg-gold-500 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-gold-500"
              >
                Submit Interest
              </button>
            </form>
          )}
        </div>
      </Section>
    </>
  );
}
