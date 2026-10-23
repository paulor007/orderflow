import { Link, type LinkProps } from "react-router";
import { cn } from "../../lib/cn";
import { buttonClasses, type ButtonVariant } from "./styles";

type ButtonLinkProps = LinkProps & {
  variant?: ButtonVariant;
};

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: ButtonLinkProps) {
  return <Link className={cn(buttonClasses(variant), className)} {...props} />;
}
