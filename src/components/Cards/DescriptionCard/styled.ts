import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoWrapper = styled.div`
  max-width: 100px;
  min-width: 0;
  margin-right: 17px;
  @media (min-width: 1024px) {
    max-width: 200px;
  }
`;

export const TitleArt = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 17px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: -0.03em;
`;

export const TitleArtist = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
  color: ${colors.grey};
  line-height: 26px;
`;
