/* eslint-disable */
import React from 'react';

function InputField({ label, type = 'text' }) {
  return (
    <div className="flex flex-col grow text-base font-medium text-black max-md:mt-8">
      <label htmlFor={label.toLowerCase().replace(' ', '-')}>{label}</label>
      <input
        type={type}
        id={label.toLowerCase().replace(' ', '-')}
        className="flex shrink-0 mt-6 bg-white rounded-xl border border-solid border-neutral-400 h-[75px] w-full"
      />
    </div>
  );
}

export default InputField;