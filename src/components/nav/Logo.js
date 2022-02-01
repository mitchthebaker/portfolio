/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// images
import mbaker from '../../images/mbaker.jpg';

const LogoCSS = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LinkCSS = css`
  text-decoration: none;
  color: white;
`;

const AvatarCSS = css`
  width: 50px;
  height: 50px;
`;

const LogoH2CSS = css`
  @media (max-width: 500px) {
    display: none;
  }
`;

const Logo = () => {
  return (
    <Box css={LogoCSS}>
      <Link to='/' css={LinkCSS}>
        <Avatar 
          alt='Mitchel Baker' 
          src={mbaker}
          css={AvatarCSS}
        />
      </Link>
      <Link to='/' css={LinkCSS}>
        <Typography variant='h2' css={LogoH2CSS}>
          Mitchel Baker 
        </Typography>
      </Link>
    </Box>
  );
};

export default Logo;