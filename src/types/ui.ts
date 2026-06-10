import type { MouseEventHandler, ReactNode } from 'react'
import type { LinkProps } from 'react-router-dom'

export type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  href?: string
  to?: LinkProps['to']
  onClick?: MouseEventHandler<HTMLElement>
  className?: string
}

export interface SectionTitleProps {
  label?: string
  title: string
  subtitle?: string
  className?: string
}
