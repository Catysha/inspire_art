import styled from 'styled-components';
import { colors } from './../../../constants/colors';

export const ImageWrapper = styled.div``;

export const Img = styled.img``;

export const InfoWrapper = styled.div`
  text-align: start;
  max-width: 100px;
  @media (min-width: 1024px) {
    max-width: 200px;
  }
  width: 200px;
`;

export const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleArt = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 17px;
  font-weight: 500;
`;

export const TitleArtist = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
  font-weight: 400;
  color: ${colors.grey};
`;
