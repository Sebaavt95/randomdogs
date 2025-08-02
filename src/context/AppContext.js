import { createContext, useContext } from 'react';
import useRandomDog from '../hooks/useRandomDog';
import useBreeds from '../hooks/useBreeds';
import useFavorites from '../hooks/useFavorites';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context)
    throw new Error('useAppContext must be used within an AppContextProvider');

  return context;
};

export const AppProvider = ({ children }) => {
  const randomDog = useRandomDog();
  const breeds = useBreeds();
  const favorites = useFavorites();

  return (
    <AppContext.Provider value={{ ...randomDog, ...breeds, ...favorites }}>
      {children}
    </AppContext.Provider>
  );
};
