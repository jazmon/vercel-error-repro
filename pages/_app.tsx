import { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'

export default function Website({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
