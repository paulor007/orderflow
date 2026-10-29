import { ArchitectureSection } from "../components/site/ArchitectureSection";
import { BenefitsSection } from "../components/site/BenefitsSection";
import { DomainsSection } from "../components/site/DomainsSection";
import { HeroSection } from "../components/site/HeroSection";

export function HomePage() {
  return (
    <>
      <title>OrderFlow — Gestão de pedidos e operações</title>

      <HeroSection />

      <ArchitectureSection />

      <DomainsSection />

      <BenefitsSection />
    </>
  );
}
