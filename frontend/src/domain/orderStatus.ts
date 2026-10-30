import type { StatusTone } from "../components/ui/StatusBadge";

/** Order situations, as defined in the functional specification. */
export type OrderStatus =
  | "PENDING"
  | "AWAITING_PAYMENT"
  | "PAID"
  | "PICKING"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED";

/** Screen label and visual category of each order situation. */
export const ORDER_STATUS: Record<
  OrderStatus,
  { label: string; tone: StatusTone }
> = {
  PENDING: { label: "Pendente", tone: "neutral" },
  AWAITING_PAYMENT: { label: "Aguardando pagamento", tone: "warning" },
  PAID: { label: "Pago", tone: "success" },
  PICKING: { label: "Em separação", tone: "info" },
  SHIPPED: { label: "Enviado", tone: "info" },
  DELIVERED: { label: "Entregue", tone: "success" },
  CANCELLED: { label: "Cancelado", tone: "danger" },
};
