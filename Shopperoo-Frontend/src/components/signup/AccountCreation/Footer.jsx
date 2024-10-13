/* eslint-disable */
import React from "react";

function Footer() {
  return (
    <footer className="flex flex-wrap gap-5 justify-between self-center mt-3 max-w-full text-base text-zinc-800 w-[918px]">
      <div className="flex gap-0.5 justify-center items-center pl-2">
        <span className="self-stretch my-auto">English (United States)</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/14cbbc5c30e31686ba67a53cc1519dd0e6ffa07fe6aa14783be27d3596704559?apiKey=5f7c255a63be4d4b97b4f114fa9e17d0&"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
      </div>
      <nav className="flex gap-6 items-start whitespace-nowrap">
        <a href="#">Help</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </nav>
    </footer>
  );
}

export default Footer;
