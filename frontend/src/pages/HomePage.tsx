import { ArchitectureSection } from "../components/site/ArchitectureSection";
import { BenefitsSection } from "../components/site/BenefitsSection";
import { DomainsSection } from "../components/site/DomainsSection";
import { HeroSection } from "../components/site/HeroSection";
import { ContingenciesSection } from "../components/site/ContingenciesSection";
import { OperationOverviewSection } from "../components/site/OperationOverviewSection";

export function HomePage() {
  return (
    <>
      <title>OrderFlow — Gestão de pedidos e operações</title>

      <HeroSection />

      <ArchitectureSection />

      <DomainsSection />

      <ContingenciesSection />

      <OperationOverviewSection />

      <BenefitsSection />
    </>
  );
}
