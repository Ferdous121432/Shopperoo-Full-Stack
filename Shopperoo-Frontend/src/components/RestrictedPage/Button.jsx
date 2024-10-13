/* eslint-disable */
import React from "react";

function Button({ text }) {
  return (
    <button className="gap-2.5 self-stretch px-4 py-2 mt-8 text-sm font-medium text-black bg-white rounded-lg border border-solid border-neutral-200">
      {text}
    </button>
  );
}

export default Button;
