import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import { getAllBreeds } from '../api';

const Search = ({ getRandom, isSearch, setIsSearch }) => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState({});
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    breed: '',
    subBreed: '',
  });

  const loadBreeds = async () => {
    const allBreeds = await getAllBreeds();
    setBreeds(allBreeds);
  };

  useEffect(() => {
    loadBreeds();
  }, []);

  const handleOnSubmit = async e => {
    e.preventDefault();

    const { breed, subBreed } = formData || {};

    const hasSubBreeds = selectedBreed?.subBreeds?.length;

    if (!breed || (hasSubBreeds && !subBreed)) {
      setIsError(true);
      return;
    }

    const finalBreed = `${breed}${subBreed ? `/${subBreed}` : ''}`;
    getRandom(finalBreed);
    setIsError(false);
  };

  const handleSelectBreed = value => {
    setIsSearch(false);
    const breed = breeds.find(breed => breed.label === value);
    setSelectedBreed(breed);
    setFormData({
      ...formData,
      breed: breed.name,
    });
  };

  const handleSelectSubBreed = value => {
    setIsSearch(false);
    const subBreed = selectedBreed.subBreeds.find(
      subBreed => subBreed.label === value
    );
    setFormData({
      ...formData,
      subBreed: subBreed.name,
    });
  };

  return (
    <div className="row mb-4">
      <div className="col-sm-12">
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-12">
            <h3>Buscar por raza</h3>
            {isError && (
              <p className="alert alert-dismissible alert-danger m-0 mb-1 py-1 text-center">
                Seleccion&aacute; una raza/subraza
              </p>
            )}
            <div className="mb-2">
              <form onSubmit={handleOnSubmit}>
                <div className="form-row">
                  <Select
                    options={breeds.map(breed => breed.label)}
                    handleSetValue={handleSelectBreed}
                  />
                  {selectedBreed?.subBreeds?.length && (
                    <Select
                      options={selectedBreed?.subBreeds.map(
                        subBreed => subBreed.label
                      )}
                      handleSetValue={handleSelectSubBreed}
                    />
                  )}
                  <div className="col-sm-12 col-md-3 text-center">
                    <button
                      type="submit"
                      className="btn btn-primary float-md-left"
                    >
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
      </div>
    </div>
  );
};

Search.propTypes = {
  getRandom: PropTypes.func,
  isSearch: PropTypes.bool,
};

export default Search;
