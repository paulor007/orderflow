import type { ComponentProps } from "react";
import { cn } from "../../lib/cn";

type ButtonVariant = "primary" | "secondary" | "danger";

type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-accent text-on-accent enabled:hover:brightness-110",
  secondary:
    "border border-line-strong text-fg enabled:hover:bg-surface-raised",
  danger: "bg-danger text-on-accent enabled:hover:brightness-110",
};

export function Button({
  variant = "primary",
  type = "button",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-control px-5 text-sm font-semibold transition sm:h-10 sm:px-4",
        "disabled:opacity-50",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
