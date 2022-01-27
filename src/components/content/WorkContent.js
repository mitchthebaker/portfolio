/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Box, Typography } from '@mui/material';
import ExpContainer from './ExpContainer';
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
    <Box css={css`
      width: 100%;
      background: #b3c2dd;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}>
      <Typography variant='h2' css={css`
        font-size: 22px;
        font-weight: 800;
        margin: 0;
        padding: 15px;
      `}>
        Work Experience
      </Typography>
      <Box css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 1200px;
        margin: 15px;
        width: 90%;
      `}>
        <ExpContainer workExp={workExp}/>
      </Box>
    </Box>
  );
};

export default WorkContent; 

/* 
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
<Timeline position='left'>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot css={css`
                background: white;
              `}/>
              <TimelineConnector css={css`
                background: white;
              `}/>
            </TimelineSeparator>
            <TimelineContent variant='date_h3'>Jun 2021</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot css={css`
                background: white;
              `}/>
              <TimelineConnector css={css`
                background: white;
              `}/>
            </TimelineSeparator>
            <TimelineContent variant='date_h3'>May 2019</TimelineContent>
          </TimelineItem>
        </Timeline>
        <Box>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Box>
*/