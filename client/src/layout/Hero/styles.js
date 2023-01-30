import styled from 'styled-components';
import { Title, Button } from '../../globalStyles';

export const HerosContainer = styled.div`
  position: relative;
  @media only screen and (max-width: 930px) {
    background: rgb(230,233,238);
    background: -moz-linear-gradient(225deg, rgba(230,233,238,1) 70%, rgba(175,175,175,0.8267682072829132) 95%);
    background: -webkit-linear-gradient(225deg, rgba(230,233,238,1) 70%, rgba(175,175,175,0.8267682072829132) 95%);
    background: linear-gradient(225deg, rgba(230,233,238,1) 70%, rgba(175,175,175,0.8267682072829132) 95%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#e6e9ee",endColorstr="#afafaf",GradientType=1);
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: ${({ fdColumn }) => (fdColumn ? 'column' : 'row')};
  position: relative;
`;

export const HeroImg = styled.img`
  width: 100%;
  display: block;
`;

export const HeroSpace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const HeroTitle = styled(Title)`
  font-family: 'Bodoni Moda';
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
  font-style: italic;
  letter-spacing: 2px;
  font-size: 35px;
  padding-left: ${({ pl }) => (pl ? pl : 0)};
  line-height: 38px;
`;

export const HeroButton = styled(Button)`
  cursor: pointer;
  border-radius: 30px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  padding: 9px 25px;
`;

export const HeroTitles = styled.div`
  display: flex;
  white-space: nowrap;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HeroButtons = styled.div`
  display: flex;
  white-space: nowrap;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 15px;
  transform: translate(-50%);
`;

export const Icons = styled.div`
  padding: 10px 0;
`;

export const Icon = styled.img`
  width: 15px;
`;

export const HeroContainerDesktop = styled(HeroContainer)`
  padding: 0 10%;
  height: 450px;
  position: 'relative';
`;

export const HeroTextsDesktop = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const HeroTitleDesktop = styled.h1`
  font-weight: 100;
`;

export const HeroParagraph = styled.p`
  padding: 25px 10px 25px 0;
  line-height: 2em;
  text-transform: capitalize;
`;

export const HeroImgContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeroImgDesktop = styled.img`
  width: 180px;
  z-index: 2;
  @media screen and (min-width: 826px) {
    width: 230px;
  }
`;

export const HeroImgFrame = styled(HeroImgDesktop)`
  z-index: 1;
  position: absolute;
  left: 8px;
  bottom: 130px;
  transform: translate(3px, 32px);
  @media screen and (min-width: 826px) {
    bottom: 99px;
  }
`;

export const FlowerFrame = styled.img`
  position: absolute;
  bottom: ${({ bottom }) => (bottom ? bottom : '')};
  right: ${({ right }) => (right ? right : '')};
  left: ${({ left }) => (left ? left : '')};
`;

export const DisplayVideo = styled.video`
  width: 100%;
`;

export const DisplayText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  background-color: rgba(0,0,0,0.30);
  backdrop-filter: blur(2px);
  padding: 30px;
  box-shadow: 0px 0px 60px 44px rgba(0,0,0,0.30);
  -webkit-box-shadow: 0px 0px 60px 44px rgba(0,0,0,0.30);
  -moz-box-shadow: 0px 0px 60px 44px rgba(0,0,0,0.30);
  h1 {
    font-family: 'Bodoni Moda';
    font-style: italic;
    padding-bottom: 20px;
    line-height: 1.3em;
  }
`;
