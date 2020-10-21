import React from "react";
import Button from "./common/Button";

import { FiSearch } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";

export default function Search({ handleSubmit }) {
  return (
    <form>
      <div className="filters row">
        <div className="search col-5">
          <FiSearch size={40} color={"#26193d"} />
          <input
            name="search"
            id="search"
            placeholder="Filter by title, companies, expertise..."
          />
        </div>
        <div className="filter col">
          <HiLocationMarker size={40} color={"#26193d"} />
          <input
            name="location"
            id="location"
            placeholder="Filter By Location..."
          />
        </div>
        <div className="search-button col">
          <input name="full_time" id="full-time" type="checkbox" />
          <label htmlFor="full-time" id="full-time-label">
            Full Time Only
          </label>
          <Button title="Search" onClick={() => handleSubmit()} />
        </div>
      </div>
    </form>
  );
}
