import { Link } from 'react-router-dom';
import { Img, ImagePlaceholder, LargeCardWrapper, DescriptionContainer } from './styled';
import { DescriptionCard } from '../DescriptionCard';

interface LargeCardProps {
  id: number | string;
  imageUrl: string | null;
  title: string;
  artist: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export const LargeCard = ({
                            id,
                            imageUrl,
                            title,
                            artist,
                            isFavorite,
                            onToggleFavorite,
                          }: LargeCardProps) => {
  return (
    <LargeCardWrapper as={Link} to={`/single-art-info/${id}`}>
      {imageUrl ? (
        <Img src={imageUrl} alt={title} />
      ) : (
        <ImagePlaceholder>Без картины</ImagePlaceholder>
      )}
      <DescriptionContainer>
        <DescriptionCard
          title={title}
          artist={artist}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      </DescriptionContainer>
    </LargeCardWrapper>
  );
};