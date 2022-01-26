/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Container } from '@mui/material';
import Logo from './Logo';
import Navigation from './Navigation';

const Navbar = () => {
  return (
    <Container css={css`
      position: fixed;
      z-index: 1000;
      grid-area: navbar;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding: 10px 25px 5px 25px;
    `}>
      <Logo />
      <Navigation />
    </Container>
  );
};

export default Navbar;