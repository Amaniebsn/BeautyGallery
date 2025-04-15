// SearchBar.js
import React from 'react';

function SearchBar({ searchTerm, handleSearch }) {
  return (
    // Container for the search bar
    <div className="search-bar">
      {/* Input field for the search term */}
      <input
        type="text"  // Text input for searching
        placeholder="Skincare..."  // Placeholder text to show what can be searched
        value={searchTerm}  // The value of the input field is controlled by the searchTerm state
        onChange={handleSearch}  // When the value in the input changes, the handleSearch function is called
      />
      {/* Search button (optional functionality can be added) */}
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
