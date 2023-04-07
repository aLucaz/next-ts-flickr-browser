import type { AppProps } from 'next/app'
import {createTheme, ThemeProvider} from "@mui/material";
import {green, orange} from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'sans-serif'
    ].join(','),
  },
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
