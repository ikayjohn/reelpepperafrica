import { cn } from "@/lib/utils";

export function Container({
  className,
  children
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) {
  return (
    <div className={cn("mx-auto w-full max-w-container px-[var(--container-padding)]", className)}>
      {children}
    </div>
  );
}
