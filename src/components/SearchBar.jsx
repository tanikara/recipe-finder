import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-6">
      <input
        type="text"
        placeholder="Αναζήτηση συνταγών..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-1/2 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition"
      >
        🔍
      </button>
    </form>
  );
};

export default SearchBar;
