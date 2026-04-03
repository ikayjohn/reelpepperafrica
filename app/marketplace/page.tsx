import Image from "next/image";

import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { LinkButton } from "@/components/ui/link-button";

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
  { name: "Ankara Print Wall Art", price: "₦15,000", vendor: "Naija Canvas Studio", image: "/product-ankara-art.png" },
  { name: "Afrobeats Production Kit", price: "₦45,000", vendor: "Afro Sonic Labs", image: "/product-studio-kit.png" },
  { name: "Lagos Street Photography Print", price: "₦8,500", vendor: "Iya Oge Designs", image: "/product-lagos-photo.png" },
  { name: "Handwoven Kente Tote Bag", price: "₦22,000", vendor: "Accra Weavers Co.", image: "/product-kente-tote.png" },
  { name: "Adire Indigo Table Runner", price: "₦12,500", vendor: "Osun Heritage Crafts", image: "/product-adire-runner.png" },
  { name: "Nollywood Film Score Bundle", price: "₦35,000", vendor: "Afro Sonic Labs", image: "/product-score-bundle.png" },
  { name: "Beaded Jewelry Set", price: "₦18,000", vendor: "Iya Oge Designs", image: "/product-jewelry.png" },
  { name: "Djembe Drum (Handcrafted)", price: "₦55,000", vendor: "Mali Rhythms Workshop", image: "/product-djembe.png" }
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

      {/* Category tabs */}
      <div className="border-b border-warm-100 bg-cream-dark">
        <div className="mx-auto flex max-w-container gap-1 overflow-x-auto px-[var(--container-padding)] py-3">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`shrink-0 rounded-btn px-4 py-2 text-sm font-medium transition-colors ${
                i === 0
                  ? "bg-gold-500 text-white"
                  : "text-warm-600 hover:bg-warm-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <Section>
        <SectionHeading
          title="Browse products"
          description="Curated cultural products from verified vendors across the continent."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={i * 0.04}>
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
                  <button className="mt-3 w-full rounded-btn bg-gold-500 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-gold-500">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

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
