// libraries
import React, { useState, useEffect, useRef } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Avatar
} from '@mui/material';
import { Link } from 'react-router-dom';

// sass 
import '../../sass/components/_nav.scss';

// components 
import HamburgerIcon from './HamburgerIcon';

const Nav = (): JSX.Element => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <AppBar position='relative' className='nav'>
        <Toolbar className='toolbar'>
          <Box className='navigation'>
            <HamburgerIcon isOpen={isOpen} setOpen={setOpen} />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;