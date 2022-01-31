/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Box } from '@mui/material';
import Slider from '../components/slider/Slider';
import AboutContent from '../components/content/AboutContent';

import oceanBeach from './images/oceanBeach.jpg';
import ggBridge from './images/ggBridge.jpg';
import lisbon from './images/lisbon.jpg';
import twinPeaks from './images/twinPeaks.jpg';

const Home = () => {

  const images = [
    oceanBeach,
    ggBridge,
    lisbon,
    twinPeaks
  ];

  return (
    <Box css={css`
      width: 100%;
      grid-area: main;
      background: #b3c2dd;
      padding-bottom: 100px;
    `}>
      <Slider slides={images} autoplay={5}/>
      <AboutContent />
    </Box>
  );
};

export default Home; 