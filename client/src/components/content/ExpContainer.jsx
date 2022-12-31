import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import Experience from './Experience';

const ExpContainer = ({ workExp }) => {

  return (
    <Container>
      {workExp.map((exp, i) => (
        <Experience 
          key={i}
          photo={exp.photo} 
          alt={exp.alt} 
          title={exp.title} 
          chips={exp.chips} 
          date={exp.date} 
          description={exp.description}
        />
      ))}
    </Container>
  );
};

ExpContainer.propTypes = {
  workExp: PropTypes.array.isRequired
};

export default ExpContainer;
