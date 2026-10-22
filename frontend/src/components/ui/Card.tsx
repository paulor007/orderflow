import type { ComponentProps } from "react";
import { cn } from "../../lib/cn";

type CardProps = ComponentProps<"div">;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card border border-line bg-surface p-4 sm:p-6",
        className,
      )}
      {...props}
    />
  );
}
