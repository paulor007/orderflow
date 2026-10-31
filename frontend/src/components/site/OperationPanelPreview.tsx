import { ORDER_STATUS, type OrderStatus } from "../../domain/orderStatus";
import { PAYMENT_STATUS } from "../../domain/paymentStatus";
import { cn } from "../../lib/cn";
import { StatusBadge, type StatusTone } from "../ui/StatusBadge";

/**
 * Illustrative data for the public landing page.
 * Derived indicators follow the formulas used by the operation panel.
 */

const ordersByStatus: Record<OrderStatus, number> = {
  PENDING: 0,
  AWAITING_PAYMENT: 2,
  PAID: 1,
  PICKING: 1,
  SHIPPED: 1,
  DELIVERED: 1,
  CANCELLED: 3,
};

// Situations reached after payment approval.
const PAID_STATUSES: OrderStatus[] = [
  "PAID",
  "PICKING",
  "SHIPPED",
  "DELIVERED",
];

// Orders #1038, #1039, #1041 and #1042.
// Order #1040 was refunded and does not count.
const paidRevenue = 2485.5;

const statuses = Object.keys(ordersByStatus) as OrderStatus[];

const createdOrders = statuses.reduce(
  (total, status) => total + ordersByStatus[status],
  0,
);

const paidOrders = PAID_STATUSES.reduce(
  (total, status) => total + ordersByStatus[status],
  0,
);

const averageTicket = paidRevenue / paidOrders;

const largestGroup = Math.max(...Object.values(ordersByStatus));

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const indicators = [
  {
    label: "Pedidos criados",
    value: String(createdOrders),
    hint: "últimos 7 dias",
  },
  {
    label: "Aguardando pagamento",
    value: String(ordersByStatus.AWAITING_PAYMENT),
    hint: "PIX e cartão",
  },
  {
    label: "Faturamento pago",
    value: currency.format(paidRevenue),
    hint: `${paidOrders} pedidos pagos`,
  },
  {
    label: "Ticket médio",
    value: currency.format(averageTicket),
    hint: "faturamento ÷ pedidos pagos",
  },
];

const latestOrders: {
  number: number;
  customer: string;
  total: number;
  status: OrderStatus;
}[] = [
  {
    number: 1044,
    customer: "Ana Beatriz Souza",
    total: 219.9,
    status: "AWAITING_PAYMENT",
  },
  {
    number: 1043,
    customer: "Papelaria Ponto Final Ltda",
    total: 328.8,
    status: "AWAITING_PAYMENT",
  },
  {
    number: 1042,
    customer: "Empório Serra Azul Ltda",
    total: 1463.5,
    status: "PAID",
  },
  {
    number: 1041,
    customer: "Ana Beatriz Souza",
    total: 222.5,
    status: "PICKING",
  },
];

// Products below the minimum require attention.
const attention: {
  text: string;
  detail: string;
  tone: StatusTone;
}[] = [
  {
    text: "Cobrança PIX do pedido #1043",
    detail: "vence em 3 min",
    tone: "warning",
  },
  {
    text: "Jogo de facas inox, 6 peças",
    detail: "6 disponíveis · mínimo 8",
    tone: "warning",
  },
  {
    text: "Cadeira de escritório ergonômica",
    detail: "3 disponíveis · mínimo 5",
    tone: "warning",
  },
];

type TimelineEntry = {
  time: string;
  label: string;
  note: string;
  tone: StatusTone;
};

// Order #1040 follows the documented cancellation and refund history.
const timeline: TimelineEntry[] = [
  {
    time: "17/10 15:05",
    ...ORDER_STATUS.PENDING,
    note: "criado por Rafael Lima · atendimento",
  },
  {
    time: "17/10 15:05",
    ...ORDER_STATUS.AWAITING_PAYMENT,
    note: "estoque reservado automaticamente",
  },
  {
    time: "17/10 15:05",
    ...ORDER_STATUS.PAID,
    note: "cartão aprovado",
  },
  {
    time: "18/10 09:30",
    ...ORDER_STATUS.CANCELLED,
    note: "Carlos Mendes · financeiro · motivo: cliente desistiu da compra",
  },
  {
    time: "18/10 09:30",
    label: `Estorno de ${currency.format(658)}`,
    tone: "info",
    note: "valor devolvido ao cliente",
  },
  {
    time: "18/10 09:30",
    label: "Reserva liberada",
    tone: "neutral",
    note: "itens de volta ao estoque",
  },
];

const barTone: Record<StatusTone, string> = {
  neutral: "bg-line-strong",
  warning: "bg-warning",
  success: "bg-success",
  info: "bg-info",
  danger: "bg-danger",
};

const dotTone: Record<StatusTone, string> = {
  neutral: "bg-fg-muted",
  warning: "bg-warning",
  success: "bg-success",
  info: "bg-info",
  danger: "bg-danger",
};

function PanelLabel({ children }: { children: string }) {
  return (
    <p className="mb-3 font-mono text-2xs tracking-overline text-fg-muted uppercase">
      {children}
    </p>
  );
}

export function OperationPanelPreview() {
  return (
    <figure className="crosshair">
      <figcaption className="sr-only">
        Exemplo ilustrativo do painel nos últimos 7 dias: pedidos criados,
        pedidos aguardando pagamento, faturamento pago e ticket médio; pedidos
        por situação; últimos pedidos; o que precisa de atenção, como cobranças
        PIX perto de vencer e produtos abaixo do estoque mínimo; e a linha do
        tempo de um pedido cancelado depois do pagamento, com o estorno.
      </figcaption>

      <div
        aria-hidden="true"
        className="overflow-hidden rounded-card border border-line bg-surface shadow-overlay"
      >
        {/* Preview window header. */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-surface-raised/60 px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-danger/70" />
              <span className="size-2.5 rounded-full bg-warning/70" />
              <span className="size-2.5 rounded-full bg-accent/70" />
            </div>

            <span className="font-mono text-xs text-fg-muted">painel</span>
          </div>

          <div className="flex items-center gap-1 rounded-control border border-line p-0.5 font-mono text-2xs">
            <span className="px-2 py-0.5 text-fg-muted">hoje</span>

            <span className="rounded-control bg-accent/15 px-2 py-0.5 text-accent">
              7 dias
            </span>

            <span className="px-2 py-0.5 text-fg-muted">30 dias</span>
          </div>

          <span className="hidden font-mono text-2xs text-fg-muted sm:inline">
            exemplo ilustrativo
          </span>
        </div>

        {/* Summary indicators. */}
        <div className="grid grid-cols-2 gap-3 border-b border-line p-5 md:grid-cols-4 md:p-6">
          {indicators.map(({ label, value, hint }) => (
            <div
              key={label}
              className="rounded-control border border-line bg-surface-raised/40 p-3.5"
            >
              <p className="font-mono text-2xs tracking-wide text-fg-muted uppercase">
                {label}
              </p>

              <p className="mt-1 font-mono text-lg font-semibold text-fg md:text-xl">
                {value}
              </p>

              <p className="mt-0.5 font-mono text-2xs text-accent">{hint}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-px bg-line lg:grid-cols-[1.3fr_1fr]">
          {/* Orders by status and latest orders. */}
          <div className="space-y-8 bg-surface p-5 md:p-6">
            <div>
              <PanelLabel>Pedidos por situação</PanelLabel>

              <ul className="space-y-2">
                {statuses.map((status) => {
                  const { label, tone } = ORDER_STATUS[status];
                  const count = ordersByStatus[status];

                  return (
                    <li key={status} className="flex items-center gap-3">
                      <span className="w-36 shrink-0 truncate text-xs text-fg-muted">
                        {label}
                      </span>

                      <span className="relative h-2.5 flex-1 rounded-full bg-canvas/70">
                        <span
                          className={cn(
                            "absolute inset-y-0 left-0 rounded-full opacity-80",
                            barTone[tone],
                          )}
                          style={{
                            width: `${(count / largestGroup) * 100}%`,
                          }}
                        />
                      </span>

                      <span className="w-8 shrink-0 text-right font-mono text-xs text-fg">
                        {count}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <PanelLabel>Últimos pedidos</PanelLabel>

              <ul className="divide-y divide-line rounded-control border border-line bg-surface-raised/30">
                {latestOrders.map(({ number, customer, total, status }) => (
                  <li
                    key={number}
                    className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 px-4 py-2.5"
                  >
                    <span className="flex min-w-0 items-baseline gap-3">
                      <span className="font-mono text-xs text-fg">
                        #{number}
                      </span>

                      <span className="truncate text-sm text-fg-muted">
                        {customer}
                      </span>
                    </span>

                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-fg">
                        {currency.format(total)}
                      </span>

                      <StatusBadge tone={ORDER_STATUS[status].tone}>
                        {ORDER_STATUS[status].label}
                      </StatusBadge>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Alerts and order history. */}
          <div className="space-y-8 bg-surface p-5 md:p-6">
            <div>
              <PanelLabel>Precisa de atenção</PanelLabel>

              <ul className="space-y-2">
                {attention.map(({ text, detail, tone }) => (
                  <li
                    key={text}
                    className="flex items-start gap-3 rounded-control border border-line bg-surface-raised/30 px-4 py-2.5"
                  >
                    <span
                      className={cn(
                        "mt-1.5 size-2 shrink-0 rounded-full",
                        dotTone[tone],
                      )}
                    />

                    <span>
                      <span className="block text-sm text-fg">{text}</span>

                      <span className="block font-mono text-2xs text-fg-muted">
                        {detail}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between gap-3">
                <PanelLabel>Pedido #1040</PanelLabel>

                <StatusBadge tone={ORDER_STATUS.CANCELLED.tone}>
                  {ORDER_STATUS.CANCELLED.label}
                </StatusBadge>
              </div>

              <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-control border border-line bg-surface-raised/30 px-4 py-2.5">
                <span className="text-sm text-fg-muted">
                  Cartão · {currency.format(658)}
                </span>

                <StatusBadge tone={PAYMENT_STATUS.REFUNDED.tone}>
                  {PAYMENT_STATUS.REFUNDED.label}
                </StatusBadge>
              </div>

              <ol className="relative space-y-3 border-l border-line pl-5">
                {timeline.map(({ time, label, note, tone }) => (
                  <li key={label} className="relative">
                    <span
                      className={cn(
                        "absolute top-1.5 -left-6.5 size-2.5 rounded-full border-2 border-surface",
                        dotTone[tone],
                      )}
                    />

                    <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <span className="font-mono text-2xs text-fg-muted">
                        {time}
                      </span>

                      <span className="text-sm text-fg">{label}</span>
                    </p>

                    <p className="font-mono text-2xs text-fg-muted">{note}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
