import { render, type RenderOptions } from '@testing-library/react'
import { MemoryRouter, type MemoryRouterProps } from 'react-router-dom'
import { BASE_PATH, toBrowserPath } from '@/config/site'
import { LocaleProvider } from '@/context/LocaleContext'
import { ThemeProvider } from '@/context/ThemeContext'
import type { LocaleCode } from '@/types/locale'
import type { ReactElement, ReactNode } from 'react'

interface ProviderOptions {
  route?: string
  routerProps?: MemoryRouterProps
  locale?: LocaleCode
}

interface WrapperProps {
  children: ReactNode
}

function createWrapper({ route = '/', routerProps }: ProviderOptions) {
  return function Wrapper({ children }: WrapperProps) {
    return (
      <MemoryRouter basename={BASE_PATH} initialEntries={[toBrowserPath(route)]} {...routerProps}>
        <LocaleProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LocaleProvider>
      </MemoryRouter>
    )
  }
}

export function renderWithProviders(
  ui: ReactElement,
  { route = '/', routerProps, ...options }: RenderOptions & ProviderOptions = {},
) {
  return render(ui, {
    wrapper: createWrapper({ route, routerProps }),
    ...options,
  })
}
