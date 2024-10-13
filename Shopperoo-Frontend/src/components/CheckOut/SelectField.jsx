/* eslint-disable */
import React from 'react';

function SelectField({ label, options }) {
  return (
    <div className="flex flex-col grow text-base font-medium text-black max-md:mt-8">
      <label htmlFor={label.toLowerCase().replace(' ', '-')}>{label}</label>
      <div className="flex gap-5 justify-between px-7 py-7 mt-6 text-base bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400 max-md:px-5 max-md:max-w-full">
        <select
          id={label.toLowerCase().replace(' ', '-')}
          className="w-full bg-transparent appearance-none"
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f1ac5ba21e65fda52836aee9325e8795969b7f85c738d0e19b9a31c7e2387db?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0" className="object-contain shrink-0 my-auto w-5 aspect-square" alt="" />
      </div>
    </div>
  );
}

export default SelectField;