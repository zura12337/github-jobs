import React from "react";

export default function Button({ title, onClick, className = "" }) {
  const classes = className + " primary-button";
  return (
    <button onClick={onClick} className={classes}>
      {title}
    </button>
  );
}
