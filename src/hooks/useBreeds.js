import { useEffect, useState } from 'react';
import { getAllBreeds } from '../api';

const useBreeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadBreeds = async () => {
    try {
      setIsLoading(true);

      const allBreeds = await getAllBreeds();
      setBreeds(allBreeds);
    } catch (error) {
      setError(error?.message || 'Failed to load breeds');
      console.error('Error loading breeds:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadBreeds();
  }, []);

  return {
    breeds,
    isLoading,
    error,
  };
};

export default useBreeds;
