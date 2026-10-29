/**
 * Landing page sections, in the order they appear on the page.
 * The number shown in each section marker comes from this position,
 * so inserting a section renumbers the following ones automatically.
 * The id is also the anchor in the address bar (/#como-funciona).
 */
export const LANDING_SECTIONS = [
  { id: "como-funciona", label: "Como funciona" },
  { id: "areas", label: "Áreas da operação" },
  { id: "beneficios", label: "Benefícios" },
] as const;

export type LandingSectionId = (typeof LANDING_SECTIONS)[number]["id"];
