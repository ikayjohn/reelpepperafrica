"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { MessageSquare, Newspaper, Handshake, HeadphonesIcon } from "lucide-react";

import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";

const pathways = [
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "General Inquiry",
    description: "Questions about the ReelPepper ecosystem, participation, or platform."
  },
  {
    icon: <Newspaper className="h-6 w-6" />,
    title: "Media & Press",
    description: "Interview requests, press kits, and media collaboration."
  },
  {
    icon: <Handshake className="h-6 w-6" />,
    title: "Partnership",
    description: "Brand collaborations, sponsorships, and strategic partnerships."
  },
  {
    icon: <HeadphonesIcon className="h-6 w-6" />,
    title: "Creator Support",
    description: "Help for creators, vendors, and citizens using the platform."
  }
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", type: "general", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", type: "general", message: "" });
  };

  return (
    <>
      <section className="relative bg-black pb-16 pt-28 md:pb-20 md:pt-32 overflow-hidden">
        <Image
          src="/ArtBuddie Accra — Ghanaian art exhibitioncommunity gathering.png"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <Container className="relative z-10">
          <Reveal>
            <span className="text-label uppercase text-gold-500">Contact</span>
            <h1 className="mt-3 font-display text-hero text-white">Get in Touch</h1>
            <p className="mt-5 max-w-2xl text-body-lg text-white/70">
              Whether you&apos;re a creator, partner, investor, or simply curious — we&apos;d
              love to hear from you.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 4 Contact pathways */}
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pathways.map((path, i) => (
            <Reveal key={path.title} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-card border border-warm-100 bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-card bg-gold-100 text-gold-500">
                  {path.icon}
                </div>
                <h3 className="mt-4 font-body text-card-title text-warm-900">{path.title}</h3>
                <p className="mt-1 text-small text-warm-600">{path.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Contact form */}
      <Section variant="alt">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            title="Send us a message"
            description="Fill out the form below and our team will get back to you within 48 hours."
          />

          {submitted ? (
            <div className="rounded-card border border-gold-500 bg-gold-100 p-6">
              <p className="font-medium text-gold-900">
                Thank you for reaching out. We&apos;ll respond within 48 hours.
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
              <label className="grid gap-1.5">
                <span className="text-small font-medium text-warm-600">Inquiry Type</span>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="h-12 rounded-input border border-warm-100 bg-white px-4 text-sm text-warm-900 outline-none transition focus:border-gold-500"
                >
                  <option value="general">General Inquiry</option>
                  <option value="media">Media & Press</option>
                  <option value="partnership">Partnership</option>
                  <option value="support">Creator Support</option>
                </select>
              </label>
              <label className="grid gap-1.5">
                <span className="text-small font-medium text-warm-600">Message</span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="rounded-input border border-warm-100 bg-white px-4 py-3 text-sm text-warm-900 outline-none transition focus:border-gold-500"
                  placeholder="Tell us what's on your mind..."
                />
              </label>
              <button
                type="submit"
                className="h-12 rounded-btn bg-gold-500 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-gold-500"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </Section>
    </>
  );
}
