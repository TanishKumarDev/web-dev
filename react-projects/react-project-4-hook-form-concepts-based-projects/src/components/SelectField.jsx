// src/components/SelectField.jsx
import React from "react";

const SelectField = ({ label, name, options, register, errors, rules }) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium mb-1">{label}</label>
      <select
        {...register(name, rules)}
        className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default SelectField;
