/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ content }) => (
  <div
    css={css`
      width: 100%;
      height: 100%;
      background-image: url('${content}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      filter: brightness(90%);
    `}
  />
);

Slide.propTypes = {
  content: PropTypes.string.isRequired
};

export default Slide;