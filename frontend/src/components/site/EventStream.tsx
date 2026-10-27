import { useEffect, useState } from "react";

const exampleEvents = [
  {
    name: "order.created",
    domain: "pedidos",
    color: "bg-domain-orders",
  },
  {
    name: "inventory.reservation.requested",
    domain: "estoque",
    color: "bg-domain-inventory",
  },
  {
    name: "stock.reserved",
    domain: "estoque",
    color: "bg-domain-inventory",
  },
  {
    name: "payment.authorization.requested",
    domain: "pagamentos",
    color: "bg-domain-payments",
  },
  {
    name: "payment.authorized",
    domain: "pagamentos",
    color: "bg-domain-payments",
  },
  {
    name: "order.confirmed",
    domain: "pedidos",
    color: "bg-domain-orders",
  },
  {
    name: "notification.requested",
    domain: "notificações",
    color: "bg-domain-notifications",
  },
  {
    name: "notification.sent",
    domain: "notificações",
    color: "bg-domain-notifications",
  },
] as const;

type EventStreamProps = {
  running: boolean;
};

export function EventStream({ running }: EventStreamProps) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!running) {
      return;
    }

    const interval = window.setInterval(() => {
      setTick((previous) => previous + 1);
    }, 2600);

    return () => {
      window.clearInterval(interval);
    };
  }, [running]);

  const visibleEvents = Array.from({ length: 4 }, (_, index) => {
    const position = (tick + index) % exampleEvents.length;
    return exampleEvents[position];
  });

  return (
    <div className="crosshair">
      <section
        aria-label="Demonstração de fluxo de eventos"
        className="overflow-hidden rounded-[11px] border border-[#263140] bg-[#080d15]/95 shadow-overlay"
      >
        {/* Barra superior, um pouco mais clara */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 border-b border-[#263140] bg-[#141a24] px-3 py-2.5">
          {/* Três indicadores do lado esquerdo */}
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-[9px] rounded-full bg-[#d95a64]" />
            <span className="size-[9px] rounded-full bg-[#d5a043]" />
            <span className="size-[9px] rounded-full bg-[#269c83]" />
          </div>

          {/* Identificação do fluxo */}
          <span className="whitespace-nowrap font-mono text-[10px] text-[#9da8b6]">
            event-stream · message-broker
          </span>

          {/* Indicador luminoso de simulação */}
          <div
            className={`flex items-center justify-end gap-1.5 ${
              running ? "motion-safe:animate-pulse-dot" : ""
            }`}
          >
            <span
              aria-hidden="true"
              className={`size-1 shrink-0 rounded-full ${
                running ? "bg-accent" : "bg-[#77818e]"
              }`}
            />

            <span className="font-mono text-[10px] whitespace-nowrap text-accent">
              {running ? "Simulação" : "Pausada"}
            </span>
          </div>
        </div>

        {/* Eventos operacionais ilustrativos */}
        <div className="space-y-1 px-4 py-2.5" aria-live="off">
          {visibleEvents.map((event) => (
            <div
              key={event.name}
              className="flex items-center justify-between gap-3 rounded-[5px] bg-[#111720] px-4 py-3.5"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span
                  aria-hidden="true"
                  className={`size-2 shrink-0 rounded-full ${event.color}`}
                />

                <span className="truncate font-mono text-xs font-medium text-fg">
                  {event.name}
                </span>
              </div>

              <span className="hidden shrink-0 font-mono text-[10px] text-[#93a0af] sm:block">
                {event.domain}
              </span>
            </div>
          ))}
        </div>

        {/* Rodapé informativo */}
        <div className="flex items-center justify-between gap-3 border-t border-[#263140] px-4 py-2.5 font-mono text-[10px] text-[#8792a1]">
          <span>Eventos ilustrativos</span>
          <span>Sem conexão com backend</span>
        </div>
      </section>
    </div>
  );
}
