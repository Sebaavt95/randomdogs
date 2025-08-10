const Select = ({
  options,
  handleSetValue,
  value = '',
  placeholder = '- Seleccionar Raza -',
  disabled = false,
}) => {
  const handleChange = e => handleSetValue(e.target.value);

  return (
    <div className="relative">
      <select
        className={`w-full bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-800 font-medium appearance-none cursor-pointer`}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      >
        <option value="" className="text-gray-500">
          {placeholder}
        </option>
        {options.map((option, idx) => (
          <option
            key={`${option}-${idx.toString()}`}
            value={option}
            className="text-gray-500"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
