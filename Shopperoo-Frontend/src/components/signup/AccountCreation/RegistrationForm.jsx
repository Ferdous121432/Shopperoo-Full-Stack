/* eslint-disable */
import React from "react";
import InputField from "./InputField";

function RegistrationForm() {
  const inputFields = [
    { label: "First name", type: "text", id: "firstName" },
    { label: "Last name", type: "text", id: "lastName" },
    { label: "Email address", type: "email", id: "email" },
    { label: "Password", type: "password", id: "password" },
    { label: "Confirm your password", type: "password", id: "confirmPassword" },
  ];

  return (
    <form className="flex flex-col mt-10 w-full text-base max-w-[534px] text-stone-500 max-md:max-w-full">
      <div className="flex flex-wrap gap-4 items-start max-md:max-w-full">
        {inputFields.slice(0, 2).map((field) => (
          <InputField key={field.id} {...field} />
        ))}
      </div>
      {inputFields.slice(2).map((field) => (
        <InputField key={field.id} {...field} fullWidth />
      ))}
      <p className="mt-2 max-md:max-w-full">
        Use 8 or more characters with a mix of letters, numbers & symbols
      </p>
      <div className="flex gap-2 items-start self-start py-2 pr-2 mt-2 text-zinc-800">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/83327219ef862fbeb0feddb7c11c02ad95ef811779c8e45af1447e69550f7e4e?apiKey=5f7c255a63be4d4b97b4f114fa9e17d0&"
          className="object-contain shrink-0 w-6 aspect-square"
          alt=""
        />
        <label htmlFor="showPassword">
          <input type="checkbox" id="showPassword" className="sr-only" />
          Show password
        </label>
      </div>
      <div className="flex flex-wrap gap-5 justify-between mt-10 max-w-full rounded-[32px] w-[534px]">
        <a href="#" className="my-auto text-base text-neutral-900">
          Log in instead
        </a>
        <button
          type="submit"
          className="flex overflow-hidden flex-col justify-center px-7 py-4 text-2xl font-medium text-center text-white bg-neutral-900 rounded-[32px] max-md:px-5">
          Create an account
        </button>
      </div>
    </form>
  );
}

export default RegistrationForm;
