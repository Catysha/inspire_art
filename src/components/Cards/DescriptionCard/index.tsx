import { CardDetails, InfoWrapper, TitleArt, TitleArtist } from './styled';
import { SaveStatus } from '../../SaveStatus';

interface DescriptionCardProps {
  title: string;
  artist: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export const DescriptionCard = ({
  title,
  artist,
  isFavorite,
  onToggleFavorite,
}: DescriptionCardProps) => {
  return (
    <CardDetails>
      <InfoWrapper>
        <TitleArt>{title}</TitleArt>
        <TitleArtist>{artist || 'Неизвестный автор'}</TitleArtist>
      </InfoWrapper>
      <SaveStatus isFavorite={isFavorite} onToggle={onToggleFavorite} />
    </CardDetails>
  );
};
