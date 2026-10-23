import { Link, type LinkProps } from "react-router";
import { cn } from "../../lib/cn";
import { textLinkClasses } from "./styles";

export function TextLink({ className, ...props }: LinkProps) {
  return <Link className={cn(textLinkClasses, className)} {...props} />;
}
