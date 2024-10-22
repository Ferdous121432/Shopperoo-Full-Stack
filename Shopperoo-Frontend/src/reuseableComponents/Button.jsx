import React from "react";

export default function Button({ children, handleClick, color }) {
  return (
    <button
      onClick={handleClick}
      style={{
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: color,
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
