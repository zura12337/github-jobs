import React from "react";
import { PrimaryText } from "./common/Text";

export default function Header({ handleSubmit }) {
  return (
    <div className="nav-background">
      <div className="container">
        <nav className="navbar">
          <div className="logo inverted">
            <PrimaryText className="h1 text-light">
              <a className="dev-logo" href="/">
                devjobs
              </a>
            </PrimaryText>
          </div>
        </nav>
      </div>
    </div>
  );
}
