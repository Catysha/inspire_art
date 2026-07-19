import { useEffect, useState } from 'react';

import { Artwork } from '../types/types';
import { getSmallArtworks } from '../api/artic';

export const useSmallArtworks = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      try {
        setIsLoading(true);

        const res = await getSmallArtworks();

        if (!ignore) {
          setArtworks(res.data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err instanceof Error ? err.message : 'Ошибка загрузки');
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, []);

  return {
    artworks,
    isLoading,
    error,
  };
};
