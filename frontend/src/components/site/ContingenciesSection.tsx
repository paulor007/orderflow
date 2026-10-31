import {
  ArrowRight,
  Ban,
  PackageX,
  TimerOff,
  Undo2,
  type LucideIcon,
} from "lucide-react";
import meshAbstract from "../../assets/mesh-abstract.webp";
import { ORDER_STATUS, type OrderStatus } from "../../domain/orderStatus";
import { StatusBadge } from "../ui/StatusBadge";
import { SectionMarker } from "./SectionMarker";
import { SectionTitle } from "./SectionTitle";

type Contingency = {
  icon: LucideIcon;
  title: string;
  /** When the situation happens, in a few words. */
  trigger: string;
  description: string;
  /** Order situation before cancellation. */
  from: OrderStatus;
  /** Result of the cancellation. */
  outcome: string;
};

// Each case follows the business rules in the functional specification.
// The cancellation reason is recorded and the customer is notified.
const contingencies: Contingency[] = [
  {
    // RN07
    icon: PackageX,
    title: "Estoque insuficiente",
    trigger: "falta saldo para algum item",
    description:
      "Nenhum item é reservado e o pedido é cancelado com o motivo “estoque insuficiente”. O cliente recebe o aviso por e-mail.",
    from: "PENDING",
    outcome: "nada reservado",
  },
  {
    // RN11
    icon: Ban,
    title: "Cartão recusado",
    trigger: "o pagamento não é aprovado",
    description:
      "O pedido é cancelado com o motivo “pagamento recusado”, os itens reservados voltam ao estoque e o cliente é avisado.",
    from: "AWAITING_PAYMENT",
    outcome: "reserva liberada",
  },
  {
    // RN10
    icon: TimerOff,
    title: "PIX vencido",
    trigger: "a cobrança não é paga no prazo",
    description:
      "A cobrança PIX tem prazo de validade. Quando ele termina sem pagamento, a cobrança expira, o pedido é cancelado e os itens voltam ao estoque.",
    from: "AWAITING_PAYMENT",
    outcome: "cobrança expirada · reserva liberada",
  },
  {
    // RN15, RF16, RF22
    icon: Undo2,
    title: "Cancelamento depois do pagamento",
    trigger: "o pedido é cancelado antes do envio",
    description:
      "Um pedido pago pode ser cancelado até o envio, sempre com o motivo informado. O estorno é feito automaticamente e os itens voltam ao estoque.",
    from: "PAID",
    outcome: "estorno automático · reserva liberada",
  },
];

const cancelled = ORDER_STATUS.CANCELLED;

export function ContingenciesSection() {
  return (
    <section
      id="imprevistos"
      aria-labelledby="imprevistos-titulo"
      className="relative isolate overflow-hidden py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-section-grid opacity-40" />
        <div className="absolute inset-0 bg-linear-to-b from-canvas via-transparent to-canvas" />
      </div>

      <div className="page-container grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Narrative column stays visible while the cases scroll. */}
        <div className="lg:sticky lg:top-28">
          <SectionMarker sectionId="imprevistos" />

          <SectionTitle
            id="imprevistos-titulo"
            overline="Quando algo sai do previsto"
            lines={["Imprevistos acontecem.", "O pedido sabe o caminho."]}
          />

          <p className="mt-4 max-w-md text-lg text-fg-muted">
            Falta de estoque, cartão recusado, PIX que vence, cancelamento
            depois do pagamento: cada situação tem uma regra definida. O pedido
            muda de situação, o motivo fica registrado e o cliente é avisado.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2 font-mono text-2xs text-fg-muted">
            <li className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-raised/60 px-3 py-1">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-accent"
              />
              motivo sempre registrado
            </li>

            <li className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-raised/60 px-3 py-1">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-warning"
              />
              cliente avisado por e-mail
            </li>
          </ul>

          <div className="crosshair mt-10">
            <div className="overflow-hidden rounded-card border border-line">
              <img
                src={meshAbstract}
                alt=""
                loading="lazy"
                decoding="async"
                className="aspect-3/2 w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Contingency cards. */}
        <ul className="space-y-4">
          {contingencies.map(
            ({ icon: Icon, title, trigger, description, from, outcome }) => (
              <li
                key={title}
                className="flex flex-col gap-4 rounded-card border border-line bg-surface/80 p-6 backdrop-blur-sm transition duration-300 hover:border-accent/40 hover:bg-surface sm:flex-row sm:gap-5"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-control bg-accent/10 text-accent">
                  <Icon className="size-5" />
                </span>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold text-fg">{title}</h3>

                    <span className="font-mono text-2xs text-accent">
                      quando {trigger}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {description}
                  </p>

                  <p className="mt-4 flex flex-wrap items-center gap-2">
                    <StatusBadge tone={ORDER_STATUS[from].tone}>
                      {ORDER_STATUS[from].label}
                    </StatusBadge>

                    <ArrowRight className="size-3.5 text-fg-muted" />
                    <span className="sr-only">passa para</span>

                    <StatusBadge tone={cancelled.tone}>
                      {cancelled.label}
                    </StatusBadge>

                    <span className="font-mono text-2xs text-fg-muted">
                      {outcome}
                    </span>
                  </p>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
