import { ThemeProvider } from '@emotion/react'
import './App.css'
import { getTheme } from '@/common/theme'
import { useAppSelector } from '@/common/hooks'
import { selectThemeMode } from './app-slice'
import styles from './App.module.css';
import { Header } from '@/common/components/Header/Header'
import { CssBaseline } from '@mui/material'
import { ErrorSnackbar } from '@/common/components/ErrorSnackbar/ErrorSnackbar'
import { Routing } from '@/common/routing'

export const App = () => {

  const themeMode = useAppSelector(selectThemeMode)

  const theme = getTheme(themeMode)

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.app}>
        <CssBaseline />
        <Header />
        <Routing />
        <ErrorSnackbar />
      </div>
    </ThemeProvider>
  )
}

export default App
