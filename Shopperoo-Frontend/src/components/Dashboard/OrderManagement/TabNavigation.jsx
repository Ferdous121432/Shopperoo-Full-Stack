/* eslint-disable */
import React from "react";

function TabNavigation() {
  const tabs = [
    "Pending",
    "Confirmed",
    "Processing",
    "Picked",
    "Shipped",
    "Delivered",
    "Cancelled",
  ];

  return (
    <nav className="flex flex-wrap items-center mt-6 w-full text-base leading-none whitespace-nowrap rounded-md border-b border-solid border-b-zinc-300 text-neutral-400 max-md:mr-0.5 max-md:max-w-full">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`overflow-hidden gap-2.5 self-stretch px-5 py-2 my-auto rounded-md ${
            index === 0 ? "text-blue-600 border-b-2 border-blue-600" : ""
          }`}>
          {tab}
        </button>
      ))}
    </nav>
  );
}

export default TabNavigation;
