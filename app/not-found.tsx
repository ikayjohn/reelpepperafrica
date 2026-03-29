import { LinkButton } from "@/components/ui/link-button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-cream pt-20">
      <Container>
        <span className="eyebrow">404</span>
        <h1 className="mt-4 max-w-2xl font-display text-hero text-warm-900">
          Page not found.
        </h1>
        <p className="mt-4 max-w-lg text-body-lg text-warm-600">
          The page you&apos;re looking for doesn&apos;t exist. Head back to the homepage to continue exploring the ReelPepper Africa ecosystem.
        </p>
        <div className="mt-8">
          <LinkButton href="/">Back to Homepage</LinkButton>
        </div>
      </Container>
    </section>
  );
}
