import heroBackground from "../../assets/hero-bg.webp";
import { ButtonLink } from "../ui/ButtonLink";
import { buttonClasses } from "../ui/styles";
import { HeroSystemPreview } from "./HeroSystemPreview";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-canvas"
    >
      {/* Hero background and visual overlays */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <img
          src={heroBackground}
          alt=""
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover object-[65%_center] opacity-60"
        />

        <div className="absolute inset-0 bg-blueprint opacity-50" />

        <div className="absolute inset-0 bg-linear-to-r from-canvas via-canvas/70 to-canvas/10" />

        <div className="absolute inset-0 bg-linear-to-t from-canvas via-transparent to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="page-container relative z-10 grid min-h-[calc(100dvh-4rem)] items-center gap-14 py-20 xl:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)] xl:content-center xl:items-start xl:gap-16">
        {/* Apresentação do produto */}
        <div className="max-w-[750px]">
          <h1
            id="hero-heading"
            className="text-[clamp(2.6rem,4vw,4rem)] leading-[1.1] font-bold tracking-tight text-fg"
          >
            <span className="block">Pedidos que fluem.</span>

            <span className="mt-2 block text-accent">
              Operação sob controle.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-fg-muted sm:text-lg">
            Acompanhe cada pedido da criação à entrega. Organize estoque,
            pagamentos e avisos aos clientes em um só lugar, com mais clareza e
            controle sobre cada etapa da operação.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ButtonLink to="/entrar" size="lg">
              Acessar Plataforma
            </ButtonLink>

            <a
              href="#como-funciona"
              className={buttonClasses("secondary", "lg")}
            >
              Como funciona
            </a>
          </div>
        </div>

        {/* Prévia visual da operação */}
        <div className="w-full min-w-0 max-w-[650px] justify-self-end">
          <HeroSystemPreview />
        </div>
      </div>
    </section>
  );
}
