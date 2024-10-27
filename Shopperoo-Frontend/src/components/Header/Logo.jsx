/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

function Logo({ isScrolled }) {
  return (
    <Link
      to="/"
      className={`max-md:ml-0 max-md:w-full flex max-w-[21%] flex-col ${isScrolled ? "items-start justify-center" : "flex"}`}
    >
      <div className="max-md:mt-10 flex flex-col items-center justify-center gap-1 whitespace-nowrap text-4xl font-bold text-black md:flex-row md:gap-3">
        <img
          loading="lazy"
          src={`${window.location.protocol}//${window.location.host}/shopperoo.png`}
          alt=""
          className="my-auto aspect-[1.56] w-[50px] shrink-0 items-center self-stretch object-contain transition-transform duration-700 hover:rotate-180"
        />
        {isScrolled === false && (
          <div className="my-auto self-stretch text-sm md:text-2xl lg:text-2xl">
            Shoperu
          </div>
        )}
      </div>
    </Link>
  );
}

export default Logo;
