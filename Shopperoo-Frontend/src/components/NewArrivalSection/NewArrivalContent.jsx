/* eslint-disable */
import React from "react";
import Button from "../../reuseableComponents/Button";
import Constants from "../../../constants";

function NewArrivalContent() {
  return (
    <div className="xl:px-18 relative mb-0 flex max-w-full flex-col items-center justify-center gap-4 rounded-xl bg-yellow-50 px-8 pb-10 pt-16 opacity-80 sm:gap-6 md:mb-2.5 md:px-14 md:pb-12 lg:gap-10 xl:pb-14">
      <h2 className="text-center font-semibold tracking-[3px] sm:text-[1rem] md:text-[1.5rem]">
        New Arrival
      </h2>
      <h1 className="mt-1 text-center text-md leading-[30px] text-yellow-600 md:text-4xl xl:text-[4rem]">
        Discover Our New Collection
      </h1>
      <p className="max-md:max-w-full mt-4 self-stretch text-center text-sm font-medium leading-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <span className="hidden justify-center md:flex">
          Ut elit tellus, luctus nec ullamcorper mattis.
        </span>
      </p>
      <Button color={Constants.YELLOW_PRIMARY}>BUY NOW</Button>
    </div>
  );
}

export default NewArrivalContent;
