/* eslint-disable */
import React from "react";

function Header() {
  return (
    <header className="flex flex-col self-start">
      <div
        className="flex w-12 h-12 rounded-full bg-stone-300 min-h-[48px]"
        aria-hidden="true"
      />
      <div className="flex flex-col justify-center mt-4">
        <h1 className="text-3xl font-medium text-zinc-800">
          Create an account
        </h1>
        <p className="gap-2.5 self-start p-0.5 text-base text-stone-500">
          <span className="text-zinc-800">Already have an account?</span>{" "}
          <a href="#" className="text-neutral-900">
            Log in
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;
