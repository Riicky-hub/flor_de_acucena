import styled from 'styled-components';
import { Container } from '../../globalStyles';

export const CompaniesContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogosContainer = styled.div`
  display: inline-grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
  padding-bottom: 25px;
  padding-top: 25px;
  @media only screen and (min-width: 1080px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`;
