import React from "react";
import Cards from "./Cards";
import housesToRent from "../data/housesToRent";

function Wrapper() {
	return (
		<div className="wrapper">
			<div className="filters">
				<input
					type="text"
					className="search-input"
					placeholder="🔎 Type to search"
				/>

        <select className="select" name="home">
            <option value="All">All</option>
            <option value="Flat">Flat</option>
            <option value="House">House</option>
        </select>

        <div>
            <label htmlFor="available">Show only Available</label>
            <input
            type="checkbox"
            className="available-checkbox"
            name="checkbox"
            id=""
            />
        </div>
  		</div>

			<Cards houses={housesToRent} />
		</div>
	);
}

export default Wrapper;
