import Link from "next/link";
import type { Route } from "next";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type LinkButtonProps = {
  href: Route;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  size = "default",
  className
}: Readonly<LinkButtonProps>) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-btn font-semibold transition-colors duration-150",
        size === "sm" && "px-4 py-2 text-sm",
        size === "default" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-4 text-base",
        variant === "primary" && "bg-gold-500 text-green-900 hover:bg-gold-400",
        variant === "secondary" && "bg-green-800 text-white hover:bg-green-700",
        variant === "ghost" && "border border-green-800 text-green-800 hover:bg-green-800 hover:text-white",
        className
      )}
    >
      {children}
      <ArrowRight className={cn(size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4")} />
    </Link>
  );
}
