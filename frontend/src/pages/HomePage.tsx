import { BenefitsSection } from "../components/site/BenefitsSection";
import { HeroSection } from "../components/site/HeroSection";

export function HomePage() {
  return (
    <>
      <title>OrderFlow — Gestão de pedidos e operações</title>

      <HeroSection />

      <BenefitsSection />
    </>
  );
}
