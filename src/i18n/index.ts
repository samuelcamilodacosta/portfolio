import type { LocaleCode, Translation } from '@/types/locale'
import en from './locales/en'
import ptBR from './locales/pt-BR'

export const locales: Record<LocaleCode, Translation> = {
  'pt-BR': ptBR,
  en,
}

/**
 * Returns the translation bundle for a locale, falling back to Portuguese.
 */
export function getLocaleData(locale: LocaleCode): Translation {
  return locales[locale] ?? locales['pt-BR']
}
