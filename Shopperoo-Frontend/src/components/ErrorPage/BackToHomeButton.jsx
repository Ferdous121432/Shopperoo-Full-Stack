/* eslint-disable */
import React from "react";
import { NavLink } from "react-router-dom";

function BackToHomeButton() {
  return (
    <NavLink
      to={-1}
      className="flex gap-4 px-16 py-7 mt-14 ml-7 max-w-full text-lg font-extrabold leading-loose text-white bg-red-300 rounded-[41px] w-[322px] max-md:px-5 max-md:mt-10">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8420b080ee707648a80ba213866530866b855b782daaac2fcac0734ea225a01e?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
        alt=""
        className="object-contain shrink-0 my-auto aspect-[1.42] w-[17px]"
      />
      <span>Back to home</span>
    </NavLink>
  );
}

export default BackToHomeButton;
