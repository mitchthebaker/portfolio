/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NavigationCSS = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

const LinkCSS = css`
  text-decoration: none;
  color: white;
`;

const Navigation = () => {
  return (
    <Box css={NavigationCSS}>
      <Typography variant='h3'>
        <Link to='/work' css={LinkCSS}> 
          Work 
        </Link>
      </Typography>
      <Typography variant='h3'>
        <Link to='/projects' css={LinkCSS}> 
          Projects 
        </Link>
      </Typography>
      <Typography variant='h3'>
        <Link to='/connect' css={LinkCSS}> 
          Connect 
        </Link>
      </Typography>
    </Box>
  );
};

export default Navigation; 
