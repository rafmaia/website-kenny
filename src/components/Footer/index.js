import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaSoundcloud
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              KENNY HAYES
            </SocialLogo>
            <WebsiteRights>KENNY HAYES © 2020 All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='//www.facebook.com/kennyhayesmusic' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='//www.instagram.com/kennyhayesmusic' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='//www.youtube.com/channel/UC7cg8GZ3ZMPEHFpL3flKlsg'
                target='_blank'
                aria-label='Youtube'
                rel='noopener noreferrer'
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                target='_blank'
                aria-label='Twitter'
                href='//www.soundcloud.com/kennyhayesmusic'
              >
                <FaSoundcloud />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
