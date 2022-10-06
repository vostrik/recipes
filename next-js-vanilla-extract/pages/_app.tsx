import { useState } from 'react'
import type { AppProps } from "next/app";

import { ThemeKeys, themes } from '../design-system/themes'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeKeys>('light')
  return (
    <div className={themes[currentTheme]}>
      {Object.keys(themes).map(theme => (
        <label key={theme}>
          <input
            type='radio'
            name='theme'
            value={theme}
            defaultChecked={currentTheme === theme}
            onClick={() => setCurrentTheme(theme as ThemeKeys)} /> {theme}
        </label>
      ))}
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}