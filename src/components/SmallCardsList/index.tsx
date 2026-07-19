import { SmallCard } from '../Cards/SmallCard';
import { Grid } from './styled';
import { getImageUrl } from '../../api/artic';
import { Artwork } from '../../types/types';

interface SmallCardsListProps {
  artworks: Artwork[];
  isFavorite: (id: number) => boolean;
  onToggleFavorite: (artwork: Artwork) => void;
}

export const SmallCardsList = ({ artworks, isFavorite, onToggleFavorite }: SmallCardsListProps) => {
  if (artworks.length === 0) return null;

  return (
    <Grid>
      {artworks.map((artwork) => (
        <SmallCard
          key={artwork.id}
          id={artwork.id}
          imageUrl={getImageUrl(artwork)}
          title={artwork.title}
          artist={artwork.creators?.[0]?.description ?? ''}
          isFavorite={isFavorite(artwork.id)}
          onToggleFavorite={() => onToggleFavorite(artwork)}
        />
      ))}
    </Grid>
  );
};
