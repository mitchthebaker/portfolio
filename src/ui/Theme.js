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
      margin: '10px',
      textShadow: '1px 1px grey'
    },
    h3: {
      fontFamily: 'Roboto',
      fontSize: 14,
      color: 'white',
      margin: '10px',
      cursor: 'pointer',
      transition: 'transform ease-in 0.1s',
      '&:hover': {
        transform: 'scale(1.1)',
        fontWeight: 500
      }
    },
    date_h3: {
      fontFamily: 'Roboto',
      fontSize: 14,
      color: 'white',
    },
    h4: {
      fontFamily: 'Roboto',
      fontSize: 14,
      color: 'white',
      margin: '10px',
    }
  }
});

export default theme;
