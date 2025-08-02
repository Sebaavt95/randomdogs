import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useAppContext } from '../context/AppContext';
import './RandomImage.css';
import '../Spinner.css';

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

  console.log({ isImageFavorite });

  useEffect(() => {
    if (!imageUrl) getRandom();
  }, [getRandom, imageUrl]);

  const handleAddToFavorites = () => {
    if (imageUrl) addToFavorites(imageUrl);
  };

  if (error)
    return (
      <div className="row">
        <div className="col-sm-12 d-flex justify-content-center">
          <div className="mb-3 mt-3">
            <div className="d-flex flex-column align-items-center alert alert-danger">
              <h5>Error loading image</h5>
              <p>{error}</p>
              <button className="btn btn-primary" onClick={() => getRandom()}>
                Try again
              </button>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="row">
      <div className="col-sm-12 d-flex justify-content-center align-items-center">
        <div className="card mb-3 mt-3">
          {isLoading ? (
            <div className="d-flex justify-content-center h-100">
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
          ) : (
            <div className="card-body d-flex justify-content-center align-items-center p-0">
              <img
                src={imageUrl}
                alt={`Random dog ${imageUrl}`}
                className="w-100 h-100 img-fluid rounded mx-auto d-block"
              />
              {breedName && (
                <p className="m-0 lead position-absolute text-center w-100 text-white">
                  {breedName}
                </p>
              )}
            </div>
          )}
          <div className="d-flex justify-content-center align-items-center p-3">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => getRandom()}
            >
              {isLoading ? 'Loading...' : 'Random!'}
            </button>
            <button
              type="button"
              className="btn btn-primary rounded-circle ml-auto"
              onClick={handleAddToFavorites}
              disabled={!imageUrl || isLoading}
            >
              <i className={`fa${isImageFavorite ? 's' : 'r'} fa-heart`}></i>
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
