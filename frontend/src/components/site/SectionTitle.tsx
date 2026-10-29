type SectionTitleProps = {
  id: string;
  overline: string;
  lines: readonly string[];
};

/** Overline and heading shared by the landing sections; one line per entry. */
export function SectionTitle({ id, overline, lines }: SectionTitleProps) {
  return (
    <>
      <p className="font-mono text-xs tracking-overline text-accent uppercase">
        {overline}
      </p>

      <h2
        id={id}
        className="mt-3 text-4xl font-bold tracking-tight text-balance text-fg md:text-5xl"
      >
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>
    </>
  );
}
