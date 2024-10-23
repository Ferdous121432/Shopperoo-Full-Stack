import React from "react";

export default function Button({ children, handleClick, color }) {
  return (
    <button
      onClick={handleClick}
      className="bg-yellow-primary hover:text-yellow-primary hover:bg-yellow-secondary rounded border-0 px-6 py-2 text-lg text-white focus:outline-none"
    >
      {children}
    </button>
  );
}
