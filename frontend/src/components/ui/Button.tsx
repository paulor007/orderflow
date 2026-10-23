import type { ComponentProps } from "react";
import { cn } from "../../lib/cn";
import { buttonClasses, type ButtonVariant } from "./styles";

type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
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
      className={cn(buttonClasses(variant), className)}
      {...props}
    />
  );
}
