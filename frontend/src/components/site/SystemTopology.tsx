import { LogoMark } from "../brand/Logo";

type ServiceConnection = {
  name: string;
  y: number;
  color: string;
  path: string;
  duration: string;
  delay: string;
};

const services: ServiceConnection[] = [
  {
    name: "orders-service",
    y: 20,
    color: "var(--color-domain-orders)",
    path: "M223 117 C295 117 315 36 415 36",
    duration: "3.2s",
    delay: "0s",
  },
  {
    name: "payments-service",
    y: 66,
    color: "var(--color-domain-payments)",
    path: "M223 117 C295 117 315 82 415 82",
    duration: "3.8s",
    delay: "0.5s",
  },
  {
    name: "notifs-service",
    y: 112,
    color: "var(--color-domain-notifications)",
    path: "M223 117 C295 117 315 128 415 128",
    duration: "4.1s",
    delay: "1s",
  },
  {
    name: "inventory-service",
    y: 158,
    color: "var(--color-domain-inventory)",
    path: "M223 117 C295 117 315 174 415 174",
    duration: "3.5s",
    delay: "1.5s",
  },
];

type SystemTopologyProps = {
  running: boolean;
  onToggle: () => void;
};

export function SystemTopology({ running, onToggle }: SystemTopologyProps) {
  return (
    <div className="crosshair">
      <section
        aria-label="Demonstração visual da comunicação entre serviços"
        className="overflow-hidden rounded-[11px] border border-[#263140] bg-[#080d15]/95 shadow-overlay"
      >
        <div className="flex items-center justify-between gap-3 px-4 py-2.5">
          <span className="font-mono text-[10px] tracking-[0.16em] text-[#8792a1] uppercase">
            System Topology · Simulação
          </span>

          <button
            type="button"
            onClick={onToggle}
            aria-label={
              running
                ? "Pausar animação da topologia"
                : "Reproduzir animação da topologia"
            }
            title={running ? "Pausar simulação" : "Retomar simulação"}
            className="inline-flex size-7 items-center justify-center rounded-md text-accent transition hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-accent"
          >
            <LogoMark className="size-3.5" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <svg
            viewBox="0 10 600 190"
            className="block h-auto w-full min-w-[510px]"
            role="img"
            aria-label="Gateway conectado ao broker, que distribui mensagens para pedidos, pagamentos, notificações e estoque"
          >
            <defs>
              <filter
                id="topology-particle-glow"
                x="-200%"
                y="-200%"
                width="500%"
                height="500%"
              >
                <feGaussianBlur stdDeviation="3" />
              </filter>
            </defs>

            <path
              d="M113 117 H139"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />

            {services.map((service) => (
              <g key={service.name}>
                <path
                  d={service.path}
                  fill="none"
                  stroke={service.color}
                  strokeWidth="1.5"
                  strokeDasharray="7 8"
                  className={
                    running ? "motion-safe:animate-flow-dash" : undefined
                  }
                />

                {running && (
                  <g className="motion-reduce:hidden">
                    <circle
                      r="7"
                      fill={service.color}
                      opacity="0.35"
                      filter="url(#topology-particle-glow)"
                    >
                      <animateMotion
                        path={service.path}
                        dur={service.duration}
                        begin={service.delay}
                        repeatCount="indefinite"
                      />
                    </circle>

                    <circle r="3.5" fill={service.color}>
                      <animateMotion
                        path={service.path}
                        dur={service.duration}
                        begin={service.delay}
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                )}

                <rect
                  x="415"
                  y={service.y}
                  width="162"
                  height="32"
                  rx="6"
                  fill="#0d131d"
                  stroke={service.color}
                  strokeOpacity="0.65"
                />

                <circle
                  cx="430"
                  cy={service.y + 16}
                  r="3.5"
                  fill={service.color}
                />

                <text
                  x="444"
                  y={service.y + 20}
                  fill="#d2d8e1"
                  fontSize="11"
                  fontFamily="monospace"
                >
                  {service.name}
                </text>
              </g>
            ))}

            <rect
              x="25"
              y="96"
              width="88"
              height="42"
              rx="7"
              fill="#101721"
              stroke="#364252"
            />

            <text
              x="69"
              y="122"
              fill="#b9c2ce"
              textAnchor="middle"
              fontSize="12"
              fontFamily="monospace"
            >
              gateway
            </text>

            <path
              d="M161 94 H201 L223 117 L201 140 H161 L139 117 Z"
              fill="#0b2627"
              stroke="#27d5b0"
              strokeWidth="1.8"
            />

            <text
              x="181"
              y="115"
              fill="#27d5b0"
              textAnchor="middle"
              fontSize="12"
              fontFamily="monospace"
            >
              broker
            </text>

            <text
              x="181"
              y="129"
              fill="#89a29f"
              textAnchor="middle"
              fontSize="9"
              fontFamily="monospace"
            >
              pub/sub
            </text>
          </svg>
        </div>
      </section>
    </div>
  );
}
