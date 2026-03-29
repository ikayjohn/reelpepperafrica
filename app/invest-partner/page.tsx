"use client";

import { FormEvent, useState } from "react";
import { TrendingUp, Users, Globe, BarChart3 } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";

const stats = [
  { label: "Addressable Market", value: "$1T" },
  { label: "Cultural Tribes", value: "500+" },
  { label: "Nations", value: "54" },
  { label: "Population", value: "1.4B" }
];

const investmentVehicles = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Creative Ventures Fund",
    description: "Direct investment into high-potential creative enterprises across the continent."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Festival Sponsorship",
    description: "Brand visibility and cultural alignment through flagship festival partnerships."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Token Economy Participation",
    description: "Structured participation in the tokenized creative economy infrastructure."
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Impact Fund",
    description: "Social returns through health, education, and sustainability programs."
  }
];

const tiers = [
  { name: "Community Partner", range: "Contribution-based", benefits: "Logo placement, event access, community recognition" },
  { name: "Corporate Sponsor", range: "₦5M - ₦25M", benefits: "Branded experiences, media features, marketplace integration" },
  { name: "Strategic Partner", range: "₦25M - ₦100M", benefits: "Co-branded programs, board observer rights, priority access" },
  { name: "Institutional Investor", range: "₦100M+", benefits: "Equity participation, governance input, full portfolio access" }
];

export default function InvestPartnerPage() {
  const [form, setForm] = useState({ name: "", org: "", email: "", phone: "", type: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", org: "", email: "", phone: "", type: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-green-900 pb-16 pt-28 md:pb-20 md:pt-32">
        <Container>
          <Reveal>
            <span className="text-label uppercase text-gold-500">Invest &amp; Partner</span>
            <h1 className="mt-3 max-w-3xl font-display text-hero text-white">
              Invest in Africa&apos;s Creative Economy
            </h1>
            <p className="mt-5 max-w-2xl text-body-lg text-green-100">
              The African creative economy represents a $1 trillion addressable market across 500+
              cultural tribes and 54 nations. ReelPepper Africa is the infrastructure layer.
            </p>
          </Reveal>

          {/* Stats row */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Reveal key={stat.label}>
                <div className="rounded-card border border-white/10 bg-white/5 p-5 text-center">
                  <p className="font-display text-page-title text-gold-500">{stat.value}</p>
                  <p className="mt-1 text-small text-green-100">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Investment vehicles */}
      <Section>
        <SectionHeading
          eyebrow="Capital Pools & Funds"
          title="Multiple pathways to participate."
          description="Choose the investment vehicle that aligns with your institutional goals and impact thesis."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {investmentVehicles.map((vehicle, i) => (
            <Reveal key={vehicle.title} delay={i * 0.05}>
              <div className="flex gap-4 rounded-card border border-warm-100 bg-white p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-green-100 text-green-800">
                  {vehicle.icon}
                </div>
                <div>
                  <h3 className="font-body text-card-title text-warm-900">{vehicle.title}</h3>
                  <p className="mt-1 text-body text-warm-600">{vehicle.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Partnership tiers */}
      <Section variant="alt">
        <SectionHeading
          eyebrow="Partnership Tiers"
          title="Structured engagement at every level."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-card border border-warm-100 bg-white p-6">
                <h3 className="font-body text-card-title text-warm-900">{tier.name}</h3>
                <p className="mt-2 text-sm font-semibold text-gold-500">{tier.range}</p>
                <p className="mt-3 flex-1 text-small text-warm-600">{tier.benefits}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Contact form */}
      <Section>
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Request an Investor Briefing"
          />

          {submitted ? (
            <div className="rounded-card border border-green-600 bg-green-50 p-6">
              <p className="font-medium text-green-800">
                Thank you for your interest. Our team will be in touch within 48 hours.
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
                  <span className="text-small font-medium text-warm-600">Organization</span>
                  <input
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                    className="h-12 rounded-input border border-warm-100 bg-white px-4 text-sm text-warm-900 outline-none transition focus:border-gold-500"
                    placeholder="Your organization"
                  />
                </label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
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
              </div>
              <label className="grid gap-1.5">
                <span className="text-small font-medium text-warm-600">Interest Type</span>
                <select
                  required
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="h-12 rounded-input border border-warm-100 bg-white px-4 text-sm text-warm-900 outline-none transition focus:border-gold-500"
                >
                  <option value="" disabled>Select type</option>
                  <option value="investment">Investment</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label className="grid gap-1.5">
                <span className="text-small font-medium text-warm-600">Message</span>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="rounded-input border border-warm-100 bg-white px-4 py-3 text-sm text-warm-900 outline-none transition focus:border-gold-500"
                  placeholder="Tell us about your interest..."
                />
              </label>
              <button
                type="submit"
                className="h-12 rounded-btn bg-gold-500 text-sm font-semibold text-green-900 transition-colors hover:bg-gold-400"
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </Section>
    </>
  );
}
