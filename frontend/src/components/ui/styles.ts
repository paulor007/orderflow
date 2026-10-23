import { cn } from "../../lib/cn";

export type ButtonVariant = "primary" | "secondary" | "danger";

const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary: "bg-accent text-on-accent hover:brightness-110",
  secondary: "border border-line-strong text-fg hover:bg-surface-raised",
  danger: "bg-danger text-on-accent hover:brightness-110",
};

/** Classes shared by <Button> and <ButtonLink>, so both look the same. */
export function buttonClasses(variant: ButtonVariant): string {
  return cn(
    "inline-flex h-11 items-center justify-center gap-2 rounded-control px-5 text-sm font-semibold transition sm:h-10 sm:px-4",
    "disabled:pointer-events-none disabled:opacity-50",
    buttonVariantClasses[variant],
  );
}

/** Classes shared by <TextLink> and <ExternalLink>. */
export const textLinkClasses =
  "text-accent underline underline-offset-4 hover:no-underline";
