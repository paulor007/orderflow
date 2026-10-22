type ClassValue = string | false | null | undefined;

/**
 * Joins class names, skipping empty values.
 * Example: cn("px-4", isActive && "bg-accent") -> "px-4 bg-accent" or "px-4"
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
