import { useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks'
import { setMode } from '../store/slices/themeSlice'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import IconButton from '@mui/material/IconButton'
import { Brightness4, Brightness7 } from '@mui/icons-material'
import { themeOptions } from '../theme'

export const Root = () => {
  const dispatch = useAppDispatch()
  const mode = useAppSelector((state) => state.mode)
  const theme = useMemo(() => createTheme(themeOptions(mode)), [mode])
  const toggleMode = () => {
    dispatch(setMode())
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IconButton onClick={toggleMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </ThemeProvider>
  )
}
