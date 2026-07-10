interface SectionDividerProps {
  from: string;
  to: string;
  /** Height in px — 100 is a soft fade, 140 is very gradual */
  height?: number;
}

/**
 * Renders a gradient fade between two section background colors.
 * Use in page.tsx between every pair of sections with different backgrounds.
 * No waves, no borders — just a clean atmospheric blend.
 */
export function SectionDivider({ from, to, height = 110 }: SectionDividerProps) {
  return (
    <div
      aria-hidden
      style={{
        height,
        background: `linear-gradient(180deg, ${from} 0%, ${to} 100%)`,
        display: "block",
        margin: 0,
        padding: 0,
      }}
    />
  );
}
