/* eslint-disable */
import React from "react";
import BackToHomeButton from "./BackToHomeButton";
import DecorativeElements from "./DecorativeElements";

function ErrorPage() {
  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <section className="flex flex-col justify-center items-center px-20 py-48 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col items-center -mb-9 w-full max-w-[989px] max-md:mb-2.5 max-md:max-w-full">
          <DecorativeElements />
          <h1 className="mt-16 ml-8 text-5xl font-extrabold leading-none text-slate-700 max-md:mt-10 max-md:max-w-full">
            Oops, This Page Could Not Be Found.
          </h1>
          <p className="mt-8 ml-7 text-2xl font-medium leading-9 text-center text-slate-600 max-md:max-w-full">
            The page you are looking for might have been removed had its <br />{" "}
            name changed or is temporarily unavailable.
          </p>
          <BackToHomeButton />
        </div>
      </section>
    </main>
  );
}

export default ErrorPage;
