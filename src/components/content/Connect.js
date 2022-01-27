/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const button = css`
  font-size: 40px;
  margin: 25px 50px;
  @media (max-width: 500px) {
    margin: 5px 15px;
  }
`;

const Connect = () => {
  return (
    <Box css={css`
      width: 100%;
      height: 100vh;
      background: #b3c2dd;
      padding: 115px 0px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    `}>
      <Typography variant='h2' css={css`
        font-size: 22px;
        font-weight: 800;
        margin: 0;
        padding: 15px;
      `}> 
        Connect 
      </Typography>
      <Box css={css`
        display: flex;
        flex-direction: row;
        flex-wrap: none;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        @media (max-width: 500px) {
          margin-top: 25px;
        }
      `}>
        <Button href="mailto:mitchthebaker@protonmail.com" css={button}> <FaEnvelope /> </Button>
        <Button href="https://www.linkedin.com/in/mitchel-baker-146768146/" css={button}> <FaLinkedin /> </Button>
        <Button href="https://github.com/mitchthebaker" css={button}> <FaGithub /> </Button>
      </Box>
    </Box>
  );
};

export default Connect;