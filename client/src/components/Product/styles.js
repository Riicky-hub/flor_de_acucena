import styled from 'styled-components';
import { Title } from '../../globalStyles';
import { Primary } from '../../constants/colors';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ProductImg = styled.img`
  width: 165px;
  padding-bottom: 5px;
`;

export const ProductTitle = styled(Title)`
  color: ${({ orange }) => (orange ? `${Primary}` : 'black')};
  padding: 3px 3px;
`;
