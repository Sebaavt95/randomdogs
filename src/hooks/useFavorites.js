import { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FAVORITES_STORAGE_KEY = 'favoritesDogs';

const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = useCallback(imageUrl => {
    setFavorites(prevFavorites => {
      const existingFavorite = prevFavorites.find(
        favorite => favorite?.url === imageUrl
      );
      if (existingFavorite)
        return prevFavorites.filter(favorite => favorite?.url !== imageUrl);

      return [...prevFavorites, { id: uuidv4(), url: imageUrl }];
    });
  }, []);

  const removeFavorite = useCallback(id => {
    setFavorites(prevFavorites =>
      prevFavorites.filter(favorite => favorite?.id !== id)
    );
  }, []);

  const isFavorite = useCallback(
    imageUrl => favorites.some(favorite => favorite?.url === imageUrl),
    [favorites]
  );

  return {
    favorites,
    addToFavorites,
    removeFavorite,
    isFavorite,
  };
};

export default useFavorites;
