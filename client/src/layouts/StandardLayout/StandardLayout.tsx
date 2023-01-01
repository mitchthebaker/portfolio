// libraries
import React from 'react';
import { Box } from '@mui/material';

// sass 
import '../../sass/layout/_standardlayout.scss';

// components 
import Nav from '../../components/Nav';

interface IStandardLayout {
  children: React.ReactNode;
}

const StandardLayout = ({ children }: IStandardLayout): JSX.Element => {
  
  /**
   * Should end up being something like this:
   * 
   * <main>
   *   <Nav />
   *   { children }
   *   <Footer />
   * </main>
   * 
   */
  return (
    <Box className='standard-layout'>
      <Nav />
      { children }
    </Box>
  );
};

export default StandardLayout;