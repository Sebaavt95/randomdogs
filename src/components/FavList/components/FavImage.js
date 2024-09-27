import React from 'react';
import PropTypes from 'prop-types';
import { getBreedName, removeNumbers } from '../../../utils';
import './styles.css';

const ImagenFav = ({ favImage, removeFavouriteImage }) => {
  const name = getBreedName(favImage.url);
  const idName = removeNumbers(favImage.id);

  return (
    <div className="m-1 p-1 img-fluid rounded d-flex flex-column align-items-center">
      <img
        src={favImage.url}
        alt={favImage.url}
        className="small-image"
        data-target={`#${idName}`}
        data-toggle="modal"
      />
      <div
        className="modal fade"
        id={idName}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="favImageModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <img src={favImage.url} alt={favImage.id} />
            </div>
            <div className="modal-footer d-flex justify-content-around">
              <h5>{name}</h5>
              <button
                type="button"
                className="alert alert-secondary px-2 py-1 m-0"
                data-dismiss="modal"
                onClick={removeFavouriteImage}
              >
                Eliminar favorita
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ImagenFav.propTypes = {
  favImage: PropTypes.object,
  removeFavouriteImage: PropTypes.func,
};

export default ImagenFav;
