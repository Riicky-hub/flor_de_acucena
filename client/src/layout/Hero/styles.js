import styled from 'styled-components';
import { Container, Title, Button } from '../../globalStyles';
import heroModel from '../../assets/models/Hero.png';

export const HeroContainer = styled(Container)`
  height: 100vh;
  background: url(${heroModel});
  background-repeat: no-repeat;
`;

export const HeroSpace = styled.div`
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const HeroTitle = styled(Title)`
  font-family: 'Bondoni Moda';
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
  font-style: italic;
  text-transform: uppercase;
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
  flex-direction: column;
  align-items: center;
`;

export const HeroButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icons = styled.div`
  padding: 10px 0;
`;

export const Icon = styled.img`
  width: 15px;
`;
