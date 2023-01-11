import React from 'react';
import {
  HeroContainer,
  HeroTitles,
  HeroTitle,
  HeroButton,
  Icons,
  Icon,
  HeroButtons,
  HeroSpace,
} from './styles';
import { bulletOff, bulletOn } from '../../assets/icons';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroSpace>
        <HeroTitles>
          <div>
            <HeroTitle>Luxury</HeroTitle>
            <HeroTitle pl='15px'>Fashion</HeroTitle>
            <HeroTitle>& Accessories</HeroTitle>
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
    </HeroContainer>
  );
};

export default Hero;
