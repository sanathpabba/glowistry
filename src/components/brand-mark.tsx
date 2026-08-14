export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand-mark" aria-label="Glowistry">
      <svg viewBox="0 0 48 38" aria-hidden="true">
        <path d="M24 34C12 28 9 18 12 9c7 2 11 7 12 15 1-8 5-13 12-15 3 9 0 19-12 25Z" />
        <path d="M24 22C18 17 18 10 24 3c6 7 6 14 0 19ZM11 16C6 16 3 18 2 23c8 2 15 5 22 11M37 16c5 0 8 2 9 7-8 2-15 5-22 11" />
      </svg>
      {!compact && <span>Glowistry</span>}
    </span>
  );
}
