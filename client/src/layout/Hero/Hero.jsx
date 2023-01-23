import React from 'react';
import {
  HeroContainer,
  HeroTitles,
  HeroTitle,
  HeroButton,
  HeroButtons,
  HeroSpace,
  HeroImg,
  HeroImgDesktop,
  HeroContainerDesktop,
  HeroTextsDesktop,
  HeroTitleDesktop,
  HeroParagraph,
  HeroImgContainer,
  HeroImgFrame,
  FlowerFrame,
} from './styles';
import heroModel from '../../assets/models/Hero.png';
import HeroModelDesktop from '../../assets/models/HeroDesktop.png';
import HeroModelFrame from '../../assets/bg-frames/HeroDesktopFrame.svg';
import rightFlower from '../../assets/bg-frames/flowerFrame_01.svg';
import leftFlower from '../../assets/bg-frames/flowerFrame_02.svg';
import { Button } from '../../globalStyles';

const Hero = () => {
  return (
    <div style={{ position: 'relative' }}>
      {window.innerWidth < 530 ? (
        <HeroContainer fdColumn>
          <HeroImg src={heroModel} />
          <div>
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
          </div>
        </HeroContainer>
      ) : (
        <>
          <HeroContainerDesktop>
            <HeroTextsDesktop>
              <HeroTitleDesktop>Collections</HeroTitleDesktop>
              <HeroParagraph>you can explore ans shop many differnt collection from various barands here</HeroParagraph>
              <Button padding='10px 12px'>Explore Collection</Button>
            </HeroTextsDesktop>
            <div style={{ display: 'flex', flex: '1' }}>
              <HeroImgContainer>
                <HeroImgDesktop src={HeroModelDesktop} />
                <HeroImgFrame src={HeroModelFrame} />
              </HeroImgContainer>
            </div>
          </HeroContainerDesktop>
          <FlowerFrame src={leftFlower} width='90px' bottom='3rem' />
          <FlowerFrame src={rightFlower} width='100px' bottom='5rem' right='0' />
        </>
      )}
    </div>
  );
};

export default Hero;
