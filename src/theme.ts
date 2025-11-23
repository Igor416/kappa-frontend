import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#438bce',
      main: '#00284a',
      dark: '#0e4d87',
      contrastText: '#fff',
    },
    secondary: {
      light: '#8bce43',
      main: '#00877e',
      dark: '#4d870e',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
    button: {
      textTransform: 'none'
    },
    h6: {
      fontWeight: 400
    }
  }
});

export default theme;