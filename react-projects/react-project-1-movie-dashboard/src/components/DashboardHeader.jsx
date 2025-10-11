import React from "react";

const DashboardHeader = ({ onAdd }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-gray-800">Movie Dashboard</h1>
      <button
        onClick={onAdd}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Movie
      </button>
    </div>
  );
};

export default DashboardHeader;
