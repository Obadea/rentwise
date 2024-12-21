import React, { useState } from "react";
import Select from "react-select";

const ReusableSelect = ({
  options,
  label,
  isSearchable = false,
  placeholder,
  onChange,
  className,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
    onChange(option.value);
  };

  return (
    <div className={`${className} relative`}>
      <label htmlFor={label}>{label}</label>
      <Select
        className={`${className} relative w-52 `}
        styles={{
          menu: (provided) => ({
            ...provided,
            zIndex: 99, // Set a high z-index
          }),
        }}
        placeholder={placeholder}
        options={options}
        isSearchable={isSearchable}
        value={selectedOption}
        onChange={handleChange}
        menuPortalTarget={document.body}
      />
    </div>
  );
};

export default ReusableSelect;
