import { Header } from '../../components/Header';

import { FeedbackText, MainWrapper, Title } from '../styled';

import { SmallCardsList } from '../../components/SmallCardsList';

import { useFavorites } from '../../hooks/useFavorites';

export const Favorites = () => {
  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  return (
    <>
      <Header />

      <MainWrapper>
        <Title>Favorites</Title>

        {favorites.length === 0 && <FeedbackText>Пока нет избранных работ</FeedbackText>}

        {favorites.length > 0 && (
          <SmallCardsList
            artworks={favorites}
            isFavorite={isFavorite}
            onToggleFavorite={toggleFavorite}
          />
        )}
      </MainWrapper>
    </>
  );
};
