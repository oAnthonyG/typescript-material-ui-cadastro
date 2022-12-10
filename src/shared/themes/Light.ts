import { createTheme } from '@mui/material';
import { blue, cyan, grey, red, yellow } from '@mui/material/colors';

export const LigthTheme = createTheme({
  palette: {
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
      default: '#fff',
      paper: '#f7f6f3',
    }
  }
});
