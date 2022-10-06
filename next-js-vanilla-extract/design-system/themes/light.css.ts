import { createTheme } from '@vanilla-extract/css'

import { tokens } from './tokens.css'

export const lightTheme = createTheme(tokens, {
  color: {
    background: 'white',
    primary: 'black'
  },
  font: {
    normal: 'Georgia'
  }
})