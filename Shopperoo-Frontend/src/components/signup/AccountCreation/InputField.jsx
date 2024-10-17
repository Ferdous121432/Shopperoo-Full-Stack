/* eslint-disable */
import React from "react";

function InputField(setFormData, { label, type, id, fullWidth }) {
  return (
    <div
      className={`flex flex-col ${fullWidth ? "w-full" : "min-w-[240px] w-[259px]"}`}>
      <label htmlFor={id} className="py-0.5 w-full max-md:pr-5">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="flex mt-1 w-full rounded-xl border border-solid border-stone-500 border-opacity-30 min-h-[56px]"
        required
      />
    </div>
  );
}

export default InputField;
