/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Box, Typography } from '@mui/material';
import '../../css/Navigation.css';

const Navigation = () => {
  return (
    <Box css={css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-left: auto;
    `}>
      <Typography variant='h3'>
        Projects
      </Typography>
      <Typography variant='h3'>
        Work
      </Typography>
      <Typography variant='h3'>
        Connect
      </Typography>
    </Box>
  );
};

export default Navigation; 