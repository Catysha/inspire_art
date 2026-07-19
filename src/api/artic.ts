import { Artwork, ClevelandResponse } from '../types/types';

const BASE_URL = 'https://openaccess-api.clevelandart.org/api';

export const getArtworks = async (page = 1, query = ''): Promise<ClevelandResponse> => {
  const params = new URLSearchParams({
    limit: '3',
    skip: String((page - 1) * 3),
  });

  if (query.trim()) {
    params.append('q', query);
  }

  const response = await fetch(`${BASE_URL}/artworks/?${params.toString()}`);

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
};

export const getSmallArtworks = async (): Promise<ClevelandResponse> => {
  const response = await fetch(`${BASE_URL}/artworks/?limit=9&skip=30`);

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
};

export const getArtworkById = async (id: string): Promise<{ data: Artwork }> => {
  const response = await fetch(`${BASE_URL}/artworks/${id}/`);

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
};

export const getImageUrl = (artwork: Artwork): string => {
  return artwork.images?.web?.url ?? 'https://via.placeholder.com/400x600?text=No+Image';
};
