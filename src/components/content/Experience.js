/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Chip } from '@mui/material';

const ExperienceCSS = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const ExperiencePhotoCSS = css`
  max-width: 100%;
  height: auto;
  border: 1px solid white;
  border-radius: 5px;
  margin: 10px;

  @media (min-width: 768px) {
    max-width: 60%;
  }
`;

const ExperienceWrapperCSS = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1000px) {
    margin-left: 50px;
  }
`;

const TitleCSS = css`
  font-size: 16px;
  font-weight: 800;
`;

const ExperienceContentCSS = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const ChipCSS = css`
  margin: 5px;
  border: 1px solid white;
  color: white;
`;

const Experience = ({ photo, alt, title, chips, date, description }) => {
  return (
    <Box css={ExperienceCSS}>
      <img 
        src={photo}
        alt={alt}
        css={ExperiencePhotoCSS}
      />
      <Box css={ExperienceWrapperCSS}>
        <Typography variant='h4' css={TitleCSS}> 
          {title} 
        </Typography>
        <Box css={ExperienceContentCSS}>
          {chips.map((chip, idx) => (
            <Chip 
              key={idx} 
              label={chip} 
              variant='outlined'
              css={ChipCSS}
            />
          ))}
        </Box>
        <Typography variant='h4'>
          {date}
        </Typography>
        <Typography variant='h4'>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

Experience.propTypes = {
  photo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  chips: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Experience; 