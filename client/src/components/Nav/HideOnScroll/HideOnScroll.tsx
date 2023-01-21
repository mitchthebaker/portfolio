// libraries
import React from 'react';
import {
  Slide,
  useScrollTrigger,
} from '@mui/material';

interface IHideOnScroll {
  window?: () => Window;
  children: React.ReactElement;
  componentId?: string;
}

const HideOnScroll = (props: IHideOnScroll): JSX.Element => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      { children }
    </Slide>
  );
};

export default HideOnScroll;