"use client";

import React from "react";

interface SearchProps {
  searchQuery: string;
  setSearchQuery: (e: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchQuery, setSearchQuery }) => {
  const handleSearchClick = () => {
    const input = document.getElementById("search-input");
    if (input) {
      input.focus();
    }
  };

  return (
    <div className="w-[120px] sm:w-[295px] h-[35px] sm:h-[40px] relative">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        className="w-full text-[17px] font-[600] p-2 border border-gray-300 rounded-md absolute h-full bg-white outline-none"
        id="search-input"
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <button
        onClick={handleSearchClick}
        className="absolute right-1 sm:right-3 top-1 sm:top-2 text-gray-300 cursor-text z-10 flex items-center justify-center"
      >
        <img
          src="/icon/search.png"
          alt="CyberCraft-Bangladesh-Search-Icon"
          className="w-[24px] h-[24px] "
        />
      </button>
    </div>
  );
};

export default Search;
