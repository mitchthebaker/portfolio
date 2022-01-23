import React from 'react';
import '../../css/AboutContent.css';
import aboutPhoto from '../../images/about-photo.png';

const AboutContent = () => {
  return (
    <section className='about-content'>
      <h2> About Me </h2>
      <img
        className='about-photo'
        src={aboutPhoto}
        alt='About Photo for Mitchel Baker'
      />
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        <br></br>
        <br></br>
        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
      </p>
    </section>
  );
};

export default AboutContent;