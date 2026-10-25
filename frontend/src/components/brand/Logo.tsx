import type { ComponentProps } from "react";

export function LogoMark(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 7.5 L19.4 11.75 V20.25 L12 24.5 L4.6 20.25 V11.75 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="16" r="2.25" fill="currentColor" />
      <path
        d="M19.4 11.75 L25.5 8.25 M19.4 16 H26.5 M19.4 20.25 L25.5 23.75"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="25.5" cy="8.25" r="1.75" fill="currentColor" />
      <circle cx="26.5" cy="16" r="1.75" fill="currentColor" />
      <circle cx="25.5" cy="23.75" r="1.75" fill="currentColor" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="inline-flex items-center gap-2">
      <LogoMark className="size-7 text-accent" />
      <span className="text-lg font-bold tracking-tight text-fg">
        Order<span className="text-accent">Flow</span>
      </span>
    </span>
  );
}
