/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import mbaker from '../../images/mbaker.jpg';

const Logo = () => {
  return (
    <Box css={css`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    `}>
      <Avatar 
        alt='Mitchel Baker' 
        src={mbaker}
        css={css`
          width: 50px;
          height: 50px;
        `}
      />
      <Typography variant='h2' css={css`
        @media (max-width: 500px) {
          display: none;
        }
      `}>
        Mitchel Baker 
      </Typography>
    </Box>
  );
};

export default Logo;