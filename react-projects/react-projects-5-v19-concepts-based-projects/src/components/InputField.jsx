// src/components/InputField.jsx
import React from "react";

const InputField = ({ label, type = "text", register, name, errors, rules }) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium mb-1">{label}</label>
      <input
        type={type}
        {...register(name, rules)}
        className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default InputField;
