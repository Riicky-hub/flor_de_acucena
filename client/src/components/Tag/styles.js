import styled from 'styled-components';
import { InputBackground, Body } from '../../constants/colors';

export const TagButton = styled.button`
  background: ${InputBackground};
  color: ${Body};
  border: none;
  border-radius: 20px;
  padding: 8px;
  margin: 5px;
  cursor: default;
`;
