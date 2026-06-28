interface SectionHeadingProps {
  children: React.ReactNode;
  /** Optionally override the rendered heading level. Defaults to h2. */
  as?: "h1" | "h2" | "h3";
}

// Colocated style constant — matches Figma text style: 48px / semibold / brand-heading / RTL.
// Font-size uses clamp() for responsive scaling; values reference CSS tokens from globals.css @theme.
const HEADING_CLASSES =
  "mb-10 text-right font-sans font-semibold text-brand-heading";

const HEADING_STYLE = {
  fontSize: "clamp(1.875rem, 4vw, var(--font-size-section-heading))",
  lineHeight: "var(--line-height-section-heading)",
} as const;

/**
 * Canonical section heading used throughout the Home catalog sections.
 * Typography spec from Figma: 48px / semibold / brand-heading color / RTL right-aligned.
 * Styles colocated here — no global CSS class needed.
 */
export function SectionHeading({
  children,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <Tag className={HEADING_CLASSES} style={HEADING_STYLE}>
      {children}
    </Tag>
  );
}
