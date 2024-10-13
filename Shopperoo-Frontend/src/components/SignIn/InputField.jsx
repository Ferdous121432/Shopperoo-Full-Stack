/* eslint-disable */
import React from "react";

function InputField({ label, type, id, name, showHideOption }) {
  return (
    <div className="flex flex-col mt-6 w-full max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between pr-2.5 w-full max-md:max-w-full">
        <label htmlFor={id} className="text-base text-stone-500">
          {label}
        </label>
        {showHideOption && (
          <button
            type="button"
            className="flex gap-2 text-lg text-right whitespace-nowrap text-stone-500 text-opacity-80">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5140d1751deadb6ffe6ce71941c3fdb5f2023605350f9ec7903c30d5418e27aa?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
              className="object-contain shrink-0 self-start w-6 aspect-square"
              alt=""
            />
            <span>Hide</span>
          </button>
        )}
      </div>
      <input
        type={type}
        id={id}
        name={name}
        className="flex mt-1 w-full rounded-xl border border-solid border-stone-500 border-opacity-30 min-h-[56px] max-md:max-w-full"
        aria-label={label}
      />
    </div>
  );
}

export default InputField;
