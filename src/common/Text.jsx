import React from "react";

const Text = ({ item, edit, onChange }) => {
  const value = edit !== null ? edit[item.name] : item.value;

  const handleInputChange = (e) => {
    // Call the onChange function passed from the parent component
    // Pass the updated value and the item object back to the parent
    onChange(e.target.value, item);
  };

  return (
    <div className="mb-3">
      <label htmlFor={item.name} className="form-label">
        {item.name}:
      </label>
      <input
        autoComplete="off"
        type={item.type}
        value={value}
        id={item.name}
        placeholder={item.placeholder}
        name={item.name}
        onChange={handleInputChange}
      />
      {item.error && <span style={{ color: "red" }}>{item.errorMessage}</span>}
    </div>
  );
};

export default Text;
