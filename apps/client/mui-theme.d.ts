import { PaletteColor, PaletteColorOptions } from '@mui/material'
import { CSSProperties } from 'react'

declare module '@mui/material/styles' {
  interface Theme {
    brand: {
      blue: CSSProperties['color']
      green: CSSProperties['color']
    }
  }

  interface ThemeOptions {
    brand: {
      blue: CSSProperties['color']
      green: CSSProperties['color']
    }
  }

  interface Palette {
    neutral: PaletteColor
  }

  interface PaletteOptions {
    neutral: PaletteColorOptions
  }

  interface TypographyVariants {
    title1: React.CSSProperties
    title2: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    title1?: React.CSSProperties
    title2?: React.CSSProperties
  }

  interface BreakpointOverrides {
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
    mobile: true
    tablet: true
    desktop: true
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title1: true
    title2: true
    body1: false
    body2: false
    button: false
  }
}
