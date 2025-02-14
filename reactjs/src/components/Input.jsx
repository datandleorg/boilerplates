import React from "react";

const Input = (props) => {
  const { label, type = "text", placeholder, error, value, onChange } = props;
  return (
    <div className="w-full">
      {label && (
        <label className="block text-gray-700 font-medium mb-2">{label}</label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
          ${error ? "border-red-500" : "border-gray-300"}`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
