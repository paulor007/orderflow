import type { CSSProperties } from "react";
import { DOMAINS } from "./domains";
import { SectionMarker } from "./SectionMarker";
import { SectionTitle } from "./SectionTitle";

export function DomainsSection() {
  return (
    <section
      id="areas"
      aria-labelledby="areas-titulo"
      className="relative py-24 md:py-32"
    >
      <div className="page-container">
        <SectionMarker sectionId="areas" />

        {/* Section heading and introduction */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <SectionTitle
              id="areas-titulo"
              overline="Áreas da operação"
              lines={["Cinco áreas.", "Uma operação."]}
            />
          </div>

          <p className="max-w-md text-fg-muted">
            Cada área tem sua responsabilidade e cuida das próprias informações,
            e todas trabalham juntas. Uma falha no envio de e-mails, por
            exemplo, não impede a criação de novos pedidos.
          </p>
        </div>

        {/* Business area cards */}
        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {DOMAINS.map((domain) => {
            const Icon = domain.icon;

            return (
              <li
                key={domain.id}
                style={{ "--domain": domain.color } as CSSProperties}
                className="relative flex flex-col overflow-hidden rounded-card border border-line bg-surface p-6 transition duration-300 hover:border-(--domain)/40 hover:glow-domain motion-safe:hover:-translate-y-1 sm:last:col-span-2 xl:last:col-span-1"
              >
                {/* Domain color accent */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-(--domain) to-transparent opacity-70"
                />

                <span className="mb-5 flex size-11 items-center justify-center rounded-control bg-(--domain)/10 text-(--domain)">
                  <Icon className="size-5" aria-hidden="true" />
                </span>

                <h3 className="text-xl font-semibold text-fg">{domain.name}</h3>

                <p className="mt-0.5 font-mono text-2xs text-(--domain)">
                  {domain.focus}
                </p>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">
                  {domain.description}
                </p>

                <dl className="mt-5 space-y-1 border-t border-line pt-4 font-mono text-2xs">
                  <dt className="text-accent">para quem</dt>
                  <dd className="text-fg-muted">{domain.audience}</dd>
                </dl>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
