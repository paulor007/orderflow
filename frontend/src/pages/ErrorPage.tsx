import { isRouteErrorResponse, useRouteError } from "react-router";
import { Button } from "../components/ui/Button";
import { ButtonLink } from "../components/ui/ButtonLink";

export function ErrorPage() {
  const error = useRouteError();
  const status = isRouteErrorResponse(error) ? error.status : null;

  return (
    <main className="mx-auto max-w-2xl px-4 py-24 sm:px-8">
      <title>Erro inesperado — OrderFlow</title>

      <p className="font-mono text-xs tracking-overline text-danger uppercase">
        {status ? `Erro ${status}` : "Erro inesperado"}
      </p>

      <h1 className="mt-3 text-3xl font-bold tracking-tight">
        Algo deu errado
      </h1>

      <p className="mt-4 text-fg-muted">
        <p className="mt-4 text-fg-muted">
          Não foi possível exibir esta página. Recarregue para tentar de novo;
          se o problema continuar, volte ao início.
        </p>
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button onClick={() => window.location.reload()}>
          Recarregar a página
        </Button>

        <ButtonLink to="/" variant="secondary">
          Voltar ao início
        </ButtonLink>
      </div>
    </main>
  );
}
