import React from 'react';
import mbaker from '../../images/mbaker.jpg';
import '../../css/Logo.css';

const Logo = () => {
  return (
    <section className='logo'>
      <img 
        className='cover-photo'
        src={mbaker}
        alt='Mitchel Baker'
      />
      <p className='logo-name'> Mitchel Baker </p>
    </section>
  );
};

export default Logo;