import styled from 'styled-components';
import { Button, Container, Title } from '../../globalStyles';
import { Placeholder } from '../../constants/colors';

export const NewArrivalContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;

export const NewArrivalButton = styled(Button)`
  padding: 2px 13px;
  font-size: 16px;
  color: ${Placeholder};
`;

export const NewArrivalText = styled(Title)`
  letter-spacing: 3.5px;
  @media only screen and (min-width: 1080px) {
    padding-bottom: 10px;
  }
`;

export const TextsContainer = styled.div`
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  @media only screen and (min-width: 1080px) {
    padding: 10px 0 12px 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductsContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 880px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
  @media only screen and (min-width: 1080px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const ExploreButton = styled(Button)`
  font-size: 1.1rem;
  img {
    width: 28px;
    padding-left: 5px;
  }
`;
