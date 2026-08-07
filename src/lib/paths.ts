export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Stellt dem Pfad den GitHub-Pages-basePath voran. */
export function withBase(path: string) {
  return `${basePath}${path}`;
}
