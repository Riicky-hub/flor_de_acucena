import styled from 'styled-components';
import { Container, Title } from '../../globalStyles';

export const InstagramContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35px;
  padding-bottom: 20px;
`;

export const InstagramTitle = styled(Title)`
  letter-spacing: 4px;
`;

export const InstagramIcon = styled.img`
  width: 27px;
  padding: 13px 0;
`;

export const InstagramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 15px;
  padding: 10px 0;
  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 740px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
  @media screen and (min-width: 1270px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
