/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './ui/Theme';
import Home from './pages/Home';
import Navbar from './components/nav/Navbar';

const App = () => {

  return (
    <ThemeProvider theme={theme} css={css`
      width: 100%;
      display: grid;
      grid-template-columns: 40px 50px auto 50px 40px;
      grid-template-rows: auto;
      grid-template-areas: 
        "navbar navbar navbar navbar navbar"
        "main main main main main"
        "footer footer footer footer footer";
    `}>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
