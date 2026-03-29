"use client";

import { FormEvent, useState } from "react";
import { Users, Music, ShoppingBag, Landmark, Heart, Globe } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { LinkButton } from "@/components/ui/link-button";

const pathways = [
  {
    icon: <Users className="h-7 w-7" />,
    title: "Become a Culture Citizen",
    who: "Anyone who believes culture has economic value",
    benefits: "Citizen ID, token wallet, marketplace access, festival perks, impact tracking",
    cta: "Become a Citizen"
  },
  {
    icon: <Music className="h-7 w-7" />,
    title: "Become a Creator",
    who: "Musicians, filmmakers, artists, writers, influencers",
    benefits: "Creator profile, funding access, streaming platform, festival showcase slots",
    cta: "Apply as Creator"
  },
  {
    icon: <ShoppingBag className="h-7 w-7" />,
    title: "Become a Vendor",
    who: "Brands, merchants, and cultural entrepreneurs",
    benefits: "Marketplace storefront, vendor dashboard, pan-African distribution",
    cta: "Register as Vendor"
  },
  {
    icon: <Landmark className="h-7 w-7" />,
    title: "Invest / Partner",
    who: "Institutions, funds, corporate sponsors, development partners",
    benefits: "Investor briefing, partnership tiers, creative capital fund access",
    cta: "Request Briefing",
    href: "/invest-partner"
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
      <section className="bg-green-900 pb-16 pt-28 md:pb-20 md:pt-32">
        <Container>
          <Reveal>
            <span className="text-label uppercase text-gold-500">Join the Movement</span>
            <h1 className="mt-3 max-w-3xl font-display text-hero text-white">
              Your culture has value. Activate it.
            </h1>
            <p className="mt-5 max-w-2xl text-body-lg text-green-100">
              Choose your pathway and join Africa&apos;s creative economy. Whether you create, sell,
              invest, or simply participate — there&apos;s a place for you.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 4 Pathway cards */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {pathways.map((path, i) => (
            <Reveal key={path.title} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-card border border-warm-100 bg-white p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-card bg-gold-100 text-gold-500">
                  {path.icon}
                </div>
                <h2 className="mt-5 font-display text-section-title text-warm-900">{path.title}</h2>
                <p className="mt-2 text-small text-warm-600">
                  <span className="font-medium text-warm-900">Who it&apos;s for:</span> {path.who}
                </p>
                <p className="mt-2 text-small text-warm-600">
                  <span className="font-medium text-warm-900">What you get:</span> {path.benefits}
                </p>
                <div className="mt-6">
                  <LinkButton href={(path.href || "/get-involved") as any} size="sm">
                    {path.cta}
                  </LinkButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Volunteer + Ambassador */}
      <Section variant="alt">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-card border border-warm-100 bg-white p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-card bg-green-100 text-green-800">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-section-title text-warm-900">Volunteer at Festivals</h3>
              <p className="mt-2 text-body text-warm-600">
                Help bring Africa&apos;s cultural festivals to life. Contribute your time, skills, and energy.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-card border border-warm-100 bg-white p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-card bg-green-100 text-green-800">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-section-title text-warm-900">Become a Culture Envoy</h3>
              <p className="mt-2 text-body text-warm-600">
                Represent ReelPepper Africa in your city or country. Be the bridge between local culture and continental infrastructure.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Registration form */}
      <Section>
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow="Registration"
            title="Tell us how you want to participate."
          />

          {submitted ? (
            <div className="rounded-card border border-green-600 bg-green-50 p-6">
              <p className="font-medium text-green-800">
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
                className="h-12 rounded-btn bg-gold-500 text-sm font-semibold text-green-900 transition-colors hover:bg-gold-400"
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
