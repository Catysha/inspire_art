import { Link } from 'react-router-dom';
import { Img, ImagePlaceholder, LargeCardWrapper, DescriptionContainer, ImgIcon } from './styled';
import { DescriptionCard } from '../DescriptionCard';
import museumLogo from './../../../assets/icons/museum.svg';

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
        <ImagePlaceholder>
          <ImgIcon src={museumLogo} alt="Museum" />
        </ImagePlaceholder>
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
