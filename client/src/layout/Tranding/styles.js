import styled from 'styled-components';
import { Title } from '../../globalStyles';

export const TrandingTitle = styled(Title)`
  letter-spacing: 5px;
  padding-bottom: 15px;
  text-align: center;
`;

export const TrandingTags = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
  @media screen and (max-width: 374px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
