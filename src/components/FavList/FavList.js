import React from 'react';
import FavImage from './components/FavImage';

const FavList = ({ favouriteImagesList, removeFavouriteImage }) => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <h3>Im&aacute;genes favoritas</h3>
        {!favouriteImagesList.length ? (
          <div className="alert alert-dismissible alert-secondary text-center p-0 py-2 m-0">
            <h6 className="m-0">No hay favoritas</h6>
          </div>
        ) : (
          <div className="row px-2">
            {favouriteImagesList.map(favImage => (
              <FavImage
                key={favImage.id}
                favImage={favImage}
                removeFavouriteImage={() => removeFavouriteImage(favImage.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavList;
