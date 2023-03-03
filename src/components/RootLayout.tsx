import { useMemo } from 'react'
import { themeOptions } from '../theme'
import { useAppSelector } from '../hooks/storeHooks'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'

export const RootLayout = () => {
  const mode = useAppSelector((state) => state.mode)
  const theme = useMemo(() => createTheme(themeOptions(mode)), [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="root-layout">
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
