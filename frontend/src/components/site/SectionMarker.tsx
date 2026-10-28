import { LogoMark } from "../brand/Logo";
import { LANDING_SECTIONS, type LandingSectionId } from "./landingSections";

type SectionMarkerProps = {
  sectionId: LandingSectionId;
};

/**
 * Displays a numbered marker for a landing page section.
 * The section number follows the order in LANDING_SECTIONS.
 */
export function SectionMarker({ sectionId }: SectionMarkerProps) {
  const position = LANDING_SECTIONS.findIndex(
    (section) => section.id === sectionId,
  );

  const { label } = LANDING_SECTIONS[position];

  const number = String(position + 1).padStart(2, "0");

  return (
    <div aria-hidden="true" className="mb-4 flex items-center gap-3">
      <LogoMark className="size-5 text-accent" />

      <span className="font-mono text-2xs tracking-overline text-accent uppercase">
        {number} / {label}
      </span>

      <span className="relative h-px flex-1 bg-line">
        <span className="absolute -top-1 left-1/4 h-2 w-px bg-line" />

        <span className="absolute -top-1 left-1/2 h-2 w-px bg-line" />

        <span className="absolute -top-1 left-3/4 h-2 w-px bg-line" />

        <span className="absolute -top-1.5 right-0 h-3 w-px bg-line-strong" />
      </span>
    </div>
  );
}
