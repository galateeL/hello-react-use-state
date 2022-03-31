import React from 'react';

const Type = ({handleTypeChange}) => {
    return (
        <div>
            <select className="select" name="home" onChange={handleTypeChange}>
                <option value="All">All</option>
                <option value="Flat">Flat</option>
                <option value="House">House</option>
            </select>
        </div>
    );
};

export default Type;