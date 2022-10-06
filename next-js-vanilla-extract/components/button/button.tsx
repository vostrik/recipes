import { ReactNode } from 'react'

import { buttonStyles } from './button.css'

interface ButtonProps {
  children: ReactNode,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  className?: string
}

export const Button = ({ children, className = buttonStyles, ...params }: ButtonProps) => {
  return (
    <button {...params} className={className}>{children}</button>
  )
}