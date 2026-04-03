"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

import { Container } from "../ui/container";

const footerSections = [
  {
    title: "Ecosystem",
    links: [
      { label: "Citizen Activation", href: "/ecosystem#citizen-activation" },
      { label: "Creative Commerce", href: "/ecosystem#creative-commerce" },
      { label: "Festivals & Convergences", href: "/ecosystem#festivals" },
      { label: "Creative Finance", href: "/ecosystem#creative-finance" },
      { label: "Digital Infrastructure", href: "/ecosystem#digital-infrastructure" },
      { label: "Impact & Sustainability", href: "/ecosystem#impact" }
    ]
  },
  {
    title: "Marketplace",
    links: [
      { label: "Creative Products", href: "/marketplace" },
      { label: "Streaming", href: "/marketplace" },
      { label: "Funding", href: "/marketplace" },
      { label: "Gift Cards", href: "/marketplace" },
      { label: "Become a Vendor", href: "/get-involved" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "ReelPulse TV", href: "/resources" },
      { label: "Press Releases", href: "/resources" },
      { label: "Whitepapers", href: "/resources" },
      { label: "News & Announcements", href: "/resources" },
      { label: "Impact Dashboard", href: "/resources" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/contact" },
      { label: "Terms & Conditions", href: "/contact" },
      { label: "Token Disclaimer", href: "/contact" },
      { label: "Contact", href: "/contact" }
    ]
  }
];

const socialLinks = [
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" }
];

export function Footer() {
  return (
    <footer className="bg-black pt-16 text-white/80">
      <Container>
        {/* 4-column grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-label uppercase text-gold-500">{section.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-small text-white/80/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social + newsletter row */}
        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-small text-white/80/60 transition-colors hover:text-gold-500"
              >
                {link.label}
              </a>
            ))}
          </div>

          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/80/40" />
              <input
                type="email"
                placeholder="your@email.com"
                className="h-10 rounded-btn border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder:text-white/80/40 outline-none transition focus:border-gold-500"
              />
            </div>
            <button
              type="submit"
              className="h-10 rounded-btn bg-gold-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-gold-500"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-white/10 py-6 text-center">
          <p className="text-small text-white/80/50">
            &copy; {new Date().getFullYear()} ReelPepper Africa. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
