import styled from 'styled-components';
import { Title } from '../../globalStyles';

export const CollectionContainer = styled.div`
  position: relative;
`;

export const ImageModel = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const TextsContainer = styled.div`
  text-align: center;
`;

export const TextNumber = styled(Title)`
  font-family: 'Bodoni Moda';
  font-weight: 700;
  font-style: italic;
  color: rgba(0, 0, 0, 0.4);
  font-size: 11.5rem;
  text-align: center;
  position: absolute;
  letter-spacing: -40px;
  bottom: -45px;
  right: 60px;
`;

export const TextTitle = styled(Title)`
  position: absolute;
  font-family: 'Bodoni Moda';
  font-weight: 700;
  font-style: italic;
  color: white;
  font-size: 2.4rem;
  line-height: 2.4rem;
  bottom: 85px;
  right: 22px;
`;

export const TextSubtitle = styled(Title)`
  position: absolute;
  color: white;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-size: 1rem;
  bottom: 67px;
  right: 14px;
`;
