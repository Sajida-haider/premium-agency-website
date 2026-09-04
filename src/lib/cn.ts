/**
 * Minimal class-name combiner. Tolerates undefined/falsy values and
 * joins non-empty strings with a space.
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
