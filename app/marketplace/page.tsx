import Image from "next/image";

import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { LinkButton } from "@/components/ui/link-button";
import { MarketplaceClient } from "./marketplace-client";

export const metadata = {
  title: "Marketplace",
  description:
    "Shop cultural products from verified vendors across Africa. Art, fashion, music, and creative services."
};

const categories = [
  "All",
  "Creative Products",
  "Streaming",
  "Funding",
  "Tokens",
  "Gift Cards"
];

const products = [
  { name: "Ankara Print Wall Art", price: "₦15,000", vendor: "Naija Canvas Studio", image: "/product-ankara-art.png", category: "Creative Products" },
  { name: "Afrobeats Production Kit", price: "₦45,000", vendor: "Afro Sonic Labs", image: "/product-studio-kit.png", category: "Streaming" },
  { name: "Lagos Street Photography Print", price: "₦8,500", vendor: "Iya Oge Designs", image: "/product-lagos-photo.png", category: "Creative Products" },
  { name: "Handwoven Kente Tote Bag", price: "₦22,000", vendor: "Accra Weavers Co.", image: "/product-kente-tote.png", category: "Creative Products" },
  { name: "Adire Indigo Table Runner", price: "₦12,500", vendor: "Osun Heritage Crafts", image: "/product-adire-runner.png", category: "Gift Cards" },
  { name: "Nollywood Film Score Bundle", price: "₦35,000", vendor: "Afro Sonic Labs", image: "/product-score-bundle.png", category: "Funding" },
  { name: "Beaded Jewelry Set", price: "₦18,000", vendor: "Iya Oge Designs", image: "/product-jewelry.png", category: "Tokens" },
  { name: "Djembe Drum (Handcrafted)", price: "₦55,000", vendor: "Mali Rhythms Workshop", image: "/product-djembe.png", category: "Creative Products" }
];

export default function MarketplacePage() {
  return (
    <>
      <PageHeader
        eyebrow="The Culture Marketplace"
        title="The marketplace for Africa's creative economy."
        description="Discover art, fashion, music, and cultural products from verified vendors across the continent."
        backgroundImage="/hero-marketplace-vendor.png"
      />

      <MarketplaceClient categories={categories} products={products} />

      {/* Vendor CTA */}
      <Section variant="alt-blue">
        <Reveal>
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <span className="eyebrow">Sell on ReelPepper</span>
              <h2 className="mt-3 font-display text-section-title text-warm-900">
                Sell your culture. Scale your impact.
              </h2>
              <p className="mt-3 max-w-lg text-body-lg text-warm-600">
                List your products, set your price, and reach customers across 54 nations through
                Africa&apos;s creative economy marketplace.
              </p>
              <div className="mt-6">
                <LinkButton href="/get-involved">Become a Vendor</LinkButton>
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-card">
              <Image
                src="/hero-marketplace-vendor.png"
                alt="African vendor presenting creative products."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
