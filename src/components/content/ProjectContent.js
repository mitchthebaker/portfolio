/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Box, Typography } from '@mui/material';
import ExpContainer from './ExpContainer';

// images
import csc600App from '../../images/csc600-app.png';
import csc675Discord from '../../images/csc675-discord.png';
import csc648Site from '../../images/csc648-site.png';
import csc415FileSystem from '../../images/csc415-filesystem.png';
import flashpassApp from '../../images/flashpass-app.png';
import biconvexApp from '../../images/biconvex-app.png';

const ProjectContent = () => {

  const workExp = [
    {
      name: 'Symphony Quadtuplets',
      photo: csc600App,
      alt: 'CSC600 Final Project',
      title: 'LambdaVibe - A Custom Instrument and Visualizer Application',
      chips: [
        'React',
        'React-p5',
        'Tone.js',
        'Typescript',
        'Node.js',
        'REST API',
        'SQL'
      ],
      date: 'Aug 2021 - Dec 2021',
      description: 'Our team of three created our own instruments, which leveraged the Tone.js library to play notes at different octaves. We also created visualizers to accompany the sound of each note to create a better image of the notes being played. Additionally, we implemented a REST API which provided CRUD operations for songs.'
    },
    {
      name: 'Database Systems',
      photo: csc675Discord,
      alt: 'CSC675 Final Project',
      title: 'ATM Management System and Discord Bot',
      chips: [
        'Javascript',
        'replit',
        'MySQL'
      ],
      date: 'Aug 2021 - Dec 2021',
      description: 'I was assigned the task of creating completely from scratch an ATM Management System, which would improve upon existing legacy ATM infrastructure. I started by whiteboarding entity sets, data attributes, and the overall architecture of the system. Then, I worked hard to implement these ideas with ERD/EER diagrams and test statements which created the foundation of the database system. Lastly, I created a Discord Bot which receives commands from a Discord channel and performs queries on the database system according to the command and any parameters specified.'
    },
    {
      name: 'Dropsell',
      photo: csc648Site,
      alt: 'CSC648 Final Project',
      title: 'Dropsell: A Next Generation Digital Marketplace',
      chips: [
        'React',
        'Redux',
        'Node.js',
        'MySQL',
        'Nginx',
        'AWS EC2 / RDS'
      ],
      date: 'June 2021 - Aug 2021',
      description: 'I collaborated with my team of six other developers to create a digital marketplace for buying and selling various products. We underwent a rigorous forward-engineering process, ranging from the creation of our product summary, competitive analysis, use cases, data definitions, database architecture, to the construction of UI/UX wireframing and the building out of our actual application logic. I led the core development process, which consisted of writing a Node.js REST API integrated with a MySQL relational database system, combined with React functional components plus Redux for displaying real-time data. I also deployed our application to a public facing IP address using AWS. We utilized agile and scrum techniques to expedite our development process, to self-organize, and to problem solve more efficiently.'
    },
    {
      name: 'Best Case',
      photo: csc415FileSystem,
      alt: 'CSC415 Final Project',
      title: 'Linux File System',
      chips: [
        'C'
      ],
      date: 'Jan 2021 - May 2021',
      description: 'Our team of four was tasked with creating a file system in C from scratch. Examples of file commands we had to implement were cp, mv, md, rm, cd, and pwd.'
    },
    {
      name: 'Flashpass',
      photo: flashpassApp,
      alt: 'Flashpass Application',
      title: 'Flashpass - A Study Tool',
      chips: [
        'HTML/CSS',
        'Javascript',
        'Node.js',
        'MongoDB'
      ],
      date: 'Jan 2019 - Mar 2019',
      description: 'My first attempt at creating a full stack application from scratch. I liked the idea of Quizlet and how easy it was to study using their service, so I decided to make a similar application. I learned about user authentication by implementing registration, login, and logout operations for users, MongoDB for storing and retrieving data sets for users, and lastly the importance of responsive web applications.'
    },
    {
      name: 'Biconvex',
      photo: biconvexApp,
      alt: 'Biconvex Application',
      title: 'BiConvex - A Photography Portfolio',
      chips: [
        'HTML/CSS',
        'Javascript'
      ],
      date: 'Nov 2018 - Jan 2019',
      description: 'The first project I ever wrote. I was using Wix as a photography portfolio and disliked how I could not customize Wix according to my specific use cases. As a result, I decided to wrtie my own photography portfolio and host it online with Heroku. I learned a ton about the DOM, triggering event handlers, and creating an easy to use UI/UX.'
    }
  ];

  return (
    <Box css={css`
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      grid-area: main;
      background: #b3c2dd;
      padding: 115px 0px;
    `}>
      <Typography variant='h2' css={css`
        font-size: 22px;
        font-weight: 800;
        margin: 0;
        padding: 15px;
      `}>
        Projects
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
      <Box css={css`
        width: 85%;
        border-bottom: 1px solid white;
        margin: 50px;
      `}>
      </Box>
    </Box>
  );
};

export default ProjectContent;