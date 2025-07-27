
import { useAppSelector } from '@/common/hooks'
import styles from './Logo.module.scss'
import { getTheme } from '@/common/theme'
import { selectThemeMode } from '@/app/app-slice'


export const Logo = () => {
  const themeMode = useAppSelector(selectThemeMode)
  const theme = getTheme(themeMode)

  return <a href="https://grensel.github.io/portfolio/" className={styles.a} style={{ color: theme.palette.primary.contrastText }}>'So3'</a>
}