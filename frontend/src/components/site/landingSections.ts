export const LANDING_SECTIONS = [
  { id: "como-funciona", label: "Como funciona" },
  { id: "areas", label: "Áreas da operação" },
  { id: "imprevistos", label: "Imprevistos" },
  { id: "visao-da-operacao", label: "Visão da operação" },
  { id: "beneficios", label: "Benefícios" },
] as const;

export type LandingSectionId = (typeof LANDING_SECTIONS)[number]["id"];
