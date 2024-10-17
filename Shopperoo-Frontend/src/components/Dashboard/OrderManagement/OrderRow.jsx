/* eslint-disable */
import React from "react";

function OrderRow({
  id,
  created,
  customer,
  total,
  profit,
  profitPercentage,
  status,
}) {
  return (
    <div className="flex flex-wrap items-center pr-6 pl-4 w-full border-b border-violet-100 max-md:pr-5 max-md:max-w-full">
      <div className="flex flex-1 shrink gap-2.5 items-center self-stretch px-5 py-2 my-auto text-base font-semibold leading-6 whitespace-nowrap border-0 border-solid basis-0 border-zinc-300 text-zinc-800">
        <div className="flex-1 self-stretch my-auto w-24">{id}</div>
      </div>
      <div className="flex-1 shrink gap-2 self-stretch px-5 py-5 my-auto text-base leading-none border-0 border-solid border-zinc-300 text-zinc-800 w-[70px]">
        {created}
      </div>
      <div className="flex-1 shrink gap-2.5 self-stretch px-5 py-3.5 my-auto text-base leading-none border-0 border-solid border-zinc-300 text-zinc-800">
        {customer}
      </div>
      <div className="flex-1 shrink gap-2.5 self-stretch px-5 py-3.5 my-auto text-base leading-none whitespace-nowrap border-0 border-solid border-zinc-300 text-zinc-800">
        {total}
      </div>
      <div className="flex flex-1 shrink gap-1 items-center self-stretch px-5 py-2 my-auto whitespace-nowrap border-0 border-solid basis-0 border-zinc-300">
        <div className="self-stretch my-auto text-base leading-none text-zinc-800">
          {profit}
        </div>
        <div className="gap-2.5 self-stretch p-1 my-auto text-sm font-semibold leading-none text-green-500 rounded bg-green-500 bg-opacity-20">
          {profitPercentage}
        </div>
      </div>
      <div className="flex flex-1 shrink gap-2 items-center self-stretch px-5 py-4 my-auto text-sm font-semibold leading-none text-yellow-400 whitespace-nowrap border-0 border-solid basis-0 border-zinc-300">
        <div className="flex gap-2.5 items-center self-stretch px-2.5 py-1.5 my-auto rounded bg-yellow-400 bg-opacity-20">
          <div className="self-stretch my-auto">{status}</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9798cd3c8acd24c7fa8c8d396940b6e95f3c85e7f8b5b5212e3c6b4f5df3cc5?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            alt=""
          />
        </div>
      </div>
      <div className="flex gap-2 items-center self-stretch px-5 py-5 my-auto w-16 border-0 border-solid border-zinc-300">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/962d8577284fd248340e0d348ebedf905f3afa85fba6b9ae2999b8ce5b9e4b4e?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
          className="object-contain self-stretch my-auto w-6 aspect-square"
          alt=""
        />
      </div>
    </div>
  );
}

export default OrderRow;
