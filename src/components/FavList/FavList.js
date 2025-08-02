import { useAppContext } from '../../context/AppContext';
import FavImage from './components/FavImage';

const FavList = () => {
  const { favorites, removeFavorite } = useAppContext();

  return (
    <div className="row">
      <div className="col-sm-12">
        <h3>Im&aacute;genes favoritas</h3>
        {!favorites.length ? (
          <div className="alert alert-dismissible alert-secondary text-center p-0 py-2 m-0">
            <h6 className="m-0">No hay favoritas</h6>
          </div>
        ) : (
          <div className="row px-2">
            {favorites.map(favImage => (
              <FavImage
                key={favImage.id}
                favImage={favImage}
                removeFavorite={() => removeFavorite(favImage.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavList;
