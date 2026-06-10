import { describe, expect, it } from 'vitest'
import { locales } from './index'
import type { LocaleCode } from '@/types/locale'

const localeCodes: LocaleCode[] = ['pt-BR', 'en']

function collectProjectIds(locale: LocaleCode) {
  return locales[locale].experience.projects.map((project) => project.id)
}

function collectPersonalProjectShape(locale: LocaleCode) {
  return locales[locale].projects.items.map((project) => ({
    technologies: project.technologies,
    placeholder: project.placeholder,
    github: project.github,
    demo: project.demo,
    differentialsCount: project.differentials.length,
  }))
}

describe('locale parity', () => {
  it.each(localeCodes)('%s has required translation sections', (locale) => {
    const t = locales[locale]

    expect(t.meta.pageTitles).toBeDefined()
    expect(t.nav.length).toBeGreaterThan(0)
    expect(t.hero.techStack.groups.length).toBeGreaterThan(0)
    expect(t.about.paragraphs.length).toBeGreaterThan(0)
    expect(t.skills.categories.length).toBeGreaterThan(0)
    expect(t.experience.projects.length).toBeGreaterThan(0)
    expect(t.timeline.events.length).toBeGreaterThan(0)
    expect(t.projects.items.length).toBeGreaterThan(0)
  })

  it('keeps the same navigation routes across locales', () => {
    const ptRoutes = locales['pt-BR'].nav.map((item) => item.to)
    const enRoutes = locales.en.nav.map((item) => item.to)
    expect(enRoutes).toEqual(ptRoutes)
  })

  it('keeps the same experience project ids across locales', () => {
    expect(collectProjectIds('en')).toEqual(collectProjectIds('pt-BR'))
  })

  it('keeps the same personal project shape across locales', () => {
    expect(collectPersonalProjectShape('en')).toEqual(collectPersonalProjectShape('pt-BR'))
  })

  it('defines a page title for every route', () => {
    for (const locale of localeCodes) {
      const titles = locales[locale].meta.pageTitles
      const routes = locales[locale].nav.map((item) => item.to)

      for (const route of routes) {
        expect(titles[route]).toBeTruthy()
      }
    }
  })
})
