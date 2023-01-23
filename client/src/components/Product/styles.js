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
  width: ${({ width }) => (width ? width : '165px')};
  padding-bottom: 5px;
`;

export const ProductTitle = styled(Title)`
  color: ${({ orange }) => (orange ? `${Primary}` : 'black')};
  padding: 3px 15px;
  font-size: 15px;
`;
