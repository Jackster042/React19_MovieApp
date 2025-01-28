import React from "react";

const SearchComponent = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <div className="search">
        <div>
          <img src="search.svg" alt="searchSvg" />
          <input
            type="text"
            placeholder="Search through thousands movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
