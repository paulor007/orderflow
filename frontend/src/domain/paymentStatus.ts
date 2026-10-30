import type { StatusTone } from "../components/ui/StatusBadge";

/**
 * Payment situations defined in the functional specification.
 * Internal codes follow the same convention as order situations.
 */
export type PaymentStatus =
  | "AWAITING_PROVIDER"
  | "AWAITING_PAYMENT"
  | "APPROVED"
  | "DECLINED"
  | "EXPIRED"
  | "CANCELLED"
  | "REFUNDED";

/** Screen label and visual category of each payment situation. */
export const PAYMENT_STATUS: Record<
  PaymentStatus,
  { label: string; tone: StatusTone }
> = {
  AWAITING_PROVIDER: { label: "Aguardando provedor", tone: "warning" },
  AWAITING_PAYMENT: { label: "Aguardando pagamento", tone: "warning" },
  APPROVED: { label: "Aprovado", tone: "success" },
  DECLINED: { label: "Recusado", tone: "danger" },
  EXPIRED: { label: "Expirado", tone: "neutral" },
  CANCELLED: { label: "Cancelado", tone: "neutral" },
  REFUNDED: { label: "Estornado", tone: "info" },
};
