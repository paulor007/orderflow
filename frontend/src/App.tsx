const colorTokens = [
  {
    name: "canvas",
    className: "bg-canvas",
    use: "Fundo da página",
  },
  {
    name: "surface",
    className: "bg-surface",
    use: "Cartões e painéis",
  },
  {
    name: "surface-raised",
    className: "bg-surface-raised",
    use: "Elementos elevados e hover",
  },
  {
    name: "fg",
    className: "bg-fg",
    use: "Texto principal",
  },
  {
    name: "fg-muted",
    className: "bg-fg-muted",
    use: "Texto secundário",
  },
  {
    name: "line",
    className: "bg-line",
    use: "Divisórias",
  },
  {
    name: "line-strong",
    className: "bg-line-strong",
    use: "Bordas de campos",
  },
  {
    name: "accent",
    className: "bg-accent",
    use: "Ação principal e foco",
  },
  {
    name: "on-accent",
    className: "bg-on-accent",
    use: "Texto sobre accent",
  },
  {
    name: "success",
    className: "bg-success",
    use: "Situação: sucesso",
  },
  {
    name: "warning",
    className: "bg-warning",
    use: "Situação: atenção",
  },
  {
    name: "danger",
    className: "bg-danger",
    use: "Situação: perigo",
  },
  {
    name: "info",
    className: "bg-info",
    use: "Situação: informação",
  },
];

function App() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-8">
      <header className="border-b border-line pb-6">
        <p className="text-sm font-semibold tracking-wide text-accent uppercase">
          Etapa 2 · Design system
        </p>

        <h1 className="mt-2 text-3xl font-bold">OrderFlow</h1>

        <p className="mt-2 text-fg-muted">
          Tokens de cor da interface. Cada nome descreve uma função, não uma
          cor.
        </p>
      </header>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {colorTokens.map((token) => (
          <li
            key={token.name}
            className="rounded-lg border border-line bg-surface p-4"
          >
            <div
              className={`h-14 rounded-md border border-line ${token.className}`}
            />

            <p className="mt-3 font-mono text-sm">{token.name}</p>

            <p className="text-sm text-fg-muted">{token.use}</p>
          </li>
        ))}
      </ul>

      <section className="mt-10 rounded-lg border border-line bg-surface p-6">
        <h2 className="text-lg font-semibold">Pares de leitura</h2>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <span className="rounded-md bg-accent px-3 py-1.5 font-semibold text-on-accent">
            Texto sobre accent
          </span>

          <span className="text-success">Pago</span>

          <span className="text-warning">Aguardando pagamento</span>

          <span className="text-danger">Cancelado</span>

          <span className="text-info">Em separação</span>
        </div>
      </section>
    </main>
  );
}

export default App;
