import React, { useState } from "react";
import { PrimaryText } from "./common/Text";

import { IoIosCloudyNight } from "react-icons/io";
import { WiDaySunny } from "react-icons/wi";
import { FiSearch } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import Button from "./common/Button";
export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="nav-background">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <PrimaryText className="h1 text-light">devjobs</PrimaryText>
          </div>
          <div className="dark-mode">
            <label for="dark-mode">
              <WiDaySunny size={30} color={darkMode ? "#26193d" : "white"} />
            </label>
            <label class="switch">
              <input
                type="checkbox"
                onChange={() => setDarkMode(!darkMode)}
                id="dark-mode"
                className="dark-mode-checkbox"
              />
              <span class="slider round"></span>
            </label>
            <IoIosCloudyNight
              size={30}
              color={darkMode ? "#26193d" : "white"}
            />
          </div>
        </nav>
        <div className="filters row">
          <div className="search col-5">
            <FiSearch size={40} color={"#26193d"} />
            <input
              id="search"
              placeholder="Filter by title, companies, expertise"
            />
          </div>
          <div className="filter col">
            <HiLocationMarker size={40} color={"#26193d"} />
            <input id="location" placeholder="Filter By Location..." />
          </div>
          <div className="search-button col">
            <input id="full-time" type="checkbox" />
            <label for="full-time" id="full-time-label">
              Full Time Only
            </label>
            <Button title="Search" onClick={() => console.log("Hello World")} />
          </div>
        </div>
      </div>
    </div>
  );
}
