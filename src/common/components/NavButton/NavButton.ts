import { Button, styled } from "@mui/material"

export const NavButton = styled(Button)(({ theme }) => ({
  minWidth: "110px",
  fontWeight: "bold",
  boxShadow: `0 0 0 2px ${theme.palette.primary.dark}, 4px 4px 0 0 ${theme.palette.primary.dark}`,
  borderRadius: "2px",
  textTransform: "capitalize",
  margin: "0 10px",
  padding: "8px 24px",
  color: theme.palette.primary.contrastText,
  background: theme.palette.primary.light,
}))
