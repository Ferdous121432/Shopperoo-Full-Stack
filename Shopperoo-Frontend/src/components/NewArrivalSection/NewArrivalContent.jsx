/* eslint-disable */
import React from "react";

function NewArrivalContent() {
  return (
    <div className="flex relative flex-col items-start pt-16 pr-20 pb-9 pl-10 mb-0 max-w-full bg-yellow-50 rounded-xl w-[643px] max-md:px-5 max-md:mb-2.5">
      <h2 className="font-semibold tracking-[3px]">New Arrival</h2>
      <h1 className="mt-1 text-5xl text-yellow-600 leading-[65px] max-md:text-4xl max-md:leading-[55px]">
        Discover Our New Collection
      </h1>
      <p className="self-stretch mt-9 text-lg font-medium leading-6 max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
      </p>
      <button className="gap-2.5 px-20 py-6 mt-14 text-white uppercase bg-yellow-600 max-md:px-5 max-md:mt-10">
        Buy Now
      </button>
    </div>
  );
}

export default NewArrivalContent;