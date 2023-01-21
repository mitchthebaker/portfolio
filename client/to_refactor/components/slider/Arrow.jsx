/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
      font-size: 40px;
      color: white;
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
      @media (max-width: 500px) {
        ${direction === 'right' ? 'right: 5px' : 'left: 5px'};
      }
    `}
  >
    {direction === 'right' ? <FaChevronRight /> : <FaChevronLeft />}
  </div>
);

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Arrow;