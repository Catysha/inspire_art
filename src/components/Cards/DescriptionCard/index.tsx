import { CardDetails, InfoWrapper, TitleArt, TitleArtist } from './styled';
import { SaveStatus } from '../../SaveStatus';
export const DescriptionCard = () => {
  return (
    <>
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
