import {
  Bell,
  Boxes,
  CreditCard,
  ShoppingCart,
  Tags,
  type LucideIcon,
} from "lucide-react";

export type DomainId =
  "orders" | "inventory" | "payments" | "notifications" | "masterdata";

export type Domain = {
  id: DomainId;
  name: string;
  /** CSS color of the area, always one of the domain design tokens */
  color: string;
  icon: LucideIcon;
  /** What the area takes care of, in a few words */
  focus: string;
  /** Who works with the area or receives what it produces */
  audience: string;
  description: string;
  /**
   * Internal: main event the area sends to the others (spec event catalog).
   * Never shown to visitors; it sets the direction of the diagram dots.
   */
  publishes?: string;
  /** Internal: main event the area receives from the others. */
  consumes?: string;
};

/**
 * Business areas of the platform, in the order the area cards show them.
 * Source: functional spec, sections 1 (profiles), 3 (rules) and 5 (services).
 */
export const DOMAINS: readonly Domain[] = [
  {
    id: "orders",
    name: "Pedidos",
    color: "var(--color-domain-orders)",
    icon: ShoppingCart,
    focus: "situação · linha do tempo",
    audience: "toda a equipe",
    description:
      "Mostra a situação de cada pedido, o histórico de cada etapa e os números do painel.",
    publishes: "OrderCreated",
    consumes: "PaymentApproved",
  },
  {
    id: "inventory",
    name: "Estoque",
    color: "var(--color-domain-inventory)",
    icon: Boxes,
    focus: "reserva · baixa · ajuste",
    audience: "estoque e expedição",
    description:
      "Controla saldos, reservas, baixas e ajustes. Um pedido só reserva os itens quando há saldo para todos, e o disponível nunca fica negativo.",
    publishes: "StockReserved",
    consumes: "OrderCreated",
  },
  {
    id: "payments",
    name: "Pagamentos",
    color: "var(--color-domain-payments)",
    icon: CreditCard,
    focus: "cobrança · estorno",
    audience: "financeiro",
    description:
      "Gera a cobrança por PIX ou cartão, confirma o pagamento, cancela cobranças vencidas e faz o estorno quando um pedido pago é cancelado.",
    publishes: "PaymentApproved",
    consumes: "PaymentRequested",
  },
  {
    id: "notifications",
    name: "Notificações",
    color: "var(--color-domain-notifications)",
    icon: Bell,
    focus: "avisos por e-mail",
    audience: "seus clientes",
    description:
      "Avisa o cliente por e-mail quando o pedido é pago, enviado, entregue ou cancelado, e guarda o registro de cada aviso.",
    consumes: "OrderShipped",
  },
  {
    id: "masterdata",
    name: "Cadastros",
    color: "var(--color-domain-masterdata)",
    icon: Tags,
    focus: "produtos · clientes",
    audience: "atendimento e gestão",
    description:
      "Reúne produtos, categorias e clientes. Quem já tem pedidos é desativado em vez de excluído, e o histórico fica preservado.",
    publishes: "ProductUpdated",
  },
];
