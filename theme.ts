import { Theme, ThemeUIContextValue, useThemeUI } from 'theme-ui'

const makeTheme = <T extends Theme>(t: T) => t
const theme = makeTheme({
  colors: {
    text: '#111',
    background: '#fff',
    primary: 'tomato',
    secondary: '#3f3f3f',
    muted: '#e0e0e0',
    highlight: '#9f9f9f',
    gray: '#6c6c6c',
    accent: '#3f3f3f',
  },
  fonts: {
    body: 'Comic Sans MS',
  },
})

export type ExactTheme = typeof theme

export default theme

interface ExactContextValue extends Omit<ThemeUIContextValue, 'theme'> {
  theme: ExactTheme
}
export const useTheme = useThemeUI as unknown as () => ExactContextValue
