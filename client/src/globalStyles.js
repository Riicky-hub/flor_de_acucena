import styled, { createGlobalStyle } from 'styled-components';
import tenorSans from './fonts/Tenor_Sans/TenorSans-Regular.ttf';
import josefinSans from './fonts/Josefin_Sans/JosefinSans-VariableFont_wght.ttf';
import josefinSansItalic from './fonts/Josefin_Sans/JosefinSans-Italic-VariableFont_wght.ttf';
import bodoniModa from './fonts/Bodoni_Moda/static/BodoniModa_18pt/BodoniModa_18pt-SemiBold.ttf';
import bodoniModaItalic from './fonts/Bodoni_Moda/static/BodoniModa_18pt/BodoniModa_18pt-SemiBoldItalic.ttf';
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
    font-family: 'Josefin Sans';
    src: local('JosefinSans-Regular'), url(${josefinSans}) format('TrueType');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Josefin Sans';
    src: local('JosefinSansItalic-Regular'), url(${josefinSansItalic}) format('TrueType');
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: 'Bondoni Moda';
    src: local('BondoniModa-SemiBold'), url(${bodoniModa}) format('TrueType');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Bondoni Moda';
    src: local('BondoniModaItalic-SemiBold'), url(${bodoniModaItalic}) format('TrueType');
    font-weight: 700;
    font-style: italic;
  }
  // GLOBAL STYLES
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Tenor Sans';
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
  @media screen and (max-width: 500px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 400px) {
    padding: 0 15px;
  }
`;

// TEXTS STYLES
const TitleSize = ({ title }) => {
  switch (title) {
    case 'sm':
      return 'clamp(0.875rem, 0.625rem + 1vw, 1.4375rem);';
    case 'md':
      return 'clamp(1rem, 0.7222rem + 1.1111vw, 1.625rem);';
    default:
      return 'clamp(1.125rem, 0.8472rem + 1.1111vw, 1.75rem);';
  }
};
const ParagraphSize = ({ size }) => {
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
};
const fontFamily = ({ roboto }) => (roboto ? 'Roboto' : 'Tenor Sans');

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
  cursor: pointer;
  padding: 12px 33px;
  font-size: clamp(0.875rem, 0.625rem + 1vw, 1.4375rem);
  background: ${({ transparent }) =>
    transparent ? 'transparent' : `${OffBlack}`};
  color: ${({ transparent }) => (transparent ? `${OffBlack}` : `${OffWhite}`)};
  border: ${({ border, config }) => (border ? `border: ${config};` : `none`)};
  display: flex;
  align-items: center;
`;

export default GlobalStyles;
