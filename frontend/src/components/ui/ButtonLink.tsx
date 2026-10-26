import { Link, type LinkProps } from "react-router";
import { cn } from "../../lib/cn";
import { buttonClasses, type ButtonSize, type ButtonVariant } from "./styles";

type ButtonLinkProps = LinkProps & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cn(buttonClasses(variant, size), className)} {...props} />
  );
}
