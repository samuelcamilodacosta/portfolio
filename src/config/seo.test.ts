import { afterEach, describe, expect, it } from 'vitest'
import { locales } from '@/i18n'
import {
  PUBLIC_ROUTES,
  SITE_URL,
  applyPageMeta,
  buildCanonicalUrl,
  isPublicRoute,
  resolveOgLocale,
  resolvePageMeta,
} from './seo'

describe('seo config', () => {
  afterEach(() => {
    document.head.innerHTML = ''
    document.title = ''
  })

  it('builds canonical urls for public routes', () => {
    expect(buildCanonicalUrl('/')).toBe('https://samuel-dev.com.br/')
    expect(buildCanonicalUrl('/sobre')).toBe('https://samuel-dev.com.br/sobre')
  })

  it('identifies public routes', () => {
    expect(isPublicRoute('/')).toBe(true)
    expect(isPublicRoute('/contato')).toBe(true)
    expect(isPublicRoute('/invalid')).toBe(false)
  })

  it('exposes all public routes in sitemap order', () => {
    expect(PUBLIC_ROUTES).toHaveLength(6)
    expect(PUBLIC_ROUTES[0]).toBe('/')
  })

  it('resolves page meta for known routes', () => {
    const meta = resolvePageMeta({
      pathname: '/projetos',
      locale: 'pt-BR',
      t: locales['pt-BR'],
    })

    expect(meta.title).toBe(locales['pt-BR'].meta.pageTitles['/projetos'])
    expect(meta.description).toBe(locales['pt-BR'].meta.pageDescriptions['/projetos'])
    expect(meta.canonicalUrl).toBe(`${SITE_URL}/projetos`)
    expect(meta.isNotFound).toBe(false)
  })

  it('resolves not found meta for unknown routes', () => {
    const meta = resolvePageMeta({
      pathname: '/desconhecida',
      locale: 'pt-BR',
      t: locales['pt-BR'],
    })

    expect(meta.title).toBe(locales['pt-BR'].meta.notFound)
    expect(meta.isNotFound).toBe(true)
  })

  it('maps og locale codes', () => {
    expect(resolveOgLocale('pt-BR')).toBe('pt_BR')
    expect(resolveOgLocale('en')).toBe('en_US')
  })

  it('applies page meta tags to the document head', () => {
    const meta = resolvePageMeta({
      pathname: '/',
      locale: 'en',
      t: locales.en,
    })

    applyPageMeta(meta, 'en')

    expect(document.title).toBe(locales.en.meta.pageTitles['/'])
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      locales.en.meta.pageDescriptions['/'],
    )
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://samuel-dev.com.br/',
    )
    expect(document.querySelector('meta[property="og:url"]')).toHaveAttribute(
      'content',
      'https://samuel-dev.com.br/',
    )
    expect(document.querySelector('meta[name="twitter:card"]')).toHaveAttribute(
      'content',
      'summary_large_image',
    )
    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute('content', 'index, follow')
  })

  it('applies noindex for not found pages', () => {
    const meta = resolvePageMeta({
      pathname: '/404-test',
      locale: 'pt-BR',
      t: locales['pt-BR'],
    })

    applyPageMeta(meta, 'pt-BR')

    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute(
      'content',
      'noindex, follow',
    )
  })
})
