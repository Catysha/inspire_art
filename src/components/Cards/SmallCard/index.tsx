import { Link } from 'react-router-dom';
import { Img, ImagePlaceholder, SmallCardWrapper } from './styled';
import { DescriptionCard } from '../DescriptionCard';

interface SmallCardProps {
  id: number | string;
  imageUrl: string | null;
  title: string;
  artist: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export const SmallCard = ({
                            id,
                            imageUrl,
                            title,
                            artist,
                            isFavorite,
                            onToggleFavorite,
                          }: SmallCardProps) => {
  return (
    <SmallCardWrapper as={Link} to={`/single-art-info/${id}`}>
      {imageUrl ? (
        <Img src={imageUrl} alt={title} />
      ) : (
        <ImagePlaceholder>Без картины</ImagePlaceholder>
      )}
      <DescriptionCard
        title={title}
        artist={artist}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </SmallCardWrapper>
  );
};