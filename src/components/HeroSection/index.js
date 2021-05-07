import React, { useState } from 'react';
import { Button } from '../ButtonElements';

import Video from '../../videos/videokenny.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  Mark,
  ArrowForward,
  ArrowRight
} from './HeroElements';

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='videokenny/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>KENNY HAYES</HeroH1>
        <HeroP>
          <Mark>Ottawa-based musician, songwriter, actor, piano and voice coach</Mark> 
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='about'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            MORE {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;