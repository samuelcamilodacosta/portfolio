import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { getLocaleData, locales } from '../i18n'
import type { LocaleCode, LocaleContextValue } from '../types/locale'

const LocaleContext = createContext<LocaleContextValue | null>(null)

const STORAGE_KEY = 'locale'
const DEFAULT_LOCALE: LocaleCode = 'pt-BR'

function isLocaleCode(value: string | null): value is LocaleCode {
  return value === 'pt-BR' || value === 'en'
}

function getStoredLocale(): LocaleCode | null {
  const stored = localStorage.getItem(STORAGE_KEY)
  return isLocaleCode(stored) ? stored : null
}

function applyLocale(locale: LocaleCode): void {
  document.documentElement.lang = locale
}

interface LocaleProviderProps {
  children: ReactNode
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<LocaleCode>(
    () => getStoredLocale() ?? DEFAULT_LOCALE,
  )

  const t = useMemo(() => getLocaleData(locale), [locale])

  useEffect(() => {
    applyLocale(locale)
    localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  const setLocale = (nextLocale: LocaleCode) => {
    if (nextLocale in locales) {
      setLocaleState(nextLocale)
    }
  }

  const toggleLocale = () => {
    setLocaleState((prev) => (prev === 'pt-BR' ? 'en' : 'pt-BR'))
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return context
}
