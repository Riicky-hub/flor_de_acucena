import styled from 'styled-components';
import { Container, Paragraph } from '../../globalStyles';
import { InputBackground } from '../../constants/colors';

export const ContainerFooter = styled(Container)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5px;
`;

export const Div = styled.div`
  width: 100%;
  padding: 25px 0;
`;

export const Icon = styled.img`
  width: 32px;
  margin: 0 27px;
`;

export const Text = styled(Paragraph)`
  color: black;
  letter-spacing: 2px;
`;

export const ButtonsDiv = styled(Div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterDiv = styled(Div)`
  background: ${InputBackground};
  padding: 15px 0;
  text-align: center;
`;
