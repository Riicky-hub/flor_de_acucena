import styled from 'styled-components';
import { Container, Paragraph } from '../../globalStyles';
import { Body } from '../../constants/colors';

export const AboutUsContainer = styled(Container)`
  background: #F2F2F2;
  color: ${Body};
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 120px;
`;

export const AboutUsParagraph = styled(Paragraph)`
  margin: 20px 0;
  text-align: center;
  @media only screen and (min-width: 580px) {
    padding: 0 18%;
    margin: 10px 0;
  }
`;

export const AboutUsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 7px;
  padding: 15px 0;
  @media only screen and (min-width: 580px) {
    grid-gap: 1px;
  }
`;

export const AboutUsGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 7px;
  padding-bottom: 10px;
  img {
    width: 60px;
    padding-bottom: 10px;
  }
`;
