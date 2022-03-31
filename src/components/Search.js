import React from 'react';

const Search = ({handleSearch}) => {
    return (
        <div>
	        <input
                type="text"
                className="search-input"
                placeholder="🔎 Type to search"
                onInput={handleSearch}
            />
        </div>
    );
};

export default Search;