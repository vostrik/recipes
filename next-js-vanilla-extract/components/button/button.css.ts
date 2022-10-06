import { style } from '@vanilla-extract/css'

import { tokens } from '../../design-system/themes/tokens.css'

export const buttonStyles = style({
  background: tokens.color.background,
  color: tokens.color.primary,
  border: 'none',
  fontSize: '40px',
  position: 'relative',
  margin: '10px;',
  cursor: 'pointer',
  ':active': {
    top: '1px',
    left: '1px'
  }
})