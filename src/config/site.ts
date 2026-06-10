/** Base path where the app is hosted (no trailing slash). Must match `base` in vite.config.ts. */
export const BASE_PATH = '/portfolio'

/** Full browser path for a route (e.g. `/portfolio/sobre`). */
export function toBrowserPath(pathname: string): string {
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`
  if (normalized === '/') return BASE_PATH
  return `${BASE_PATH}${normalized}`
}
