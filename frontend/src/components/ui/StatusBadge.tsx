import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

export type StatusTone = "neutral" | "warning" | "success" | "info" | "danger";

type StatusBadgeProps = {
  tone: StatusTone;
  children: ReactNode;
};

const toneClasses: Record<StatusTone, string> = {
  neutral: "border-line-strong text-fg-muted",
  warning: "border-warning/40 bg-warning/10 text-warning",
  success: "border-success/40 bg-success/10 text-success",
  info: "border-info/40 bg-info/10 text-info",
  danger: "border-danger/40 bg-danger/10 text-danger",
};

export function StatusBadge({ tone, children }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap",
        toneClasses[tone],
      )}
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}
