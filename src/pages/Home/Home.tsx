import { useState } from 'react';

import { Header } from '../../components/Header';

import { CardsGrid, ContentWrapper, FeedbackText, LoaderWrapper, MainWrapper } from '../styled';

import { SearchInput } from '../../components/SearchInput';
import { LargeCard } from '../../components/Cards/LargeCard';
import { Pagination } from '../../components/Pagination';
import { SmallCardsList } from '../../components/SmallCardsList';

import { useArtworks } from '../../hooks/useArtworks';
import { useSmallArtworks } from '../../hooks/useSmallCards';
import { useFavorites } from '../../hooks/useFavorites';

export const Home = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const { artworks, totalPages, isLoading, error } = useArtworks(page, query);

  const { artworks: smallArtworks } = useSmallArtworks();

  const { isFavorite, toggleFavorite } = useFavorites();

  const handleSearch = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  const handleChangePage = (nextPage: number) => {
    setPage(nextPage);
  };

  return (
    <>
      <Header />

      <MainWrapper>
        <SearchInput value={query} onSearch={handleSearch} />

        <ContentWrapper>
          {!error && artworks.length > 0 && (
            <CardsGrid>
              {artworks.map((artwork) => (
                <LargeCard
                  key={artwork.id}
                  id={artwork.id}
                  imageUrl={artwork.images?.web?.url ?? null}
                  title={artwork.title}
                  artist={artwork.creators?.[0]?.description ?? ''}
                  isFavorite={isFavorite(artwork.id)}
                  onToggleFavorite={() => toggleFavorite(artwork)}
                />
              ))}
            </CardsGrid>
          )}

          {isLoading && (
            <LoaderWrapper>
              <FeedbackText>Загрузка...</FeedbackText>
            </LoaderWrapper>
          )}

          {!isLoading && error && <FeedbackText>Ошибка: {error}</FeedbackText>}

          {!isLoading && !error && artworks.length === 0 && (
            <FeedbackText>По запросу «{query}» ничего не найдено</FeedbackText>
          )}
      </ContentWrapper>

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          handleChangePage={handleChangePage}
        />

        <SmallCardsList
          artworks={smallArtworks}
          isFavorite={isFavorite}
          onToggleFavorite={toggleFavorite}
        />
      </MainWrapper>
    </>
  );
};
