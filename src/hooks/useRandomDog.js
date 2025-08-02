import { useState, useCallback } from 'react';
import { getRandomImage, getRandomByBreed } from '../api';
import { getBreedName } from '../utils';

const useRandomDog = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [breedName, setBreedName] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [error, setError] = useState(null);

  const getRandom = useCallback(async (fullBreed = '') => {
    setIsLoading(true);
    setError(null);

    try {
      const randomImageUrl = !fullBreed
        ? await getRandomImage()
        : await getRandomByBreed(fullBreed);

      setImageUrl(randomImageUrl);
      setBreedName(!fullBreed ? getBreedName(randomImageUrl) : '');
      setIsSearch(!!fullBreed);
    } catch (error) {
      setError(error?.message || 'Failed to fetch image');
      console.error('Error fetching random image:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    imageUrl,
    isLoading,
    breedName,
    isSearch,
    setIsSearch,
    error,
    getRandom,
  };
};

export default useRandomDog;
