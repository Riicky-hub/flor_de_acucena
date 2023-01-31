import styled from 'styled-components';
import { Button } from '../../../../globalStyles';

export const Containers = styled.div`
  display: flex;
  width: 100%;
  height: 370px;
`;

export const ImgContainer = styled.div`
  img {
    height: 370px;
    width: auto;
  }
`;

export const TextButton = styled(Button)`
  background: white;
  color: black;
  border: 1px solid black;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  background: ${({ bg }) => (bg ? bg : 'white')};
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: white;
    p {
      width: 65%;
      padding: 20px 0;
    }
  }
`;
