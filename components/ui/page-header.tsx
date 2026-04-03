import type { Route } from "next";
import Image from "next/image";

import { Container } from "./container";
import { LinkButton } from "./link-button";
import { Reveal } from "./reveal";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  backgroundImage?: string;
  cta?: {
    label: string;
    href: Route;
  };
};

export function PageHeader({ eyebrow, title, description, backgroundImage, cta }: Readonly<PageHeaderProps>) {
  return (
    <section className="relative bg-black pb-16 pt-28 md:pb-20 md:pt-32 overflow-hidden">
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover opacity-40"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        </>
      )}
      <Container className="relative z-10">
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <span className="inline-block text-label uppercase text-gold-500">{eyebrow}</span>
          )}
          <h1 className="mt-3 font-display text-hero text-white">{title}</h1>
          {description && (
            <p className="mt-5 max-w-2xl text-body-lg text-white/70">{description}</p>
          )}
          {cta && (
            <div className="mt-8">
              <LinkButton href={cta.href}>{cta.label}</LinkButton>
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
