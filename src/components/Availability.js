import React, {useState} from "react";

function Availability({handleAvailability}) {
  return (
    <div>
        <label htmlFor="available">Show only Available</label>

        <input
            type="checkbox"
            className="available-checkbox"
            name="checkbox"
            id=""
            onChange={handleAvailability}
        />
    </div>
  )
}

  export default Availability