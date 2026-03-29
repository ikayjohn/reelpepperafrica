import type { Route } from "next";

import { Container } from "./container";
import { LinkButton } from "./link-button";
import { Reveal } from "./reveal";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  cta?: {
    label: string;
    href: Route;
  };
};

export function PageHeader({ eyebrow, title, description, cta }: Readonly<PageHeaderProps>) {
  return (
    <section className="bg-green-900 pb-16 pt-28 md:pb-20 md:pt-32">
      <Container>
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <span className="inline-block text-label uppercase text-gold-500">{eyebrow}</span>
          )}
          <h1 className="mt-3 font-display text-hero text-white">{title}</h1>
          {description && (
            <p className="mt-5 max-w-2xl text-body-lg text-green-100">{description}</p>
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
