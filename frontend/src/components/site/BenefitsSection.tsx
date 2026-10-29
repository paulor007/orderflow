import {
  Boxes,
  ChartColumn,
  CreditCard,
  MailCheck,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import tracingVisual from "../../assets/tracing-visual.webp";
import { cn } from "../../lib/cn";
import { SectionMarker } from "./SectionMarker";
import { SectionTitle } from "./SectionTitle";

type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string;
  wide?: boolean;
};

// Benefits are based on the planned functional requirements.
const benefits: Benefit[] = [
  {
    // RF08, RF11, RN06-RN08
    icon: Boxes,
    title: "Estoque sempre em dia",
    description:
      "Os itens ficam reservados assim que o pedido é criado, voltam ao saldo se ele for cancelado e só saem do estoque no envio. Você não vende o que não tem.",
    tags: "reserva · liberação · baixa no envio",
    wide: true,
  },
  {
    // RF18-RF21
    icon: CreditCard,
    title: "Pagamento sob controle",
    description:
      "PIX com prazo de validade ou cartão com resposta na hora. O pedido só segue para a separação depois do pagamento aprovado.",
    tags: "PIX · cartão · prazo de validade",
  },
  {
    // RF24, RF25
    icon: MailCheck,
    title: "Cliente sempre avisado",
    description:
      "O cliente recebe um e-mail quando o pedido é pago, enviado, entregue ou cancelado, e cada envio fica registrado no pedido.",
    tags: "pago · enviado · entregue · cancelado",
  },
  {
    // RF26
    icon: ChartColumn,
    title: "Números da operação",
    description:
      "Pedidos criados, aguardando pagamento, faturamento, ticket médio e produtos abaixo do mínimo, calculados a partir dos pedidos registrados.",
    tags: "faturamento · ticket médio · estoque mínimo",
  },
  {
    // RF16, RF22, RN10, RN11, RN15, RN16
    icon: ShieldCheck,
    title: "Nenhum pedido pela metade",
    description:
      "Cartão recusado, PIX vencido ou cancelamento antes do envio: a reserva volta ao estoque, o pagamento já feito é estornado e o motivo fica registrado no pedido. Ninguém precisa desfazer nada à mão.",
    tags: "cancelamento com motivo · estorno · liberação da reserva",
    wide: true,
  },
];

export function BenefitsSection() {
  return (
    <section
      id="beneficios"
      aria-labelledby="beneficios-titulo"
      className="relative isolate overflow-hidden py-24 md:py-32"
    >
      {/* Background grid for the benefits section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-section-grid opacity-40" />

        <div className="absolute inset-0 bg-linear-to-b from-canvas via-transparent to-canvas" />
      </div>

      <div className="page-container">
        <SectionMarker sectionId="beneficios" />

        {/* Section heading */}
        <div className="mb-14 max-w-2xl">
          <SectionTitle
            id="beneficios-titulo"
            overline="Benefícios"
            lines={["Do pedido à entrega,", "sem nada se perder."]}
          />
        </div>

        {/* Responsive benefits grid */}
        <div className="grid gap-5 lg:grid-cols-3">
          {/* Order timeline illustration */}
          <div className="crosshair lg:row-span-2">
            <figure className="relative h-full min-h-64 overflow-hidden rounded-card border border-line">
              <img
                src={tracingVisual}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full object-cover"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-canvas/95 via-canvas/20 to-transparent"
              />

              <figcaption className="absolute inset-x-0 bottom-0 p-6">
                <span className="block font-mono text-2xs tracking-overline text-accent uppercase">
                  Linha do tempo
                </span>

                <span className="mt-2 block text-xl font-semibold text-fg">
                  A história de cada pedido, com data, hora e responsável.
                </span>
              </figcaption>
            </figure>
          </div>

          {/* Business benefit cards */}
          {benefits.map(({ icon: Icon, title, description, tags, wide }) => (
            <div
              key={title}
              className={cn(
                "flex flex-col rounded-card border border-line bg-surface/80 p-6 backdrop-blur-sm transition duration-300 hover:border-accent/40 motion-safe:hover:-translate-y-1",
                wide && "lg:col-span-2",
              )}
            >
              <div className="mb-4 flex size-11 items-center justify-center rounded-control bg-accent/10 text-accent">
                <Icon className="size-5" aria-hidden="true" />
              </div>

              <h3 className="text-lg font-semibold text-fg">{title}</h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">
                {description}
              </p>

              <p className="mt-4 border-t border-line pt-3 font-mono text-2xs text-accent">
                {tags}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
