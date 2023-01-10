import styled from 'styled-components';

export const Nav = styled.nav`
  background: transparent;
  padding: 20px 0;
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
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  cursor: pointer;
  margin-right: ${({ mr }) => (mr ? mr : 0)};
  margin-left: ${({ ml }) => (ml ? ml : 0)};
`;
