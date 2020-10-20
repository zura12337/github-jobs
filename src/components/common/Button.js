import React from "react";

export default function Button({ title, onClick }) {
  return (
    <button onClick={onClick} className="primary-button">
      {title}
    </button>
  );
}
