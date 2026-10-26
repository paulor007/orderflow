import { cn } from "../../lib/cn";

export type ButtonVariant = "primary" | "secondary" | "danger";
export type ButtonSize = "md" | "lg";

const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary: "bg-accent text-on-accent hover:brightness-110",
  secondary: "border border-line-strong text-fg hover:bg-surface-raised",
  danger: "bg-danger text-on-accent hover:brightness-110",
};

const buttonSizeClasses: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm sm:h-10 sm:px-4",
  lg: "h-12 px-7 text-base",
};

export function buttonClasses(
  variant: ButtonVariant,
  size: ButtonSize = "md",
): string {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-control font-semibold transition active:scale-97",
    "disabled:pointer-events-none disabled:opacity-50",
    buttonVariantClasses[variant],
    buttonSizeClasses[size],
    variant === "primary" && size === "lg" && "shadow-glow",
  );
}

export const textLinkClasses =
  "text-accent underline underline-offset-4 hover:no-underline";
