import { changeThemeModeAC, selectStatus, selectThemeMode } from "@/app/app-slice"
import { useAppDispatch, useAppSelector } from "@/common/hooks"
import { containerSx } from "@/common/styles/container.styles"
import { AppBar, Container, IconButton, LinearProgress, Switch, Toolbar } from "@mui/material"
import { Logo } from "./Logo/Logo"
import { NavButton } from "../NavButton/NavButton"

export const Header = () => {
  const dispatch = useAppDispatch()

  const status = useAppSelector(selectStatus)

  const themeMode = useAppSelector(selectThemeMode)

  const changeMode = () => {
    dispatch(changeThemeModeAC({ themeMode: themeMode === "dark" ? "light" : "dark" }))
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth={"lg"} sx={containerSx}>
          <IconButton>
            <Logo />
          </IconButton>
          <div>
            <NavButton>Sign out</NavButton>
            <Switch color="default" onClick={changeMode} />
          </div>
        </Container>
      </Toolbar>
      {status === "loading" && <LinearProgress />}
    </AppBar>
  )
}