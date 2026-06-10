import { Link } from 'react-router-dom'
import type { ButtonProps } from '../../../types/ui'
import styles from './Button.module.css'

export default function Button({
  children,
  variant = 'primary',
  href,
  to,
  onClick,
  className = '',
}: ButtonProps) {
  const classes = `${styles.button} ${styles[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
