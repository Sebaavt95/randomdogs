const Select = ({
  options,
  handleSetValue,
  value = '',
  placeholder = '- Seleccionar Raza -',
}) => {
  const handleChange = e => {
    handleSetValue(e.target.value);
  };

  return (
    <div className="col-sm-12 col-md-3 mb-2">
      <select className="custom-select" value={value} onChange={handleChange}>
        <option value="">{placeholder}</option>
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
