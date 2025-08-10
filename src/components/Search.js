import { useState } from 'react';
import PropTypes from 'prop-types';
import { useAppContext } from '../context/AppContext';
import Select from './Select';
import Spinner from './Spinner';

const Search = () => {
  const [selectedBreed, setSelectedBreed] = useState({});
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    breed: '',
    subBreed: '',
  });

  const { breeds, getRandom, isSearch, setIsSearch, isLoadingBreeds } =
    useAppContext();

  const handleOnSubmit = async e => {
    e.preventDefault();

    const { breed, subBreed } = formData || {};

    const hasSubBreeds = selectedBreed?.subBreeds?.length;

    if (!breed || (hasSubBreeds && !subBreed)) return setIsError(true);

    getRandom(`${breed}${subBreed ? `/${subBreed}` : ''}`);
    setIsError(false);
  };

  const handleSelectBreed = value => {
    setIsSearch(false);
    const breed = breeds.find(breed => breed.label === value);
    setSelectedBreed(breed || {});
    setFormData({
      ...formData,
      breed: breed?.name || '',
      subBreed: '',
    });
    setIsError(false);
  };

  const handleSelectSubBreed = value => {
    setIsSearch(false);
    const subBreed = selectedBreed.subBreeds.find(
      subBreed => subBreed.label === value
    );
    setFormData({
      ...formData,
      subBreed: subBreed?.name || '',
    });
    setIsError(false);
  };

  if (isLoadingBreeds)
    return <Spinner size="sm" message="Cargando razas...." />;

  return (
    <div className="py-8 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center justify-center space-x-2">
            <i className="fas fa-search text-purple-600 mr-2"></i>
            Buscar por raza
          </h3>
          {isError && (
            <div className="alert alert-danger mb-6 mx-auto max-w-md animate-slide-up p-2.5">
              <div className="flex items-center space-x-2 justify-center">
                <i className="fas fa-exclamation-triangle mr-2"></i>
                Seleccion&aacute; una raza/subraza
              </div>
            </div>
          )}
          <form className="space-y-6" onSubmit={handleOnSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div className="space-y-2">
                <Select
                  options={breeds.map(breed => breed.label)}
                  handleSetValue={handleSelectBreed}
                  value={
                    breeds.find(breed => breed?.name === formData?.breed)
                      ?.label || ''
                  }
                />
              </div>
              {selectedBreed?.subBreeds?.length && (
                <div className="space-y-2 animate-slide-up">
                  <Select
                    options={selectedBreed?.subBreeds.map(
                      subBreed => subBreed.label
                    )}
                    handleSetValue={handleSelectSubBreed}
                    value={
                      selectedBreed?.subBreeds.find(
                        subBreed => subBreed?.name === formData?.subBreed
                      )?.label || ''
                    }
                    placeholder="- Seleccionar subraza -"
                  />
                </div>
              )}
              <div className="flex justify-center md:justify-start">
                <button
                  type="submit"
                  className="btn-primary px-8 py-2 flex items-center justify-center space-x-2 min-w-[160px]"
                  disabled={isLoadingBreeds}
                >
                  <i
                    className={`fas fa-${isSearch ? 'random' : 'search'} mr-2 `}
                  ></i>
                  {isSearch
                    ? `Random! por ${selectedBreed.label} ${formData.subBreed}`
                    : 'Buscar'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Search.propTypes = {
  getRandom: PropTypes.func,
  isSearch: PropTypes.bool,
  setIsSearch: PropTypes.func,
};

export default Search;
