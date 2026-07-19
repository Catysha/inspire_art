import { useEffect, useState } from 'react';
import { Artwork } from '../types/types';

const STORAGE_KEY = 'inspire_art_favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Artwork[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (artwork: Artwork) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === artwork.id);

      if (exists) {
        return prev.filter((item) => item.id !== artwork.id);
      }

      return [...prev, artwork];
    });
  };

  const isFavorite = (id: number) => {
    return favorites.some((item) => item.id === id);
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
};
