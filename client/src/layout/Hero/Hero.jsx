import React from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroTitles,
  HeroTitle,
  HeroButton,
  HeroButtons,
  HeroSpace,
  HeroImg,
} from './styles';
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
        </HeroButtons>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
