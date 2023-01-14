import React from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroTitles,
  HeroTitle,
  HeroButton,
  Icons,
  Icon,
  HeroButtons,
  HeroSpace,
  HeroImg,
} from './styles';
import { bulletOff, bulletOn } from '../../assets/icons';
import heroModel from '../../assets/models/Hero.png';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImg src={heroModel} />
      <HeroContent>
        <HeroSpace>
          <HeroTitles>
            <div>
              <HeroTitle cap>Luxury</HeroTitle>
              <HeroTitle cap pl='15px'>
                Fashion
              </HeroTitle>
              <HeroTitle cap>& Accessories</HeroTitle>
            </div>
          </HeroTitles>
        </HeroSpace>
        <HeroButtons>
          <HeroButton>Explore Collection</HeroButton>
          <Icons>
            <Icon src={bulletOn} />
            <Icon src={bulletOff} />
            <Icon src={bulletOff} />
          </Icons>
        </HeroButtons>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
