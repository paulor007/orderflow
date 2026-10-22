import type { ComponentProps } from "react";
import { cn } from "../../lib/cn";

type TextLinkProps = ComponentProps<"a"> & {
  external?: boolean;
};

export function TextLink({
  external = false,
  className,
  children,
  ...props
}: TextLinkProps) {
  return (
    <a
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "text-accent underline underline-offset-4 hover:no-underline",
        className,
      )}
      {...props}
    >
      {children}
      {external && (
        <>
          <span aria-hidden="true"> ↗</span>
          <span className="sr-only"> (abre em nova aba)</span>
        </>
      )}
    </a>
  );
}
