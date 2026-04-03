import { PageHeader } from "@/components/ui/page-header";
import { FestivalsClient } from "./festivals-client";

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
    image: "/festival-lagos.png",
    description: "A premium culture week of film, music, conversation, and creative commerce designed to activate community at scale."
  },
  {
    title: "ReelRhyde Abuja",
    date: "April 5-10, 2026",
    location: "Abuja, Nigeria",
    categories: ["Music", "Tech"],
    tokenEligible: true,
    image: "/festival-abuja.png",
    description: "A mobile-activated festival experience blending live performance, digital participation, and cultural exchange."
  },
  {
    title: "Krea84Reel Port Harcourt",
    date: "April 20-25, 2026",
    location: "Port Harcourt, Nigeria",
    categories: ["Art", "Food"],
    tokenEligible: false,
    image: "/festival-portharcourt.png",
    description: "A creator-focused cultural convergence celebrating local art, cuisine, and entrepreneurship."
  },
  {
    title: "ArtBuddie Accra",
    date: "May 12-18, 2026",
    location: "Accra, Ghana",
    categories: ["Art", "Fashion"],
    tokenEligible: true,
    image: "/festival-accra.png",
    description: "An art and community gathering connecting West African creatives with continental audiences."
  },
  {
    title: "FlixnFlex Nairobi",
    date: "June 8-14, 2026",
    location: "Nairobi, Kenya",
    categories: ["Film", "Music", "Tech"],
    tokenEligible: true,
    image: "/festival-nairobi.png",
    description: "Streaming, screening, and live performance events bridging East and West African creative scenes."
  },
  {
    title: "ReelKulture Johannesburg",
    date: "July 3-9, 2026",
    location: "Johannesburg, South Africa",
    categories: ["Music", "Art", "Fashion"],
    tokenEligible: false,
    image: "/festival-johannesburg.png",
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
        backgroundImage="/festival-lagos.png"
      />

      <FestivalsClient festivals={festivals} />
    </>
  );
}
