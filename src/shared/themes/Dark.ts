import { createTheme } from '@mui/material';
import { blue, red } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#45aaf2',
      dark: '#2d98da',
      light: blue[200],
      contrastText: '#fff',
    },
    secondary: {
      main: red[500],
      dark: '#eb3b5a',
      light: '#fc5c65',
      contrastText: '#fff',
    },
    background: {
      paper: '#303134',
      default: '#202124',
    },
  },
  typography: {
    allVariants: {
      color: 'white'
    }
  }
});
