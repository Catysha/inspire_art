import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Header } from '../../components/Header';
import Art from '../../assets/images/art.png';

import { FeedbackText, MainWrapper } from '../styled';

import { SaveStatus } from '../../components/SaveStatus';

import { getArtworkById, getImageUrl } from '../../api/artic';

import { useFavorites } from '../../hooks/useFavorites';

import { Artwork } from '../../types/types';

import {
  ArtInfoArtist,
  ArtInfoDetails,
  ArtInfoImage,
  ArtInfoImageWrapper,
  ArtInfoOverview,
  ArtInfoOverviewItem,
  ArtInfoOverviewTitle,
  ArtInfoTitle,
  ArtInfoTitleContainer,
  ArtInfoWrapper,
  ArtInfoYear,
  GreyText,
  SaveWrapper,
} from './styled';

export const SingleArtInfo = () => {
  const { id } = useParams<{ id: string }>();

  const { isFavorite, toggleFavorite } = useFavorites();

  const [artwork, setArtwork] = useState<Artwork | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    getArtworkById(id)
      .then((res) => {
        setArtwork(res.data);
      })

      .catch((err: Error) => {
        setError(err.message);
      })

      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <>
        <Header />

        <MainWrapper>
          <FeedbackText>Загрузка...</FeedbackText>
        </MainWrapper>
      </>
    );
  }

  if (error || !artwork) {
    return (
      <>
        <Header />

        <MainWrapper>
          <FeedbackText>Не удалось загрузить произведение</FeedbackText>
        </MainWrapper>
      </>
    );
  }

  const artist = artwork.creators?.[0]?.description ?? 'Неизвестный автор';

  return (
    <>
      <Header />

      <MainWrapper>
        <ArtInfoWrapper>
          <ArtInfoImageWrapper>
            <ArtInfoImage
              src={getImageUrl(artwork)}
              alt={artwork.title}
              onError={(e) => (e.currentTarget.src = Art)}
            />

            <SaveWrapper>
              <SaveStatus
                isFavorite={isFavorite(artwork.id)}
                onToggle={() => toggleFavorite(artwork)}
              />
            </SaveWrapper>
          </ArtInfoImageWrapper>

          <ArtInfoDetails>
            <ArtInfoTitleContainer>
              <ArtInfoTitle>{artwork.title}</ArtInfoTitle>

              <ArtInfoArtist>{artist}</ArtInfoArtist>

              <ArtInfoYear>{artwork.creation_date ?? '—'}</ArtInfoYear>
            </ArtInfoTitleContainer>

            <ArtInfoOverview>
              <ArtInfoOverviewTitle />

              <ArtInfoOverviewItem>
                <GreyText>Culture:</GreyText>

                <p>{artwork.culture ?? '—'}</p>
              </ArtInfoOverviewItem>

              <ArtInfoOverviewItem>
                <GreyText>Technique:</GreyText>

                <p>{artwork.technique ?? '—'}</p>
              </ArtInfoOverviewItem>

              <ArtInfoOverviewItem>
                <GreyText>Type:</GreyText>

                <p>{artwork.type ?? '—'}</p>
              </ArtInfoOverviewItem>

              <ArtInfoOverviewItem>
                <GreyText>Department:</GreyText>

                <p>{artwork.department ?? '—'}</p>
              </ArtInfoOverviewItem>
            </ArtInfoOverview>
          </ArtInfoDetails>
        </ArtInfoWrapper>
      </MainWrapper>
    </>
  );
};
