import { render } from '@testing-library/react'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme' // theme object from step 2

// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const Providers = ({ children }) => {
  // return children
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
