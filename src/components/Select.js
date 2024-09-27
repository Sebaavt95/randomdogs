import React, { useState } from 'react';

const Select = ({ options, handleSetValue }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = e => {
    const value = e.target.value;
    setSelectedOption(value);
    handleSetValue(value);
  };

  return (
    <div className="col-sm-12 col-md-3 mb-2">
      <select
        className="custom-select"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="">- Seleccionar Raza -</option>
        {options.map((option, idx) => (
          <option key={`${option}-${idx.toString()}`} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
