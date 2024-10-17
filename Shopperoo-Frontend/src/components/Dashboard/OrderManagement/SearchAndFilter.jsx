/* eslint-disable */
import React from "react";

function SearchAndFilter() {
  return (
    <section className="flex flex-wrap gap-10 mt-6 w-full text-base max-md:mr-0.5 max-md:max-w-full">
      <form className="flex flex-1 items-center leading-snug bg-white rounded shadow-sm min-h-[40px] text-neutral-400">
        <label htmlFor="searchInput" className="sr-only">
          Search by order id
        </label>
        <input
          id="searchInput"
          type="search"
          placeholder="Search by order id"
          className="flex overflow-hidden flex-1 shrink gap-1 items-center self-stretch px-4 py-2 my-auto w-full rounded basis-0"
        />
        <button type="submit" aria-label="Search">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e411b3a34731646c4414b301e69f38bb516ceb40a637efc42c50ddaf33ca7a9?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
            alt=""
          />
        </button>
      </form>
      <div className="flex overflow-hidden flex-1 items-start font-medium tracking-wide bg-white rounded-md shadow-[0px_4px_16px_rgba(0,0,0,0.04)] text-neutral-400">
        <button className="flex gap-1.5 justify-center items-center px-4 py-3 min-h-[40px]">
          Filter by date range
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ad593abdf638125bd46073fafeac8d45f3df0000ae5af424cdd37573a645233?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            alt=""
          />
        </button>
      </div>
    </section>
  );
}

export default SearchAndFilter;
