/*import { css } from '@emotion/react';
import React from 'react';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './ui/Theme';
import Home from '../../pages/Home';
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';
import WorkContent from '../../components/content/WorkContent';
import ProjectContent from '../../components/content/ProjectContent';
import Connect from '../../components/content/Connect';*/

// libraries
import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from 'react-router-dom';

// layout 
import StandardLayout from '../../layouts/StandardLayout';

// pages 
import Landing from '../../pages/Landing';
import NoMatch from '../../pages/NoMatch';

const routes = [
  {
    path: '/',
    layout: StandardLayout,
    page: Landing
  },
  {
    path: '*',
    layout: StandardLayout,
    page: NoMatch
  }
];

const App = (): JSX.Element => {

  return (
    <Router>
      <Routes>
        {routes.map(({ path, layout: Layout, page: Page }) => (
          <Route key={path} path={path} element={
            <Layout>
              <Page />
            </Layout>
          } />  
        ))}
      </Routes>
    </Router>
  );
};

export default App;
