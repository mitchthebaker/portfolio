/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from 'react-router-dom';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './ui/Theme';
import Home from './pages/Home';
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Box css={css`
        position: relative;
        width: 100%;
        display: grid;
        grid-template-columns: 40px 50px auto 50px 40px;
        grid-template-rows: auto;
        grid-template-areas: 
          ". . navbar . ."
          "main main main main main"
          "footer footer footer footer footer";
        justify-items: center;
      `}>
        <Navbar />
        <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </Router>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
