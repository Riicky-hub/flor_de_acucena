import styled from 'styled-components';
import { Container } from '../../../globalStyles';
import { Link } from 'react-router-dom';
import { Label } from '../../../constants/colors';

export const MenuContainer = styled(Container)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 5;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LinksContainer = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MenuLink = styled(Link)`
  padding: 10px 0;
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
`;

export const ContactContainer = styled.div`
  color: ${Label};
  padding: 15px 0;
`;

export const ContactItem = styled.h4`
  display: flex;
  align-items: center;
  font-weight: 100;
  padding: 10px 0;
`;

export const SocialContainer = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
`;

export const SocialMedia = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
