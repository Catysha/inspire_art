import { Header } from '../../components/Header';
import Art from '../../assets/images/art.png';
import { MainWrapper } from '../styled';
import { SaveStatus } from '../../components/SaveStatus';
import {
  ArtInfoArtist,
  ArtInfoDetails,
  ArtInfoImage,
  ArtInfoImageWrapper,
  ArtInfoOverview,
  ArtInfoOverviewItem,
  ArtInfoOverviewTitle,
  ArtInfoTitle,
  ArtInfoTitleContainer,
  ArtInfoWrapper,
  ArtInfoYear,
  GreyText,
  SaveWrapper,
} from './styled';

interface Props {}

export const SingleArtInfo = (props: Props) => {
  return (
    <>
      <Header />
      <MainWrapper>
        <ArtInfoWrapper>
          <ArtInfoImageWrapper>
            <ArtInfoImage src={Art} alt="art" />
            <SaveWrapper>
              <SaveStatus />
            </SaveWrapper>
          </ArtInfoImageWrapper>
          <ArtInfoDetails>
            <ArtInfoTitleContainer>
              <ArtInfoTitle>Charles V, bust length, holding a sword, facing right</ArtInfoTitle>
              <ArtInfoArtist>Giovanni Britto</ArtInfoArtist>
              <ArtInfoYear>1535–45</ArtInfoYear>
            </ArtInfoTitleContainer>
            <ArtInfoOverview>
              <ArtInfoOverviewTitle></ArtInfoOverviewTitle>
              <ArtInfoOverviewItem>
                <GreyText>Artist nacionality:</GreyText>
                <p>German</p>
              </ArtInfoOverviewItem>
              <ArtInfoOverviewItem>
                <GreyText>Dimensions: Sheet:</GreyText>
                <p>19 3/8 × 13 11/16 in. (49.2 × 34.8 cm)</p>
              </ArtInfoOverviewItem>
              <ArtInfoOverviewItem>
                <GreyText>Credit Line:</GreyText>
                <p>Rogers Fund, 1917</p>
              </ArtInfoOverviewItem>
              <ArtInfoOverviewItem>
                <GreyText>Repository:</GreyText>
                <p>Metropolitan Museum of Art, New York, NY</p>
              </ArtInfoOverviewItem>
            </ArtInfoOverview>
          </ArtInfoDetails>
        </ArtInfoWrapper>
      </MainWrapper>
    </>
  );
};
