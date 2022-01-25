import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Roboto'
    },
    h2: {
      fontFamily: 'Roboto',
      fontSize: 18,
      fontWeight: 600,
      color: 'white',
      margin: '10px'
    },
    h3: {
      fontFamily: 'Roboto',
      fontSize: 14,
      color: 'white',
      margin: '10px'
    }
  },
  navbarTitle: {

  }
});

export default theme;