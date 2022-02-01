/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Separator } from '../../ui/Emotion';
import DownloadLink from './DownloadLink';

// documents
import resumePdf from '../../documents/baker_resume.pdf';

// images 
import resume from '../../images/resume.png';

const ConnectCSS = css`
  width: 100%;
  background: #b3c2dd;
  padding: 115px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ConnectH2CSS = css`
  font-size: 22px;
  font-weight: 800;
  margin: 0;
  padding: 15px;
`;

const ButtonWrapperCSS = css`
  display: flex;
  flex-direction: row;
  flex-wrap: none;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  @media (max-width: 500px) {
    margin-top: 25px;
  }
`;

const ButtonCSS = css`
  font-size: 40px;
  margin: 25px 50px;
  @media (max-width: 500px) {
    margin: 5px 15px;
  }
`;

const ResumeCSS = css`
  border: 1px solid white;
  border-radius: 5px;
  margin: 50px;
  height: auto;

  @media (max-width: 500px) {
    max-width: 350px;
  }

  @media (min-width: 500px) {
    max-width: 475px;
  }

  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

const Connect = () => {
  return (
    <Box css={ConnectCSS}>
      <Typography variant='h2' css={ConnectH2CSS}> 
        Connect 
      </Typography>
      <Box css={ButtonWrapperCSS}>
        <Button href="mailto:mitchthebaker@protonmail.com" css={ButtonCSS}> <FaEnvelope /> </Button>
        <Button href="https://www.linkedin.com/in/mitchel-baker-146768146/" css={ButtonCSS}> <FaLinkedin /> </Button>
        <Button href="https://github.com/mitchthebaker" css={ButtonCSS}> <FaGithub /> </Button>
      </Box>
      <DownloadLink src={resumePdf}/>
      <img 
        src={resume}
        alt="Resume"
        css={ResumeCSS}
      />
      <Box css={Separator}>
      </Box>
    </Box>
  );
};

export default Connect;