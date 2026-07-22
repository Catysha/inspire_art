import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const ArtInfoWrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 60px;
  padding: 40px 0;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const ArtInfoImageWrapper = styled.div`
  position: relative;
  flex: 0 0 450px;

  @media (max-width: 900px) {
    flex: 1 1 auto;
    width: 100%;
  }
`;

export const ArtInfoImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

export const SaveWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
`;

export const ArtInfoDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ArtInfoTitleContainer = styled.div`
  margin-bottom: 80px;
`;

export const ArtInfoTitle = styled.h1`
  font-size: 32px;
  line-height: 1.2;
  font-weight: 400;
  margin: 0 0 24px 0;
`;

export const ArtInfoArtist = styled.div`
  font-size: 24px;
  color: ${colors.grey};
  margin-bottom: 8px;
`;

export const ArtInfoYear = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const ArtInfoOverviewTitle = styled.h2`
  font-size: 28px;
  font-weight: 500;

  &::after {
    content: 'Overview';
  }
`;

export const ArtInfoOverview = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  gap: 16px;
`;

export const ArtInfoOverviewItem = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 14px;
  p {
    margin: 0;
  }
`;

export const GreyText = styled.span`
  color: ${colors.grey};
  margin-right: 8px;
`;

export const ArtInfoPlaceholder = styled.div`
  width: 100%;
  min-height: 600px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${colors.lightGrey};
  border-radius: 8px;
`;

export const ImgIcon = styled.img`
  width: 200px;
  height: 200px;
`;
