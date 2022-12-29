/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import PropTypes from 'prop-types';

const Dot = ({ active }) => (
  <span
    css={css`
      padding: 6px;
      margin-right: 5px;
      border-radius: 50%;
      background: ${active ? 'darkgrey' : 'white'};
    `}
  />
);

Dot.propTypes = {
  active: PropTypes.bool.isRequired
};

export default Dot;