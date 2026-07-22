import { Link } from 'react-router-dom';
import { Img, ImagePlaceholder, SmallCardWrapper } from './styled';
import { DescriptionCard } from '../DescriptionCard';
import museumLogo from '../../../assets/icons/museum.svg';
import { ImgIcon } from './styled';
import { useState } from 'react';

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
  const [hasError, setHasError] = useState(false);
  return (
    <SmallCardWrapper as={Link} to={`/single-art-info/${id}`}>
      {imageUrl && !hasError ? (
        <Img src={imageUrl} alt={title} onError={() => setHasError(true)} />
      ) : (
        <ImagePlaceholder>
          <ImgIcon src={museumLogo} alt="Museum" />
        </ImagePlaceholder>
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
