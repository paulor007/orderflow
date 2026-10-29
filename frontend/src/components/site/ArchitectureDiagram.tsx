import { Pause, Play } from "lucide-react";
import { useState, type CSSProperties } from "react";
import { DOMAINS, type DomainId } from "./domains";

/*
 * Diagram coordinates, in a 1000 x 560 viewBox.
 * It mirrors the planned system without naming its parts: the team reaches
 * each area directly through the panel (left), and the areas keep each other
 * up to date through a shared update hub (right). Updates never pass through
 * the panel, and the panel never talks to the hub.
 */
const PANEL = { x: 25, y: 234, width: 170, height: 92 };
const AREA = { x: 385, width: 230, height: 82 };
const HUB = { x: 800, y: 210, width: 160, height: 140 };
const CENTER_Y = 280;
const ROW_GAP = 104;

// Orders sits in the middle row, level with the panel and the hub.
const ROW_ORDER: Record<DomainId, number> = {
  masterdata: 0,
  inventory: 1,
  orders: 2,
  payments: 3,
  notifications: 4,
};

const rows = [...DOMAINS]
  .sort((a, b) => ROW_ORDER[a.id] - ROW_ORDER[b.id])
  .map((domain, index) => ({
    ...domain,
    y: CENTER_Y + (index - 2) * ROW_GAP,
  }));

/** Horizontal S-curve: leaves and arrives horizontally. */
function curve(x1: number, y1: number, x2: number, y2: number) {
  const middle = (x1 + x2) / 2;

  return `M ${x1} ${y1} C ${middle} ${y1}, ${middle} ${y2}, ${x2} ${y2}`;
}

/**
 * Moves a dot along an SVG path with CSS Motion Path. A negative delay starts
 * the animation midway, so the diagram is already in motion on first paint.
 */
function travelStyle(path: string, delay: number, reverse = false) {
  return {
    offsetPath: `path("${path}")`,
    animationDelay: `${delay}s`,
    animationDirection: reverse ? "reverse" : "normal",
  } satisfies CSSProperties;
}

export function ArchitectureDiagram() {
  const [isRunning, setIsRunning] = useState(true);

  return (
    <div
      data-motion={isRunning ? "running" : "paused"}
      className="crosshair rounded-card border border-line bg-surface/60 p-4 backdrop-blur-sm md:p-8"
    >
      {/* Large screens: animated diagram */}
      <svg
        viewBox="0 0 1000 560"
        role="img"
        aria-label="Como o OrderFlow funciona: sua equipe usa o Painel OrderFlow para trabalhar em cinco áreas (Cadastros, Estoque, Pedidos, Pagamentos e Notificações), e as áreas se mantêm atualizadas entre si pela central de atualizações."
        className="hidden w-full lg:block"
      >
        <defs>
          <filter
            id="architecture-glow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Team access: panel to each area */}
        {rows.map((row) => (
          <path
            key={`access-${row.id}`}
            d={curve(PANEL.x + PANEL.width, CENTER_Y, AREA.x, row.y)}
            fill="none"
            strokeWidth="1.2"
            className="stroke-line-strong"
          />
        ))}

        {/* Updates: each area and the hub, with updates on the way */}
        {rows.map((row, index) => {
          const path = curve(AREA.x + AREA.width, row.y, HUB.x, CENTER_Y);

          return (
            <g key={`updates-${row.id}`} style={{ color: row.color }}>
              <path
                d={path}
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.5"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                className="motion-safe:animate-flow-dash"
              />

              {/* Outgoing: the area tells the others something happened */}
              {row.publishes && (
                <circle
                  r="3.5"
                  fill="currentColor"
                  filter="url(#architecture-glow)"
                  className="opacity-0 motion-safe:animate-message-travel"
                  style={travelStyle(path, -index * 0.8)}
                />
              )}

              {/* Incoming: the area reacts to what happened elsewhere */}
              {row.consumes && (
                <circle
                  r="3.5"
                  fill="currentColor"
                  filter="url(#architecture-glow)"
                  className="opacity-0 motion-safe:animate-message-travel"
                  style={travelStyle(path, -(index * 0.8 + 2), true)}
                />
              )}
            </g>
          );
        })}

        {/* Panel */}
        <rect {...PANEL} rx="10" className="fill-surface stroke-line-strong" />

        <text
          x={PANEL.x + PANEL.width / 2}
          y={CENTER_Y - 10}
          textAnchor="middle"
          fontSize="15"
          fontWeight="600"
          className="fill-fg font-sans"
        >
          Painel OrderFlow
        </text>

        <text
          x={PANEL.x + PANEL.width / 2}
          y={CENTER_Y + 12}
          textAnchor="middle"
          fontSize="10.5"
          className="fill-fg-muted font-mono"
        >
          sua equipe
        </text>

        <text
          x={PANEL.x + PANEL.width / 2}
          y={CENTER_Y + 30}
          textAnchor="middle"
          fontSize="10"
          className="fill-accent font-mono"
        >
          acesso por perfil
        </text>

        {/* Areas */}
        {rows.map((row) => (
          <g key={`area-${row.id}`} style={{ color: row.color }}>
            <rect
              x={AREA.x}
              y={row.y - AREA.height / 2}
              width={AREA.width}
              height={AREA.height}
              rx="10"
              stroke="currentColor"
              strokeOpacity="0.45"
              strokeWidth="1.2"
              className="fill-surface"
            />

            <circle
              cx={AREA.x + 22}
              cy={row.y - 15}
              r="3.5"
              fill="currentColor"
              className="motion-safe:animate-pulse-dot"
            />

            <text
              x={AREA.x + 36}
              y={row.y - 10}
              fontSize="15"
              fontWeight="600"
              className="fill-fg font-sans"
            >
              {row.name}
            </text>

            <text
              x={AREA.x + 22}
              y={row.y + 13}
              fontSize="10.5"
              className="fill-fg-muted font-mono"
            >
              {row.audience}
            </text>

            <text
              x={AREA.x + 22}
              y={row.y + 29}
              fontSize="10"
              fill="currentColor"
              className="font-mono"
            >
              {row.focus}
            </text>
          </g>
        ))}

        {/* Update hub */}
        <rect
          {...HUB}
          rx="12"
          strokeWidth="1.5"
          filter="url(#architecture-glow)"
          className="fill-accent/10 stroke-accent/60"
        />

        <text
          textAnchor="middle"
          fontSize="15"
          fontWeight="700"
          className="fill-accent font-sans"
        >
          <tspan x={HUB.x + HUB.width / 2} y={CENTER_Y - 18}>
            Central de
          </tspan>
          <tspan x={HUB.x + HUB.width / 2} y={CENTER_Y + 1}>
            atualizações
          </tspan>
        </text>

        <text
          x={HUB.x + HUB.width / 2}
          y={CENTER_Y + 26}
          textAnchor="middle"
          fontSize="10.5"
          className="fill-fg-muted font-mono"
        >
          avisos entre as áreas
        </text>

        <text
          x={HUB.x + HUB.width / 2}
          y={CENTER_Y + 44}
          textAnchor="middle"
          fontSize="10"
          className="fill-accent font-mono"
        >
          informações compartilhadas
        </text>
      </svg>

      {/* Phones and tablets: the same structure as stacked cards */}
      <div className="space-y-3 lg:hidden">
        <div className="rounded-control border border-line-strong bg-surface p-4">
          <p className="font-semibold text-fg">Painel OrderFlow</p>
          <p className="font-mono text-xs text-fg-muted">
            sua equipe · acesso por perfil
          </p>
        </div>

        <p className="text-center font-mono text-xs text-fg-muted">
          <span aria-hidden="true">▼ </span>sua equipe trabalha em cada área
        </p>

        <ul className="space-y-3">
          {rows.map((row) => (
            <li
              key={row.id}
              style={{ "--domain": row.color } as CSSProperties}
              className="rounded-control border border-(--domain)/40 bg-surface p-4"
            >
              <p className="flex items-center gap-2 font-semibold text-fg">
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-(--domain)"
                />
                {row.name}
              </p>

              <p className="font-mono text-xs text-fg-muted">{row.audience}</p>

              <p className="font-mono text-xs text-(--domain)">{row.focus}</p>
            </li>
          ))}
        </ul>

        <p className="text-center font-mono text-xs text-fg-muted">
          <span aria-hidden="true">▲▼ </span>as áreas se atualizam entre si
        </p>

        <div className="rounded-control border border-accent/50 bg-accent/10 p-4 text-center">
          <p className="font-semibold text-accent">Central de atualizações</p>

          <p className="font-mono text-xs text-fg-muted">
            avisos entre as áreas · áreas em sintonia
          </p>
        </div>
      </div>

      {/* Legend and motion control */}
      <div className="mt-6 hidden flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-4 font-mono text-2xs text-fg-muted lg:flex">
        <span className="hidden items-center gap-2 lg:inline-flex">
          <span aria-hidden="true" className="h-px w-5 bg-line-strong" />
          acesso pelo painel
        </span>

        <span className="hidden items-center gap-2 lg:inline-flex">
          <span
            aria-hidden="true"
            className="w-5 border-t border-dashed border-accent"
          />
          atualização entre áreas
        </span>

        <span className="hidden items-center gap-2 lg:inline-flex">
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-accent"
          />
          atualização a caminho
        </span>

        <button
          type="button"
          onClick={() => setIsRunning((running) => !running)}
          aria-label={
            isRunning
              ? "Pausar animação do diagrama"
              : "Retomar animação do diagrama"
          }
          title={isRunning ? "Pausar animação" : "Retomar animação"}
          className="ml-auto hidden motion-safe:lg:inline-flex size-9 items-center justify-center rounded-control border border-line text-fg-muted transition hover:border-accent/40 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {isRunning ? (
            <Pause className="size-4" aria-hidden="true" />
          ) : (
            <Play className="size-4" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}
