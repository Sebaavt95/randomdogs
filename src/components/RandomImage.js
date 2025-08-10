import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useAppContext } from '../context/AppContext';
import Spinner from './Spinner';

const RandomImage = () => {
  const {
    imageUrl,
    getRandom,
    isLoading,
    breedName,
    addToFavorites,
    isFavorite,
    error,
  } = useAppContext();

  const isImageFavorite = isFavorite(imageUrl);

  useEffect(() => {
    if (!imageUrl) getRandom();
  }, [getRandom, imageUrl]);

  const handleAddToFavorites = () => {
    if (imageUrl) addToFavorites(imageUrl);
  };

  if (error)
    return (
      <div className="flex justify-center py-8 animate-fade-in">
        <div className="alert alert-danger max-w-md w-full text-center">
          <div className="flex items-center justify-center mb-3">
            <i className="fas fa-exclamation-triangle text-2xl text-red-500"></i>
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Error al cargar la imagen
          </h3>
          <p className="mb-4 text-sm">{error}</p>
          <button className="btn-primary" onClick={() => getRandom()}>
            <i className="fas fa-redo mr-2"></i>
            Reintentar
          </button>
        </div>
      </div>
    );

  return (
    <div className="flex justify-center py-8 animate-fade-in">
      <div className="card w-full max-w-lg">
        <div className="relative aspect-h-3 bg-gray-100">
          {!isLoading ? (
            <div className="flex items-center justify-center h-80">
              <Spinner />
            </div>
          ) : (
            <>
              <img
                src={imageUrl}
                alt={`Random dog ${imageUrl}`}
                className="w-full h-80 object-cover"
                onError={() => getRandom()}
              />
              {breedName && (
                <p className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent py-3">
                  <p className="text-white font-semibold text-lg text-center">
                    {breedName}
                  </p>
                </p>
              )}
            </>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between gap-4">
            <button
              className="btn-primary flex-1 flex items-center justify-center gap-2 py-3"
              onClick={() => getRandom()}
              disabled={isLoading}
            >
              <i className="fas fa-random"></i>
              {isLoading ? 'Loading...' : 'Random!'}
            </button>
            <button
              type="button"
              className={`p-2.5 rounded-2xl transition-all duration-200 ${
                isImageFavorite
                  ? 'bg-pink-500 text-white shadow-lg hover:bg-pink-600'
                  : 'bg-gray-200 text-gray-600 hover:bg-pink-100 hover:text-pink-500'
              }`}
              onClick={handleAddToFavorites}
              disabled={!imageUrl || isLoading}
              aria-label={
                isImageFavorite
                  ? 'Eliminar de favoritos'
                  : 'Agregar a favoritos'
              }
            >
              <i
                className={`fa fa-heart text-lg ${
                  isImageFavorite ? 'animate-pulse' : ''
                } w-6 h-1`}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

RandomImage.propTypes = {
  imageUrl: PropTypes.string,
  getRandom: PropTypes.func,
  isLoading: PropTypes.bool,
  breedName: PropTypes.string,
  like: PropTypes.bool,
  setLike: PropTypes.func,
  favouriteImages: PropTypes.array,
  setFavouriteImages: PropTypes.func,
};

export default RandomImage;
