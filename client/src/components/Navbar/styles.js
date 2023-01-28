import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled(Container)`
  background: ${({ bg }) => (bg ? bg : 'transparent')};
  @media only screen and (min-width: 930px) {
    position: absolute;
    top: 0;
    z-index: 2;
    background: rgb(0,0,0);
    background: -moz-linear-gradient(180deg, rgba(0,0,0,0.5494572829131652) 55%, rgba(0,0,0,0.01724439775910369) 100%);
    background: -webkit-linear-gradient(180deg, rgba(0,0,0,0.5494572829131652) 55%, rgba(0,0,0,0.01724439775910369) 100%);
    background: linear-gradient(180deg, rgba(0,0,0,0.5494572829131652) 55%, rgba(0,0,0,0.01724439775910369) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
  }
`;

export const Nav = styled.nav`
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  padding: 0 6px 0 16px;
  h1 {
    font-size: 1.7rem;
  }
  p {
    font-size: 1rem;
    font-family: 'Josefin Sans';
    font-style: italic;
    span {
      letter-spacing: -2px;
    }
  }
  @media only screen and (min-width: 930px) {
    color: white;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: black;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
  @media only screen and (min-width: 930px) {
    color: white;
  }
  @media only screen and (min-width: 1275px) {
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Links = styled.div`
  display: flex;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-top: 2px solid #E3E3E3;
`;
