/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import { frontendURL } from "../../frontendURL/frontendURL";

function CreateAccountButton() {
  return (
    <Link
      to={frontendURL("signup")}
      className="flex overflow-hidden flex-col justify-center items-center px-16 py-4 mt-8 w-full max-w-screen-sm text-xl text-center border border-solid border-neutral-900 rounded-[40px] text-neutral-900 max-md:px-5 max-md:max-w-full">
      <span className="gap-2 self-stretch">Create an account</span>
    </Link>
  );
}

export default CreateAccountButton;
