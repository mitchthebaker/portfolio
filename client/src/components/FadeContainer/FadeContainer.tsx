// libraries
import React from 'react';
import { Fade } from 'react-awesome-reveal';

interface IFadeContainer {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

const FadeContainer = ({ 
  children, 
  delay, 
  duration 
}: IFadeContainer): JSX.Element => {
  return (
    <Fade delay={delay ? delay : 1000} duration={duration ? duration : 1000}>
      { children }
    </Fade>
  );
};

export default FadeContainer;