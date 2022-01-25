/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import mbaker from '../../images/mbaker.jpg';
import '../../css/Logo.css';

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

/*
<div css={css`
        width: 50px;
        height: 50px;
        background-image: url(${mbaker});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 50%;
      `}>

      </div>
*/