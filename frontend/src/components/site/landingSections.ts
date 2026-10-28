/**
 * Landing page sections in their display order.
 * Section markers derive their numbering from this list.
 */
export const LANDING_SECTIONS = [
  { id: "beneficios", label: "Benefícios" },
] as const;

export type LandingSectionId = (typeof LANDING_SECTIONS)[number]["id"];
