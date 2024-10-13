/* eslint-disable */
import React from "react";
import NewArrivalContent from "./NewArrivalContent";

function NewArrivalSection() {
  return (
    <section className="flex flex-col text-base font-bold rounded-none text-zinc-800">
      <div className="flex relative flex-col justify-center items-end px-20 py-36 w-full min-h-[717px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3231ed6cc266205a842152d0af69029eb8d24b50b398bc7d415c3ab1b23165dc?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <NewArrivalContent />
      </div>
    </section>
  );
}

export default NewArrivalSection;