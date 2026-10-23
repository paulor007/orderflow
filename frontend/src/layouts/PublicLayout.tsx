import { Link, Outlet, ScrollRestoration, useMatch } from "react-router";
import { ButtonLink } from "../components/ui/ButtonLink";
import { ExternalLink } from "../components/ui/ExternalLink";

const REPOSITORY_URL = "https://github.com/paulor007/orderflow";

function Wordmark() {
  return (
    <span className="text-lg font-bold tracking-tight">
      Order<span className="text-accent">Flow</span>
    </span>
  );
}

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
            <Wordmark />
          </Link>

          <div className="flex items-center gap-6">
            <ExternalLink
              href={REPOSITORY_URL}
              className="hidden text-sm sm:inline"
            >
              GitHub
            </ExternalLink>

            {isAccessPage ? (
              <ButtonLink to="/" variant="secondary">
                Voltar à apresentação
              </ButtonLink>
            ) : (
              <ButtonLink to="/entrar">Acessar demonstração</ButtonLink>
            )}
          </div>
        </div>
      </header>

      <main id="conteudo" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-fg-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <Wordmark />
          <p>Projeto de portfólio em desenvolvimento, com dados fictícios.</p>
          <ExternalLink href={REPOSITORY_URL}>Código no GitHub</ExternalLink>
        </div>
      </footer>

      <ScrollRestoration />
    </div>
  );
}
