import { useEffect, useState } from 'react';
import { getArtworks } from '../api/artic';
import { Artwork } from '../types/types';

interface UseArtworksResult {
  artworks: Artwork[];
  totalPages: number;
  isLoading: boolean;
  error: string | null;
}

export const useArtworks = (page: number, query: string): UseArtworksResult => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    const loadArtworks = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const res = await getArtworks(page, query);

        if (ignore) return;

        setArtworks(res.data);

        setTotalPages(res.info.pages ?? Math.ceil(res.info.total / 3));
      } catch (err) {
        if (!ignore) {
          setError((err as Error).message);
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    };

    loadArtworks();

    return () => {
      ignore = true;
    };
  }, [page, query]);

  return {
    artworks,
    totalPages,
    isLoading,
    error,
  };
};
