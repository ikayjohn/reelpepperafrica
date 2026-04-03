import { cn } from "@/lib/utils";

import { Container } from "./container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "alt" | "alt-blue" | "dark";
  id?: string;
};

export function Section({ children, className, variant = "default", id }: Readonly<SectionProps>) {
  return (
    <section
      id={id}
      className={cn(
        "py-[var(--section-py)]",
        variant === "alt" && "bg-cream-dark",
        variant === "alt-blue" && "bg-blue-50",
        variant === "dark" && "section-dark",
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
