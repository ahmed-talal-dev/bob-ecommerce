import Link from "next/link";

interface ShowMoreButtonProps {
  /** When provided renders a Next.js Link for navigation instead of a button */
  href?: string;
  onClick?: () => void;
  label?: string;
}

/**
 * Reusable rounded pill CTA button used in every catalog section.
 * Visual spec: Figma "Show More" pill — gold background, white text.
 * Styles are colocated here as a Tailwind className constant (no global CSS class needed).
 */

// Colocated style constant — mirrors the removed .btn-show-more CSS class.
// Dimensions reference CSS design tokens defined in globals.css @theme block.
const BTN_CLASSES =
  "flex items-center justify-center rounded-full bg-brand-accent-gold-dark font-sans font-normal text-white shadow-sm transition-colors duration-150 hover:bg-brand-accent-gold-dark/80";

const BTN_STYLE = {
  height: "var(--height-btn-cta)",
  width: "var(--width-btn-cta)",
  fontSize: "var(--font-size-btn-cta)",
} as const;

export function ShowMoreButton({
  href,
  onClick,
  label = "اعرض المزيد",
}: ShowMoreButtonProps) {
  if (href) {
    return (
      <Link href={href} className={BTN_CLASSES} style={BTN_STYLE}>
        {label}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={BTN_CLASSES} style={BTN_STYLE}>
      {label}
    </button>
  );
}
