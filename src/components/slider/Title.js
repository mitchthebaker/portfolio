/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Box, Typography } from '@mui/material';

const TitleCSS = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: absolute;
  top: 45%;
  left: 50%;
  transition: transform ease-in 2s;
  @media (max-width: 1400px) {
    left: 40%;
  }
  @media (max-width: 1100px) {
    left: 20%;
  }
  @media (max-width: 499px) {
    top: 30%;
  }
`;

const TitleH1CSS = css`  
  @media (max-width: 800px) {
    font-size: 30px;
  }
  @media (max-width: 700px) {
    font-size: 25px;
    width: 200px;
  }
`;

const TitleSubCSS = css`
  @media (max-width: 800px) {
    font-size: 15px;
  }
  @media (max-width: 700px) {
    font-size: 15px;
  }
`;

const Title = () => {
  return (
    <Box css={TitleCSS}>
      <Typography variant='h1' css={TitleH1CSS}>
        WELCOME TO MY <br></br> DIGITAL SPACE
      </Typography>
      <Typography variant='subtitle' css={TitleSubCSS}>
        The collective outputs of Mitchel Baker
      </Typography>
    </Box>
  );
};

export default Title;