import type { ComponentProps } from "react";
import { cn } from "../../lib/cn";
import { textLinkClasses } from "./styles";

type ExternalLinkProps = Omit<ComponentProps<"a">, "target" | "rel">;

export function ExternalLink({
  className,
  children,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={cn(textLinkClasses, className)}
      {...props}
    >
      {children}
      <span aria-hidden="true"> ↗</span>
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  );
}
