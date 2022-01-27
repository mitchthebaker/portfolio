/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Box, Typography } from '@mui/material';
import aboutPhoto from '../../images/about-photo.png';

const AboutContent = () => {
  return (
    <Box css={css`
      width: 100%;
      background: #b3c2dd;
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
    `}>
      <Typography variant='h2' css={css`
        font-size: 22px;
        font-weight: 800;
        margin: 0;
        padding: 15px;
      `}
      > 
        About Me 
      </Typography>
      <Box css={css`
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: center;
        max-width: 700px;
        margin: 15px;
        width: 90%;
        @media (max-width: 768px) {
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        @media (min-width: 600px) {
          max-width: 900px;
        }
        @media (min-width: 1400px) {
          max-width: 1000px;
        }
      `}>
        <img
          src={aboutPhoto}
          alt='About Photo for Mitchel Baker'
          css={css`
            width: 100%;
            max-width: 300px;
            height: auto;
            border: 1px solid white;
            border-radius: 5px;
            @media (max-width: 768px) {
              margin: 15px;
            }
            @media (min-width: 768px) {
              max-width: 250px;
              margin-left: auto;
              
            }
          `}
        />
        <Box css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          text-align: center;
          @media (min-width: 500px) {
            margin-left: 15px;
          }
          @media (min-width: 1000px) {
            margin: 0px 50px 0px 15px;
          }
        `}>
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
          Thanks for stopping by! Feel free to check out my past projects or work experience. Reach out to me and get in touch if you would like to work together! 
          </Typography>
        </Box>
      </Box>
      <Box css={css`
        width: 85%;
        border-bottom: 1px solid white;
        margin: 50px;
      `}>
      </Box>
    </Box>
  );
};

export default AboutContent;