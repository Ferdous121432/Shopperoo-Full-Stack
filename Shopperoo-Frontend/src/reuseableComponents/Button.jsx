import React from "react";

export default function Button({
  children,
  handleClick,
  color,
  disabled,
  width,
}) {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`rounded border-0 bg-yellow-primary px-6 py-2 text-lg text-white hover:bg-slate-200 hover:text-black-primary focus:outline-none ${width ? `w-${width}` : ""}`}
    >
      {children}
    </button>
  );
}
