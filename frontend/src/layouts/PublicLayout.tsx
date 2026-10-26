import { Link, Outlet, ScrollRestoration, useMatch } from "react-router";
import { Logo } from "../components/brand/Logo";
import { ButtonLink } from "../components/ui/ButtonLink";

const CURRENT_YEAR = new Date().getFullYear();

export function PublicLayout() {
  const isAccessPage = useMatch("/entrar") !== null;

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-20 focus:rounded-control focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-on-accent"
      >
        Pular para o conteúdo
      </a>

      <header className="sticky top-0 z-10 border-b border-line bg-canvas">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-8">
          <Link
            to="/"
            aria-label="OrderFlow, página inicial"
            className="rounded-control"
          >
            <Logo />
          </Link>

          {isAccessPage ? (
            <ButtonLink to="/" variant="secondary">
              Voltar ao início
            </ButtonLink>
          ) : (
            <ButtonLink to="/entrar">Acessar Plataforma</ButtonLink>
          )}
        </div>
      </header>

      <main id="conteudo" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm text-fg-muted sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <div>
            <Logo />
            <p className="mt-2">
              Gestão de pedidos, estoque e pagamentos em uma só plataforma.
            </p>
          </div>

          <p>© {CURRENT_YEAR} OrderFlow</p>
        </div>
      </footer>

      <ScrollRestoration />
    </div>
  );
}
