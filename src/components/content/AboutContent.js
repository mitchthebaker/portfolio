/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

// images
import aboutPhoto from '../../images/about-photo.png';

const AboutContentCSS = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    padding: 45px 0px 0px 0px;
  }

  @media (min-width: 1000px) {
    padding: 100px 0px 0px 0px;
  }
`;

const AboutH2CSS = css`
  font-size: 22px;
  font-weight: 800;
  margin: 0;
  padding: 15px;
`;

const AboutWrapperCSS = css`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  margin: 15px;
  width: 75%;
  max-width: 1000px;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`;

const AboutPhotoCSS = css`
  width: 100%;
  max-width: 300px;
  height: auto;
  border: 1px solid white;
  border-radius: 5px;
  margin: 15px 15px 15px auto;
  
  @media (max-width: 1000px) {
    margin: 15px;
  }
`;

const TextWrapperCSS = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: 600px) {
    max-width: 600px;
  }

  @media (min-width: 1000px) {
    margin-right: 50px;
  }
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

const Separator = css`
  width: 85%;
  border-bottom: 1px solid white;
  margin: 50px;
`;

const AboutContent = () => {
  return (
    <Box css={AboutContentCSS}>
      <Typography variant='h2' css={AboutH2CSS}> 
        About Me 
      </Typography>
      <Box css={AboutWrapperCSS}>
        <img
          src={aboutPhoto}
          alt='About Photo for Mitchel Baker'
          css={AboutPhotoCSS}
        />
        <Box css={TextWrapperCSS}>
          <Typography variant='h4'>
            I am a recent college graduate from San Francisco State University with a Bachelors in Computer Science. 
          </Typography>
          <Typography variant='h4'>
            I live in the San Francisco Bay Area, where I enjoy exploring the outdoors, cooling off in the ocean to surf, and spending time with good friends. 
          </Typography>
          <Typography variant='h4'>
            My technical interests can be best described as full stack in nature. 
            I love to create intuitive and easy to use UI/UX, 
            enjoy implementing business logic on the server/database layer, 
            while also having fun setting up CI/CD pipelines, remote servers, and other devops related tasks.
          </Typography>
          <Typography variant='h4'>
            Thanks for stopping by! 
            Feel free to check out my work experience or past projects. 
            Reach out to me and get in touch if you would like to work together! 
          </Typography>
          <Box css={ButtonWrapperCSS}>
            <Button href="mailto:mitchthebaker@protonmail.com" css={ButtonCSS}> <FaEnvelope /> </Button>
            <Button href="https://www.linkedin.com/in/mitchel-baker-146768146/" css={ButtonCSS}> <FaLinkedin /> </Button>
            <Button href="https://github.com/mitchthebaker" css={ButtonCSS}> <FaGithub /> </Button>
          </Box>
        </Box>
      </Box>
      <Box css={Separator}>
      </Box>
    </Box>
  );
};

export default AboutContent;

