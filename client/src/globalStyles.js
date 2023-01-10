import styled, { createGlobalStyle } from 'styled-components';
import {
  RobotoLight,
  RobotoLightItalic,
  RobotoRegular,
  RobotoRegularItalic,
  RobotoMedium,
  RobotoMediumItalic,
} from './fonts/Roboto';
import tenorSans from './fonts/Tenor_Sans/TenorSans-Regular.ttf';
import {
  TitleColor,
  ParagraphColor,
  OffBlack,
  OffWhite,
} from './constants/colors';

const GlobalStyles = createGlobalStyle`
  // FONTS
  @font-face {
    font-family: 'Tenor Sans';
    src: local('TenorSans-Regular'), url(${tenorSans}) format('TrueType');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto-Light'), url(${RobotoLight}) format('TrueType');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto-LightItalic'), url(${RobotoLightItalic}) format('TrueType');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto-Regular'), url(${RobotoRegular}) format('TrueType');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto-RegularItalic'), url(${RobotoRegularItalic}) format('TrueType');
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto-Medium'), url(${RobotoMedium}) format('TrueType');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto-MediumItalic'), url(${RobotoMediumItalic}) format('TrueType');
    font-weight: 500;
    font-style: italic;
  }
  // GLOBAL STYLES
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

// CONTAINER
export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  padding: 0 50px;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

// TEXTS STYLES
const TitleSize = `${({ title }) => {
  switch (title) {
    case 'sm':
      return 'clamp(0.875rem, 0.625rem + 1vw, 1.4375rem);';
    case 'md':
      return 'clamp(1rem, 0.7222rem + 1.1111vw, 1.625rem);';
    default:
      return 'clamp(1.125rem, 0.8472rem + 1.1111vw, 1.75rem);';
  }
}}`;
const ParagraphSize = `${({ size }) => {
  switch (size) {
    case 'sm':
      return 'clamp(0.75rem, 0.5278rem + 0.8889vw, 1.25rem);';
    case 'md':
      return 'clamp(0.875rem, 0.625rem + 1vw, 1.4375rem);';
    case 'bg':
      return 'clamp(1rem, 0.7222rem + 1.1111vw, 1.625rem);';
    default:
      return 'clamp(0.75rem, 0.5278rem + 0.8889vw, 1.25rem);';
  }
}}`;
const fontFamily = `${({ roboto }) => (roboto ? 'Roboto' : 'Tenor Sans')}`;

export const Paragraph = styled.p`
  color: ${ParagraphColor};
  font-family: ${fontFamily};
  font-size: ${ParagraphSize};
  font-style: normal;
  font-weight: 400;
`;
export const Title = styled.h2`
  color: ${TitleColor};
  font-family: ${fontFamily};
  font-size: ${TitleSize};
  font-style: normal;
  font-weight: 400;
`;

// BUTTONS
export const Button = styled.button`
  padding: 12px 33px;
  font-size: clamp(0.875rem, 0.625rem + 1vw, 1.4375rem);
  background: ${({ transparent }) =>
    transparent ? 'transparent' : `${OffBlack}`};
  color: ${({ transparent }) => (transparent ? `${OffBlack}` : `${OffWhite}`)};
  border: ${({ transparent }) =>
    transparent ? `border: 1px solid #DEDEDE;` : `none`};
`;

export default GlobalStyles;
