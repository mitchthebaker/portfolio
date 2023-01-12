// libraries
import React from 'react';
import { Box } from '@mui/material';

// sass 
import '../../sass/pages/_landing.scss';

// components 
//import Image from '../../components/Image';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

// images 
import ggBridge from './ggBridge.jpg';
import lisbonCathedral from './lisbon.jpg';

/*const mockText = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ex dolor, cursus quis suscipit a, suscipit et tortor. Mauris vitae iaculis erat. Donec pharetra lorem nec turpis tincidunt mollis. Nullam in odio ipsum. Pellentesque sodales orci sit amet nunc feugiat posuere. Suspendisse molestie aliquet mi eu laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a lorem elit. Suspendisse nulla mi, porta at tellus dignissim, vehicula pellentesque mi.',
    speed: -10
  },
  {
    text: 'Proin enim quam, finibus porttitor egestas sit amet, ultricies non urna. Vestibulum nibh nulla, mattis ut hendrerit et, feugiat vitae purus. Vivamus nec urna vehicula, congue sem non, mattis lorem. Proin sed posuere nisl. Mauris at ante fringilla, commodo purus nec, euismod felis. Sed tempus pharetra luctus. Vivamus porta nec diam quis pellentesque. Quisque velit mauris, molestie vel felis et, ultrices placerat lorem. Etiam ac fermentum magna, eu gravida nunc. Integer quis nulla rutrum odio rutrum tempor ac eget ligula. Proin bibendum enim vitae tortor accumsan egestas. Proin semper turpis at libero suscipit, nec accumsan justo facilisis.',
    speed: -30
  },
  {
    text: 'Proin enim quam, finibus porttitor egestas sit amet, ultricies non urna. Vestibulum nibh nulla, mattis ut hendrerit et, feugiat vitae purus. Vivamus nec urna vehicula, congue sem non, mattis lorem. Proin sed posuere nisl. Mauris at ante fringilla, commodo purus nec, euismod felis. Sed tempus pharetra luctus. Vivamus porta nec diam quis pellentesque. Quisque velit mauris, molestie vel felis et, ultrices placerat lorem. Etiam ac fermentum magna, eu gravida nunc. Integer quis nulla rutrum odio rutrum tempor ac eget ligula. Proin bibendum enim vitae tortor accumsan egestas. Proin semper turpis at libero suscipit, nec accumsan justo facilisis.',
    speed: -50
  },
  {
    text: 'Donec eu nibh iaculis justo mattis varius vitae non augue. Sed in justo non erat volutpat facilisis non sit amet felis. Ut sed facilisis nulla. Donec tempus ultrices risus, eu iaculis sem porta laoreet. In semper lacus sed lobortis tempor. Curabitur ac ligula lectus. Cras sit amet erat id orci varius vulputate vel non quam. Praesent vehicula sem orci, in molestie nisl accumsan non. Sed vulputate tellus a dolor posuere, nec convallis tortor interdum. Sed a laoreet turpis. Nullam augue velit, venenatis sit amet erat eget, ornare euismod erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus rutrum ipsum ut mauris vehicula, et luctus elit iaculis. Ut semper, nisi eu pretium commodo, ipsum ipsum tempus nisi, sit amet varius metus nulla non dui. Vestibulum vel turpis posuere, facilisis libero sed, euismod enim.',
    speed: -70
  },
];*/

const Landing = (): JSX.Element => {
  return (
    <Box className='landing'>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            { image: lisbonCathedral, speed: -20 },
            {
              speed: -10,
              children: (
                <Box className='landing--content'>
                  <h2> text 123 </h2>
                </Box>
              ),
            }
          ]}
          className='parallax'
        />

        <ParallaxBanner
          layers={[
            {
              speed: -20,
              children: (
                <Box className='landing--content'>
                  <h2> text 123 </h2>
                </Box>
              ),
            }
          ]}
          className='parallax'
        />

        <ParallaxBanner
          layers={[
            { image: ggBridge, speed: -10 },
          ]}
          className='parallax'
        >
          <Box className='landing--content'>
            <h2> text 123 </h2>
          </Box>
        </ParallaxBanner>
      </ParallaxProvider>
    </Box>
  );
};

/*{mockText.map((item, id) => (
  <div key={id}>
    <ParallaxProvider>
      <Parallax  speed={item.speed}>
        <p className='p'> {item.text} </p>
      </Parallax>
    </ParallaxProvider>
  </div>
))}*/

export default Landing;