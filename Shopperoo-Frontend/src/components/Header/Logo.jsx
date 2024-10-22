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
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/05944335d4c8ea27735c375aa3816d3f0f03f0b176bd0909049a018400cd773a?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
          alt=""
          className="my-auto aspect-[1.56] w-[50px] shrink-0 items-center self-stretch object-contain"
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
