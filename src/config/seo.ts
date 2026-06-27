import type { LocaleCode, Translation } from '@/types/locale'

export const SITE_URL = 'https://samuel-dev.com.br'
export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`
export const SITE_NAME = 'Samuel Costa'

export const PUBLIC_ROUTES = [
  '/',
  '/sobre',
  '/tecnologias',
  '/experiencia',
  '/projetos',
  '/contato',
] as const

export type PublicRoute = (typeof PUBLIC_ROUTES)[number]

export function buildCanonicalUrl(pathname: string): string {
  return pathname === '/' ? `${SITE_URL}/` : `${SITE_URL}${pathname}`
}

export function isPublicRoute(pathname: string): pathname is PublicRoute {
  return (PUBLIC_ROUTES as readonly string[]).includes(pathname)
}

export interface PageMetaInput {
  pathname: string
  locale: LocaleCode
  t: Translation
}

export interface PageMeta {
  title: string
  description: string
  canonicalUrl: string
  isNotFound: boolean
  ogLocale: string
}

export function resolvePageMeta({ pathname, locale, t }: PageMetaInput): PageMeta {
  const isNotFound = !isPublicRoute(pathname)
  const ogLocale = resolveOgLocale(locale)

  if (isNotFound) {
    return {
      title: t.meta.notFound,
      description: t.meta.notFoundDescription,
      canonicalUrl: buildCanonicalUrl(pathname),
      isNotFound: true,
      ogLocale,
    }
  }

  return {
    title: t.meta.pageTitles[pathname],
    description: t.meta.pageDescriptions[pathname],
    canonicalUrl: buildCanonicalUrl(pathname),
    isNotFound: false,
    ogLocale,
  }
}

export function resolveOgLocale(locale: LocaleCode): string {
  return locale === 'pt-BR' ? 'pt_BR' : 'en_US'
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string): void {
  let element = document.querySelector(`meta[${attr}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function upsertLink(rel: string, href: string): void {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null

  if (!element) {
    element = document.createElement('link')
    element.rel = rel
    document.head.appendChild(element)
  }

  element.href = href
}

export function applyPageMeta(meta: PageMeta, locale: LocaleCode): void {
  document.title = meta.title

  upsertMeta('name', 'description', meta.description)
  upsertMeta('name', 'robots', meta.isNotFound ? 'noindex, follow' : 'index, follow')
  upsertLink('canonical', meta.canonicalUrl)

  const ogLocale = resolveOgLocale(locale)

  upsertMeta('property', 'og:type', 'website')
  upsertMeta('property', 'og:site_name', SITE_NAME)
  upsertMeta('property', 'og:locale', ogLocale)
  upsertMeta('property', 'og:url', meta.canonicalUrl)
  upsertMeta('property', 'og:title', meta.title)
  upsertMeta('property', 'og:description', meta.description)
  upsertMeta('property', 'og:image', OG_IMAGE_URL)

  upsertMeta('name', 'twitter:card', 'summary_large_image')
  upsertMeta('name', 'twitter:title', meta.title)
  upsertMeta('name', 'twitter:description', meta.description)
  upsertMeta('name', 'twitter:image', OG_IMAGE_URL)
}
