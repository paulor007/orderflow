import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { SectionMarker } from "./SectionMarker";
import { SectionTitle } from "./SectionTitle";

export function ArchitectureSection() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-titulo"
      className="relative isolate overflow-hidden py-24 md:py-32"
    >
      {/* Section background and gradient overlays */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-section-grid opacity-60" />

        <div className="absolute inset-0 bg-linear-to-b from-canvas via-transparent to-canvas" />
      </div>

      <div className="page-container">
        <SectionMarker sectionId="como-funciona" />

        <div className="mb-14 max-w-2xl">
          <SectionTitle
            id="como-funciona-titulo"
            overline="Como funciona"
            lines={["Cada área no seu ritmo,", "todas em sintonia."]}
          />

          <p className="mt-4 text-lg text-fg-muted">
            Pedidos, estoque, pagamentos, avisos aos clientes e cadastros
            trabalham conectados, em um só lugar. Quando algo acontece em uma
            área, as outras são avisadas e dão o próximo passo: um pedido criado
            reserva o estoque, e um pagamento aprovado libera a separação
          </p>
        </div>

        <ArchitectureDiagram />
      </div>
    </section>
  );
}
