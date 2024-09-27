import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import './RandomImage.css';
import '../Spinner.css';

const RandomImage = ({
  imageUrl,
  getRandom,
  isLoading,
  breedName,
  like,
  setLike,
  favouriteImages,
  setFavouriteImages,
}) => {
  const addToFavourites = () => {
    const imageToAdd = favouriteImages.find(fav => fav.url === imageUrl);
    setFavouriteImages(
      !imageToAdd
        ? [
            ...favouriteImages,
            {
              id: shortid.generate(),
              url: imageUrl,
            },
          ]
        : favouriteImages.filter(fav => fav.url !== imageUrl)
    );
    setLike(!imageToAdd);
  };

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
                alt={imageUrl}
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
              Random!
            </button>
            <button
              type="button"
              className="btn btn-primary rounded-circle ml-auto"
              onClick={addToFavourites}
            >
              <i className={`fa${like ? 's' : 'r'} fa-heart`}></i>
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
