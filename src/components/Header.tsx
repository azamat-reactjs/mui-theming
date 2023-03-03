import { useAppDispatch } from '../hooks/storeHooks'
import { setMode } from '../store/slices/themeSlice'
import { useTheme } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { Brightness4, Brightness7 } from '@mui/icons-material'

export const Header = () => {
  const dispatch = useAppDispatch()
  const theme = useTheme()
  const toggleMode = () => {
    dispatch(setMode())
  }
  return (
    <header className="header">
      <div className="toggle-theme">
        <IconButton onClick={toggleMode}>
          {theme.palette.mode === 'dark' ? (
            <Brightness7 color="warning" />
          ) : (
            <Brightness4 color="primary" />
          )}
        </IconButton>
      </div>
    </header>
  )
}
