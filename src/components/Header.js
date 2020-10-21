import React from "react";
import { PrimaryText } from "./common/Text";

import { FiSearch } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import Button from "./common/Button";
export default function Header({ handleSubmit }) {
  return (
    <div className="nav-background">
      <div className="container">
        <nav className="navbar">
          <div className="logo inverted">
            <PrimaryText className="h1 text-light">
              <a href="/">devjobs</a>
            </PrimaryText>
          </div>
        </nav>
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
      </div>
    </div>
  );
}
