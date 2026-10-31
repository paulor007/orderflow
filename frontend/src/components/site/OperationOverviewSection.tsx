import { OperationPanelPreview } from "./OperationPanelPreview";
import { SectionMarker } from "./SectionMarker";
import { SectionTitle } from "./SectionTitle";

export function OperationOverviewSection() {
  return (
    <section
      id="visao-da-operacao"
      aria-labelledby="visao-da-operacao-titulo"
      className="relative py-24 md:py-32"
    >
      <div className="page-container">
        <SectionMarker sectionId="visao-da-operacao" />

        <div className="mb-14 max-w-2xl">
          <SectionTitle
            id="visao-da-operacao-titulo"
            overline="Visão da operação"
            lines={["Cada pedido, visível.", "Cada real, contado."]}
          />

          <p className="mt-4 text-lg text-fg-muted">
            O painel mostra os números do período, calculados a partir dos
            pedidos registrados: quantos pedidos entraram, quantos aguardam
            pagamento, quanto foi faturado e o ticket médio. Cada pedido tem sua
            linha do tempo, e o que precisa de atenção aparece em destaque.
          </p>
        </div>

        <OperationPanelPreview />
      </div>
    </section>
  );
}
