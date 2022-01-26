/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Box, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const WorkContent = () => {
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
        flex-direction: row;
        justify-content: center;
        align-items: center;
        max-width: 1000px;
        margin: 15px;
        border: 1px solid white; 
        border-radius: 5px;
        backdrop-filter: blur(20px);
        background: rgb(64 64 64 / 80%);
      `}>
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
      </Box>
    </Box>
  );
};

export default WorkContent; 