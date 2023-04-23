import { colors, createTheme } from '@mui/material'

const customFontFamily = "'Roboto', 'Helvetica', 'Arial', sans-serif"

const theme = createTheme({
  brand: {
    blue: colors.blue[100],
    green: colors.green[400],
  },

  palette: {
    secondary: { main: '#3289a8' },
    neutral: { main: '#FF5733' },
  },

  typography: {
    fontFamily: customFontFamily,

    title1: {
      fontSize: 24,
      fontWeight: 700,
    },
    title2: {
      fontSize: 22,
      fontWeight: 700,
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 0,
      tablet: 640,
      desktop: 1024,
    },
  },

  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: customFontFamily,
      },
    },

    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
})

export default theme
