import React from "react";

export default function Button({ children, handleClick }) {
  return (
    <button
      onClick={handleClick}
      style={{
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "#f44336",
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
