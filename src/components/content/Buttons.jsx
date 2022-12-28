import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Button = styled.div`
  position: absolute;
  top: 50%;
  z-index: 1000;
  cursor: pointer;
  font-size: 15px;
  transform: translateY(-50%);
  left: ${props => props.side === 'prev' && 5}px;
  right: ${props => props.side === 'next' && 5}px;
`;

const Buttons = ({handlePrevClick, handleNextClick}) => {
  return (
    <>
      <Button side='prev' onClick={handlePrevClick}>
        <FontAwesomeIcon icon={faChevronLeft}/>
      </Button>
      <Button side='next' onClick={handleNextClick}>
        <FontAwesomeIcon icon={faChevronRight}/>
      </Button>
    </>
  );
};

Buttons.propTypes = {
  handlePrevClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired,
};

export default Buttons;
