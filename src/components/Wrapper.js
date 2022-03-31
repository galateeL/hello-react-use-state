import React, {useState} from "react";
import Cards from "./Cards";
import Filters from "./Filters";
import housesToRent from "../data/housesToRent";

function Wrapper() {
  let [houses, setHouses] = useState(housesToRent)

	return (
		<div className="wrapper">
      <Filters setHouses={setHouses} />
			<Cards houses={houses}/>
		</div>
	);
}

export default Wrapper;
