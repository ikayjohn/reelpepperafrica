"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-colors duration-300",
          "bg-green-900/95 backdrop-blur-xl"
        )}
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="mx-auto flex max-w-container items-center justify-between px-[var(--container-padding)] py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
              RP
            </div>
            <div>
              <p className="font-display text-lg font-semibold leading-none text-white">
                ReelPepper
              </p>
              <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-warm-300">
                Africa
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-btn px-3 py-2 text-sm font-medium transition-colors duration-150",
                    active
                      ? "text-gold-500"
                      : "text-green-100 hover:text-white"
                  )}
                >
                  {item.label}
                  {active && (
                    <span className="mt-0.5 block h-0.5 rounded-full bg-gold-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/get-involved"
              className="inline-flex items-center rounded-btn bg-gold-500 px-5 py-2.5 text-sm font-semibold text-green-900 transition-colors duration-150 hover:bg-gold-400"
            >
              Join the Movement
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-btn text-white lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-green-900 pt-20 lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-8">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-btn px-4 py-3 text-lg font-medium transition-colors",
                    active
                      ? "bg-green-800 text-gold-500"
                      : "text-green-100 hover:bg-green-800 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-6 border-t border-white/10 pt-6">
              <Link
                href="/get-involved"
                onClick={() => setMobileOpen(false)}
                className="block rounded-btn bg-gold-500 px-6 py-3.5 text-center text-base font-semibold text-green-900"
              >
                Join the Movement
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
