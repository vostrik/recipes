import { createTheme } from '@vanilla-extract/css'

import { tokens } from './tokens.css'

export const darkTheme = createTheme(tokens, {
  color: {
    background: 'black',
    primary: 'white'
  },
  font: {
    normal: 'Georgia'
  }
})