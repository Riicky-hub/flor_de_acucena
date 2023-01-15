import styled from 'styled-components';
import { Container } from '../../globalStyles';

export const PostContainer = styled(Container)`
  position: relative;
  padding: 0;
  box-shadow: 0px -30px 15px 5px rgba(0,0,0,0.55) inset;
  -webkit-box-shadow: 0px -30px 15px 5px rgba(0,0,0,0.55) inset;
  -moz-box-shadow: 0px -30px 15px 5px rgba(0,0,0,0.55) inset;
  img {
    display: block;
    position: relative;
    z-index: -2;
  }
  p {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: white;
  }
`;
