export * from './tokens.css'
import { lightTheme } from './light.css'
import { darkTheme } from './dark.css'

export type ThemeKeys = 'light' | 'dark'

export const themes = {
  light: lightTheme,
  dark: darkTheme
}