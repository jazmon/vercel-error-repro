/// <reference types="next" />
/// <reference types="next/types/global" />

/// <reference types="@emotion/react/types/css-prop" />
import {} from 'react'
import { ThemeUIStyleObject } from '@theme-ui/core' // or 'theme-ui'

declare module 'react' {
  interface Attributes {
    sx?: ThemeUIStyleObject
  }
}
