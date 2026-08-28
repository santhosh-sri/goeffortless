type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | ClassValue[]
  | Record<string, boolean | null | undefined>;

/**
 * Join conditional class names. Deliberately dependency-free — the project has
 * no clsx/tailwind-merge and this is all the call sites need.
 *
 *   cn("btn", isActive && "btn-active", { "btn-lg": size === "lg" })
 */
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];

  for (const input of inputs) {
    if (!input) continue;

    if (typeof input === "string" || typeof input === "number") {
      out.push(String(input));
    } else if (Array.isArray(input)) {
      const nested = cn(...input);
      if (nested) out.push(nested);
    } else {
      for (const key in input) {
        if (input[key]) out.push(key);
      }
    }
  }

  return out.join(" ");
}

export default cn;
