import Link from "next/link";
import Image from "next/image";

// ─── Footer data models & constants (module-scoped for stable references) ───

interface SocialLink {
  href: string;
  icon: string;
  label: string;
  alt: string;
}

const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    href: "https://youtube.com",
    icon: "/assets/YouTube.svg",
    label: "تابعنا على يوتيوب",
    alt: "يوتيوب",
  },
  {
    href: "https://twitter.com",
    icon: "/assets/twitter.svg",
    label: "تابعنا على إكس",
    alt: "إكس",
  },
  {
    href: "https://linkedin.com",
    icon: "/assets/linkedin.svg",
    label: "تابعنا على لينكد إن",
    alt: "لينكد إن",
  },
  {
    href: "https://instagram.com",
    icon: "/assets/instagram.svg",
    label: "تابعنا على إنستغرام",
    alt: "إنستغرام",
  },
] as const;

interface LegalLink {
  label: string;
  href: string;
}

const LEGAL_LINKS: readonly LegalLink[] = [
  { label: "شروط وأحكام الاستخدام", href: "/terms" },
  { label: "سياسة الخصوصية", href: "/privacy" },
  { label: "سياسة الاستبدال والاسترجاع", href: "/returns" },
] as const;

interface RelatedSite {
  label: string;
  href: string;
}

const RELATED_SITES: readonly RelatedSite[] = [
  { label: "مركز اوتاد القانون للتدريب", href: "https://awtadlaw.com" },
  {
    label: "شركة اوتاد القانون للمحاماة والاستشارات القانونية",
    href: "https://awtadlaw.com",
  },
  {
    label: "الموقع الرسمي للدكتور فارس بن محمد الشمري",
    href: "https://awtadlaw.com",
  },
] as const;

// ─── Footer Component ───────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer
      className="relative mt-20 w-full bg-cover bg-center text-white"
      style={{
        // Library bookshelf background image pre-applied with overlay from design tokens
        backgroundImage:
          "linear-gradient(var(--footer-overlay), var(--footer-overlay)), url('/assets/bg-footer.svg')",
      }}
    >
      {/* ── Top Contact capsule Button (Figma Rectangle 43) ──────────── */}
      <div className="absolute top-0 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <Link
          href="/contact"
          style={{
            height: "var(--height-footer-cta)",
            width: "var(--width-footer-cta)",
          }}
          className="flex items-center justify-center rounded-full bg-brand-accent-gold-dark font-sans text-xl font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-brand-accent-gold active:scale-95"
        >
          تواصل معنا
        </Link>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-16 pt-24 sm:px-12 lg:px-20">
        {/* ── Calligraphy Logo Image (Figma Screenshot 1 / title-footer.png) ── */}
        <div className="flex justify-center py-10">
          <Image
            src="/assets/title-footer.png"
            alt="ثقتكم نبراس طريقنا"
            width={604}
            height={137}
            style={{
              height: "var(--height-footer-logo)",
              maxWidth: "var(--width-footer-logo)",
            }}
            className="w-auto select-none object-contain"
            draggable="false"
          />
        </div>

        {/* ── Bottom Footer Columns (Group 10, 11, 12, 14) aligned to match image flow ── */}
        <div className="mt-16 grid grid-cols-1 gap-12 border-t border-white/10 pt-16 md:grid-cols-3">
          {/* Column 1: تابعنا على (visually right in RTL layout, centered content) */}
          <div className="flex flex-col items-center text-center">
            <h3 className="mb-6 font-sans text-xl font-medium text-brand-accent-gold">
              تابعنا على
            </h3>
            {/* Social Icons row using Figma SVGs from assets folder */}
            <div className="flex items-center gap-6 justify-center">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <Image
                    src={link.icon}
                    alt={link.alt}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: تحميل القوائم (visually center, content centered) */}
          <div className="flex flex-col items-center text-center">
            <h3 className="mb-6 font-sans text-xl font-medium text-brand-accent-gold">
              تحميل القوائم
            </h3>
            <ul className="flex flex-col gap-3 list-none m-0 p-0 text-sm text-gray-300">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block font-medium transition-colors duration-200 hover:text-brand-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: مواقع ذات صلة (visually left in RTL layout) */}
          <div className="flex flex-col items-end">
            <h3
              style={{ maxWidth: "var(--width-footer-col3)" }}
              className="mb-6 w-full font-sans text-xl font-medium text-brand-accent-gold"
            >
              مواقع ذات صلة
            </h3>
            <ul
              style={{ maxWidth: "var(--width-footer-col3)" }}
              className="flex w-full flex-col gap-3 list-none m-0 p-0 font-sans text-sm text-gray-300"
            >
              {RELATED_SITES.map((site) => (
                <li key={site.label}>
                  <a
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={site.label}
                    className="flex w-full items-center justify-end gap-2 px-5 font-medium transition-colors duration-200 hover:text-brand-primary"
                  >
                    <span
                      className="select-none font-bold text-white"
                      aria-hidden="true"
                    >
                      •
                    </span>
                    <span>{site.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
