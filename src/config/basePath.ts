/** Normalizes VITE_BASE_PATH. Empty string = site hosted at domain root (custom domain). */
export function normalizeBasePath(value: string | undefined): string {
  if (value === undefined || value === '' || value === '/') return ''
  const trimmed = value.replace(/\/$/, '')
  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`
}
