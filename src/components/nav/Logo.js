/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// images
import mbaker from '../../images/mbaker.jpg';

const LinkCSS = css`
  text-decoration: none;
  color: white;
`;

const Logo = () => {
  return (
    <Box css={css`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    `}>
      <Link to='/' css={LinkCSS}>
        <Avatar 
          alt='Mitchel Baker' 
          src={mbaker}
          css={css`
            width: 50px;
            height: 50px;
          `}
        />
      </Link>
      <Link to='/' css={LinkCSS}>
        <Typography variant='h2' css={css`
          @media (max-width: 500px) {
            display: none;
          }
        `}>
          Mitchel Baker 
        </Typography>
      </Link>
    </Box>
  );
};

export default Logo;