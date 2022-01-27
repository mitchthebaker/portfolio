/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box css={css`
      width: 100%
      grid-area: footer;
      position: absolute; 
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 25px;
    `}>
      <Typography variant='h2'>
        Mitchel Baker 2022
      </Typography>
    </Box>
  );
};

export default Footer;