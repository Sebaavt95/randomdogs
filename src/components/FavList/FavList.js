import { useAppContext } from '../../context/AppContext';
import FavImage from './components/FavImage';

const FavList = () => {
  const { favorites, removeFavorite } = useAppContext();

  return (
    <div className="py-12 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
            <i className="fas fa-heart text-pink-500"></i>
            Im&aacute;genes favoritas
          </h2>
        </div>
        {!favorites.length ? (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="bg-gray-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heart text-3xl text-gray-300"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Sin imágenes guardadas
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Cuando encuentres una imagen que te guste, hacé clic en el
                <i className="fas fa-heart text-purple-600"></i> para agregarla
                acá.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {favorites.map((favImage, idx) => (
              <FavImage
                key={favImage.id}
                favImage={favImage}
                removeFavorite={() => removeFavorite(favImage.id)}
                index={idx}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavList;
