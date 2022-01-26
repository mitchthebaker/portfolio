/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Container, Box } from '@mui/material';
import Logo from './Logo';
import Navigation from './Navigation';

const Navbar = () => {
  return (
    <Box css={css`
      position: fixed;
      z-index: 1000;
      grid-area: navbar;
      width: 100%;
      backdrop-filter: blur(20px);
      border-style: solid;
      border-color: #E7EBF0;
      border-width: 0;
      border-bottom-width: thin;
    `}>
      <Container css={css`
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 10px 25px 10px 25px;
      `}>
        <Logo />
        <Navigation />
      </Container>
    </Box>
  );
};

export default Navbar;