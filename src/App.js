import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import RandomImage from './components/RandomImage';
import Search from './components/Search';
import FavList from './components/FavList';
import { getRandomByBreed, getRandomImage } from './api';
import { getBreedName } from './utils';
import './App.css';

const App = () => {
  let initialFavouriteImages = JSON.parse(
    localStorage.getItem('favouritesDogs')
  );
  if (!initialFavouriteImages) initialFavouriteImages = [];

  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [breedName, setBreedName] = useState('');
  const [like, setLike] = useState(false);
  const [favouriteImages, setFavouriteImages] = useState(
    initialFavouriteImages
  );
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      'favouritesDogs',
      JSON.stringify(initialFavouriteImages ? favouriteImages : [])
    );
  }, [initialFavouriteImages, favouriteImages]);

  const getRandom = async (finalBreed = '') => {
    setIsLoading(true);
    try {
      const randomImageUrl = !finalBreed
        ? await getRandomImage()
        : await getRandomByBreed(finalBreed);
      setImageUrl(randomImageUrl);
      setBreedName(!finalBreed ? getBreedName(randomImageUrl) : '');
      setIsSearch(!!finalBreed);
      setIsLoading(false);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getRandom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!imageUrl) return;
    favouriteImages.forEach(fav => setLike(fav.url === imageUrl));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageUrl]);

  const removeFavouriteImage = id => {
    const remainingFavourites = favouriteImages.filter(fav => fav.id !== id);
    setFavouriteImages(remainingFavourites);
    setLike(false);
  };

  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <RandomImage
          imageUrl={imageUrl}
          getRandom={getRandom}
          isLoading={isLoading}
          breedName={breedName}
          like={like}
          setLike={setLike}
          favouriteImages={favouriteImages}
          setFavouriteImages={setFavouriteImages}
        />
        <Search
          getRandom={getRandom}
          isSearch={isSearch}
          setIsSearch={setIsSearch}
        />
        <FavList
          favouriteImagesList={favouriteImages}
          removeFavouriteImage={removeFavouriteImage}
        />
        <div className="row mt-4 d-flex justify-content-center">
          <p className="text-muted m-0">
            &copy; Desarrollado por Sebaavt95 - {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
