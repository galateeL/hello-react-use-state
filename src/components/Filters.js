import React, {useState} from 'react';
import Availability from "./Availability";
import Type from "./Type";
import Search from "./Search";
import housesToRent from "../data/housesToRent";

const Filters = ({setHouses}) => {
    function handleAvailability(e) {
        setHouses(e.target.checked ?
            housesToRent.filter(house => house.available):
            housesToRent
        )
    }

    function handleTypeChange(e) {
        let type = e.target.value

        setHouses(type === "All" ?
            housesToRent:
            housesToRent.filter(house => house.type === type)
        )
    }

    function handleSearch(e) {
        let query = e.target.value.toLowerCase()

        setHouses(housesToRent.filter(house =>
          house.name.toLowerCase().includes(query) ||
          house.desc.toLowerCase().includes(query)
        ))
    }

    return (
        <div className="filters">
            <Search handleSearch={handleSearch} />
            <Type handleTypeChange={handleTypeChange} />
            <Availability handleAvailability={handleAvailability} />
        </div>
    );
};

export default Filters;