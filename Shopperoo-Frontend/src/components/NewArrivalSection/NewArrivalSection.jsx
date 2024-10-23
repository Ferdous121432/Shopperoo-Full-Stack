/* eslint-disable */
import React from "react";
import NewArrivalContent from "./NewArrivalContent";

function NewArrivalSection() {
  return (
    <section className="text-base text-zinc-800 flex flex-col rounded-none font-bold">
      <div className="max-md:px-5 max-md:py-24 max-md:max-w-full relative flex min-h-[717px] w-full flex-col items-center justify-center px-20 py-36">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3231ed6cc266205a842152d0af69029eb8d24b50b398bc7d415c3ab1b23165dc?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <NewArrivalContent />
      </div>
    </section>
  );
}

export default NewArrivalSection;
