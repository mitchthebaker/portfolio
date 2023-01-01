// libraries
import React, { useState, useEffect } from 'react';
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
import HideOnScroll from './HideOnScroll';
import HamburgerIcon from './HamburgerIcon';

// images
import mbaker from './mbaker.jpg';

const Nav = (): JSX.Element => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    // if hamburger content is open, close it if scrolling occurs
    const onScroll = () => {
      if(isOpen) setOpen(!isOpen);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [isOpen, setOpen]);

  return (
    <>
      <HideOnScroll>
        <AppBar position='fixed' className='nav'>
          <Toolbar className='toolbar'>
            <Link to='/'>
              <Avatar 
                alt='Mitchel Baker' 
                src={mbaker}
                sx={{ width: 55, height: 55 }}
              />
            </Link>
            <Box className='navigation'>
              <HamburgerIcon isOpen={isOpen} setOpen={setOpen} />
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Nav;