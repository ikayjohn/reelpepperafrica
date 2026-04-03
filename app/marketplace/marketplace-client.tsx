"use client";

import { useState } from "react";
import Image from "next/image";

import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export type MarketplaceProduct = {
  name: string;
  price: string;
  vendor: string;
  image: string;
  category: string;
};

type MarketplaceClientProps = {
  categories: string[];
  products: MarketplaceProduct[];
};

export function MarketplaceClient({ categories, products }: Readonly<MarketplaceClientProps>) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <>
      <div className="border-b border-warm-100 bg-cream-dark">
        <div className="mx-auto flex max-w-container gap-1 overflow-x-auto px-[var(--container-padding)] py-3">
          {categories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-btn px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-gold-500 text-white"
                    : "text-warm-600 hover:bg-warm-100"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <Section>
        <SectionHeading
          title="Browse products"
          description="Curated cultural products from verified vendors across the continent."
        />
        {filteredProducts.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product, i) => (
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
        ) : (
          <div className="rounded-card border border-warm-100 bg-white p-8 text-center">
            <p className="font-body text-card-title text-warm-900">No products in this category yet.</p>
            <p className="mt-2 text-small text-warm-600">
              Try another tab to explore more marketplace listings.
            </p>
          </div>
        )}
      </Section>
    </>
  );
}
