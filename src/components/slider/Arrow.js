/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    css={css`
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      ${direction === 'right' ? 'right: 25px' : 'left: 25px'};
      width: 50px;
      height: 50px;
      background: white;
      cursor: pointer;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      img {
        transform: translateX(${direction === 'left' ? '-2' : '2'}px);
        &:focus {
            outline: 0;
        }
      }
    `}
  >
    {direction === 'right' ? <FontAwesomeIcon icon={faChevronRight}/> : <FontAwesomeIcon icon={faChevronLeft}/>}
  </div>
);

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Arrow;