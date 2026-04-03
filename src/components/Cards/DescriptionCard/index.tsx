import { CardDetails, ImageWrapper, Img, InfoWrapper, TitleArt, TitleArtist } from './styled';
import Art from './../../../assets/images/art.png';
import { SaveStatus } from '../../SaveStatus';
export const DescriptionCard = () => {
  return (
    <>
      <ImageWrapper>
        <Img src={Art} alt="Art" />
      </ImageWrapper>
      <CardDetails>
        <InfoWrapper>
          <TitleArt>Charles V, bust length, holding a sword, facing right</TitleArt>
          <TitleArtist>Giovanni Britto</TitleArtist>
        </InfoWrapper>
        <SaveStatus />
      </CardDetails>
    </>
  );
};
