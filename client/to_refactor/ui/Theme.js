import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Roboto',
      fontSize: 35,
      fontWeight: 600,
      color: 'white',
      margin: '10px',
      textShadow: '3px 3px #4c4c4c',
    },
    h2: {
      fontFamily: 'Roboto',
      fontSize: 18,
      fontWeight: 600,
      color: 'white',
      margin: '10px',
      textShadow: '1px 1px #4c4c4c',
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
      },
    },
    date_h3: {
      fontFamily: 'Roboto',
      fontSize: 14,
      color: 'white',
    },
    subtitle: {
      fontFamily: 'Roboto',
      fontSize: 20,
      fontWeight: 400,
      color: 'white',
      margin: '0px 10px',
      textShadow: '1px 1px #4c4c4c',
    },
    h4: {
      fontFamily: 'Roboto',
      fontSize: 14,
      color: 'white',
      margin: '10px',
      textAlign: 'center'
    }
  }
});

export default theme;
