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
import WorkContent from './components/content/WorkContent';
import ProjectContent from './components/content/ProjectContent';
import Connect from './components/content/Connect';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box css={css`
          position: relative;
        `}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/work' element={<WorkContent />}/>
            <Route path='/projects' element={<ProjectContent />}/>
            <Route path='/connect' element={<Connect />}/>
          </Routes>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
