/** @jsxImportSource @emotion/react */
import React from 'react';
import { Box, Typography } from '@mui/material';
import ExpContainer from './ExpContainer';
import { WrapperCSS, ContentCustomH2CSS, ContentCustomBox1CSS, Separator } from '../../ui/Emotion';

import veevApp from '../../images/veev-app.png';
import heartbleedApp from '../../images/heartbleed-app.png';

const WorkContent = () => {

  const workExp = [
    {
      name: 'Veev',
      photo: veevApp,
      alt: 'Veev Ecommerce App',
      title: 'Veev Ecommerce Application',
      chips: [
        'HTML/CSS',
        'Javascript',
        'jQuery',
        'PHP/Laravel',
        'Stripe.js'
      ],
      date: 'July 2019 - Oct 2020; May 2021',
      description: 'Created an ecommerce system which is fast and simple to use for desktop and mobile devices. Users can view upcoming events, join groups, or view stores from a unique selection of merchants.'
    },
    {
      name: 'Heartbleed',
      photo: heartbleedApp,
      alt: 'Heartbleed Trading Card Game',
      title: 'Heartbleed Online Trading Card Game',
      chips: [
        'HTML/CSS',
        'Javascript',
        'jQuery',
        'Node.js',
        'Socket.io'
      ],
      date: 'Apr 2019 - Oct 2019; Jan 2020 - May 2020',
      description: 'Implemented in-game mechanics such as sending cards to the battlefield, modifying the current deck being played, adding/removing cards to the graveyard. Improved upon the live chat feature where players can discuss with their opponent or input commands.'
    }
  ];

  return (
    <Box css={WrapperCSS}>
      <Typography variant='h2' css={ContentCustomH2CSS}>
        Work Experience
      </Typography>
      <Box css={ContentCustomBox1CSS}>
        <ExpContainer workExp={workExp}/>
      </Box>
      <Box css={Separator}>
      </Box>
    </Box>
  );
};

export default WorkContent; 