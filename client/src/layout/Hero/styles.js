import styled from 'styled-components';
import { Container, Title, Button } from '../../globalStyles';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const HeroImg = styled.img`
  width: 100%;
  display: block;
`;

export const HeroContent = styled(Container)`
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
