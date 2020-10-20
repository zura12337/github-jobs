import React from "react";

function SecondaryText({ children, className }) {
  const classes = className + " secondary-text";
  return <p className={classes}>{children}</p>;
}

function PrimaryText({ children, className }) {
  const classes = className + " primary-text";
  return <h2 className={classes}>{children}</h2>;
}

export { SecondaryText, PrimaryText };
