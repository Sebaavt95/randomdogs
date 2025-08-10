import { useState } from 'react';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header className="w-full bg-purple-600">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <h1 className="text-2xl md:text-3xl font-bold cursor-default text-white">
              RandomDogs
            </h1>
            <button
              className="flex items-center space-x-2 px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200 text-sm font-medium text-white"
              aria-label="¿Cómo funciona?"
              onClick={openModal}
            >
              <i className="fas fa-question-circle"></i>
            </button>
          </div>
        </div>
      </header>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">
                ¿Cómo funciona RandomDogs?
              </h2>
              <button
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Cerrar modal"
                onClick={closeModal}
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-random text-primary-600 text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">
                      Imágenes aleatorias
                    </h3>
                    <p className="text-gray-600 text-sm">
                      El botón "Random!" trae una imagen aleatoria de un perro.
                      La raza se muestra en la parte inferior de la imagen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-search text-purple-600 text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">
                      Búsqueda por raza
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Usá el buscador para filtrar por raza específica. Algunas
                      razas tienen subrazas que debes seleccionar para completar
                      la búsqueda.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-heart text-pink-600 text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">
                      Favoritos
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Con el botón ♥ podés guardar imágenes en favoritos y
                      verlas cuando quieras.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-film text-gray-600 text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">
                      Galería de favoritos
                    </h3>
                    <p className="text-gray-600 text-sm">
                      En la sección de favoritos podés ver las imágenes
                      guardadas en tamaño completo y eliminarlas si deseás.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-center text-sm text-gray-500">
                  Este sitio utiliza la API de{' '}
                  <a
                    href="https://dog.ceo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Dog CEO
                  </a>
                </p>
              </div>
            </div>

            <div className="flex justify-end p-6 bg-gray-50 border-t border-gray-200">
              <button className="btn-primary" onClick={closeModal}>
                ¡Listo!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
