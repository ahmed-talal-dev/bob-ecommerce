"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import SearchBar from "./SearchBar";

interface NavLink {
  readonly label: string;
  readonly href: string;
}

const NAV_LINKS: readonly NavLink[] = [
  { label: "الرئيسية", href: "/" },
  { label: "عن المركز", href: "/about" },
  { label: "البرامج التدريبية", href: "/training" },
  { label: "الفعاليات", href: "/events" },
  { label: "خدمات المركز", href: "/services" },
  { label: "الأخبار", href: "/news" },
  { label: "الميديا", href: "/media" },
  { label: "من نحن", href: "/who-we-are" },
  { label: "تواصل معنا", href: "/contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMobileMenuOpen((prev) => !prev);
  const handleMenuClose = () => setIsMobileMenuOpen(false);

  const getIsActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8 lg:pt-9" style={{ gap: "var(--gap-navbar)" }}>
        {/* ── Upper row ────────────────────────────────────────────────── */}
        <div className="flex h-14 items-center justify-between">
          {/* Brand logo */}
          <Link href="/" aria-label="أوتاد القانون للكتب — الصفحة الرئيسية">
            <Image
              src="/assets/logo.svg"
              alt="أوتاد القانون للكتب"
              width={76}
              height={87}
              priority
              className="h-10 w-auto object-contain lg:h-auto"
            />
          </Link>

          {/* Desktop nav links — hidden below lg */}
          <nav aria-label="القائمة الرئيسية" className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map(({ label, href }) => {
                const isActive = getIsActive(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "text-base font-sans leading-5 transition-colors",
                        isActive
                          ? "text-brand-accent-gold-dark underline"
                          : "text-brand-secondary hover:text-brand-secondary-dark"
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop actions — hidden below lg */}
          <div className="hidden items-center gap-4 lg:flex">
            <button
              type="button"
              aria-label="بحث"
              className="flex h-10 w-10 items-center justify-center rounded-full text-brand-neutral-dark transition-colors hover:bg-gray-50"
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              type="button"
              className="flex items-center justify-center rounded-full bg-white text-xl font-normal text-black"
              /* Drop-shadow filter is used here instead of box-shadow because Figma specs export dropshadows as filters for non-rectangular containers. */
              style={{
                height: "var(--height-login-btn)",
                width: "var(--width-login-btn)",
                filter: "var(--shadow-login-btn)",
              }}
            >
              تسجيل دخول
            </button>
          </div>

          {/* Mobile actions — visible below lg */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              aria-label="بحث"
              className="flex h-9 w-9 items-center justify-center rounded-full text-brand-neutral-dark hover:bg-gray-50"
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              type="button"
              aria-label={isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={handleMenuToggle}
              className="flex h-9 w-9 items-center justify-center rounded-full text-brand-neutral-dark hover:bg-gray-50"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* ── Desktop search bar — hidden below lg ─────────────────────── */}
        <div className="hidden lg:block">
          <SearchBar />
        </div>

        {/* ── Mobile search bar — visible below lg, always visible ─────── */}
        <div className="py-3 lg:hidden">
          <SearchBar />
        </div>
      </div>

      {/* ── Mobile menu drawer ────────────────────────────────────────── */}
      {isMobileMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="القائمة الرئيسية للجوال"
          className="border-t border-brand-muted/30 bg-white lg:hidden"
        >
          <ul className="flex flex-col divide-y divide-brand-muted/20 px-4">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = getIsActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={handleMenuClose}
                    className={`block py-3.5 text-base font-semibold ${
                      isActive
                        ? "text-brand-accent-gold-dark underline underline-offset-4"
                        : "text-brand-secondary"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}

            <li className="py-4">
              <button
                type="button"
                className="h-12 w-full rounded-full bg-white text-base font-normal text-black"
                /* Drop-shadow filter is used here instead of box-shadow because Figma specs export dropshadows as filters for non-rectangular containers. */
                style={{
                  filter: "var(--shadow-login-btn-mobile)",
                }}
              >
                تسجيل دخول
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
