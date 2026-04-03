import Image from "next/image";
import { Play, FileText, BookOpen, Camera, Download } from "lucide-react";

import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export const metadata = {
  title: "Resources & Media Hub",
  description:
    "Explore ReelPulse TV, press releases, whitepapers, creator toolkits, and festival media from the ReelPepper Africa ecosystem."
};

const tabs = ["ReelPulse TV", "Press Releases", "Whitepapers", "Creator Toolkits", "Festival Media"];

const videos = [
  { title: "The ReelPepper Vision: Culture as Capital", duration: "4:32", thumbnail: "/ReelKulture Lagos — African music festival, concert crowd at night.jpg" },
  { title: "Lagos Story Futures: Behind the Scenes", duration: "12:15", thumbnail: "/ReelRhyde Abuja — live African concert with stage lights.jpg" },
  { title: "Meet the Culture Makers: Season 1", duration: "22:08", thumbnail: "/ArtBuddie Accra — Ghanaian art exhibitioncommunity gathering.png" }
];

const resources = [
  { type: "Whitepaper", title: "The African Creative Economy: A $1T Opportunity", date: "February 2026", icon: <FileText className="h-5 w-5" /> },
  { type: "Toolkit", title: "Creator Onboarding Guide", date: "January 2026", icon: <BookOpen className="h-5 w-5" /> },
  { type: "Press Release", title: "ReelPepper Africa Announces Flagship Festival", date: "March 2026", icon: <FileText className="h-5 w-5" /> },
  { type: "Photo Album", title: "ReelKulture Lagos 2025 Gallery", date: "December 2025", icon: <Camera className="h-5 w-5" /> }
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources & Media Hub"
        title="Stories, insights, and knowledge from the ecosystem."
        description="Official publications, video content, press materials, and creator toolkits."
        backgroundImage="/ReelRhyde Abuja — live African concert with stage lights.jpg"
      />

      {/* Tab nav */}
      <div className="border-b border-warm-100 bg-cream-dark">
        <div className="mx-auto flex max-w-container gap-1 overflow-x-auto px-[var(--container-padding)] py-3">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`shrink-0 rounded-btn px-4 py-2 text-sm font-medium transition-colors ${
                i === 0
                  ? "bg-gold-500 text-white"
                  : "text-warm-600 hover:bg-warm-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ReelPulse TV */}
      <Section>
        <SectionHeading
          eyebrow="ReelPulse TV"
          title="Video content from across the ecosystem."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {videos.map((video, i) => (
            <Reveal key={video.title} delay={i * 0.06}>
              <div className="group overflow-hidden rounded-card border border-warm-100 bg-white">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-gold-500 transition-transform group-hover:scale-110">
                      <Play className="ml-1 h-6 w-6" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-xs text-white">
                    {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-body text-sm font-semibold text-warm-900">{video.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Documents & Resources */}
      <Section variant="alt">
        <SectionHeading
          eyebrow="Documents"
          title="Publications, toolkits, and press materials."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {resources.map((res, i) => (
            <Reveal key={res.title} delay={i * 0.05}>
              <div className="flex items-start gap-4 rounded-card border border-warm-100 bg-white p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-gold-100 text-gold-500">
                  {res.icon}
                </div>
                <div className="flex-1">
                  <span className="text-label uppercase text-gold-500">{res.type}</span>
                  <h3 className="mt-1 font-body text-sm font-semibold text-warm-900">
                    {res.title}
                  </h3>
                  <p className="mt-0.5 text-small text-warm-300">{res.date}</p>
                </div>
                <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-btn border border-warm-100 text-warm-600 transition-colors hover:bg-warm-100">
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
