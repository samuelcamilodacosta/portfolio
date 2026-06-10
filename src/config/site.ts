import { normalizeBasePath } from './basePath'

/** Base path where the app is hosted (no trailing slash). Must match `base` in vite.config.ts. */
export const BASE_PATH = normalizeBasePath(import.meta.env.VITE_BASE_PATH)

/** Full browser path for a route (e.g. `/sobre` or `/portfolio/sobre`). */
export function toBrowserPath(pathname: string): string {
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`
  if (!BASE_PATH) return normalized
  if (normalized === '/') return BASE_PATH
  return `${BASE_PATH}${normalized}`
}

export { normalizeBasePath } from './basePath'
