import { useState } from 'react';
import PropTypes from 'prop-types';
import { getBreedName } from '../../../utils';

const FavImage = ({ favImage, removeFavorite, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const breedName = getBreedName(favImage.url);

  const handleRemove = () => {
    removeFavorite();
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="group cursor-pointer animate-fade-in"
        style={{ animationDelay: `${index * 0.1}s` }}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img
            src={favImage.url}
            alt={favImage.url}
            className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-110 opacity-${
              imageLoaded ? '100' : '0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />

          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
              <div className="bg-white rounded-full p-2 shadow-lg">
                <i className="fas fa-expand text-purple-600"></i>
              </div>
            </div>
          </div>

          {/* <div className="absolute top-2 right-2">
            <div className="bg-pink-500 text-white rounded-full p-1.5 shadow-lg">
              <i className="fas fa-heart text-xs w-3"></i>
            </div>
          </div> */}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[900vh] overflow-hidden animate-slide-up"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="bg-pink-100 rounded-2xl p-2">
                  <i className="fas fa-heart text-pink-500"></i>
                </div>
                {breedName && (
                  <h3 className="font-semibold text-gray-600">{breedName}</h3>
                )}
              </div>
              <button
                className="text-gray-500 hover:text-gray-700 transition-colors p-2"
                aria-label="Cerrar modal"
                onClick={() => setIsModalOpen(false)}
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <div className="p-0">
              <div className="relative bg-gray-100">
                <img
                  src={favImage.url}
                  alt={favImage.id}
                  className="w-full max-h-[60vh] object-contain mx-auto"
                />
              </div>
            </div>
            <div className="flex items-center justify-between p-6 bg-gray-50 border-t border-gray-200">
              <button
                className="btn-secondary"
                onClick={() => setIsModalOpen(false)}
              >
                Cerrar
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center gap-2"
                onClick={handleRemove}
              >
                <i className="fas fa-trash"></i>
                Eliminar favorita
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

FavImage.propTypes = {
  favImage: PropTypes.object,
  removeFavouriteImage: PropTypes.func,
  index: PropTypes.number,
};

export default FavImage;
