/* eslint-disable */
import React from "react";

function TodayOrder() {
  return (
    <section className="flex flex-col w-[33%] max-md:w-full">
      <div className="flex flex-col mx-auto w-full bg-white rounded-2xl min-h-[420px] max-md:mt-7">
        <div className="flex items-start px-6 pt-6 w-full text-lg font-semibold tracking-tight leading-none text-zinc-800 max-md:px-5">
          <h2 className="flex-1 shrink min-w-[240px]">Today Order</h2>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e3df73260871b4b8a1b0108c0414f70fa38e6f48753b93a866a78890ef2ea21?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
            className="object-contain shrink-0 aspect-square w-[22px]"
            alt=""
          />
        </div>
        <div className="flex flex-col px-6 pt-8 pb-1.5 w-full max-md:px-5">
          <div className="flex gap-10 w-full">
            <div className="flex flex-col flex-1">
              <div className="self-start text-3xl font-bold tracking-tighter leading-none text-zinc-800">
                16.5K
              </div>
              <div className="mt-6 text-sm font-medium tracking-tight leading-none text-neutral-400">
                Orders Over Time
              </div>
            </div>
            <div className="flex flex-1 gap-2 items-center self-start mt-3 text-sm font-medium tracking-tight leading-none">
              <div className="flex gap-1 items-center self-stretch my-auto text-green-500 whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/829b644558ecf239034610a390b8461298a10eca94fdda6e52997170fc8d77e9?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                  alt=""
                />
                <div className="self-stretch my-auto">6%</div>
              </div>
              <div className="self-stretch my-auto text-neutral-400">
                vs last day
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/176f94638d9b3e5b85af241e8c7dc0fce4afb98d77db5a6625a2793661135ec8?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
            className="object-contain z-10 mt-20 max-w-full aspect-[1.55] w-[205px] max-md:mt-10"
            alt="Today's order chart"
          />
          <div className="flex gap-10 justify-between items-center pt-2.5 text-sm leading-loose text-center whitespace-nowrap border-t border-zinc-300 text-neutral-400">
            <div className="self-stretch my-auto">12am</div>
            <div className="self-stretch my-auto">8am</div>
            <div className="self-stretch my-auto">4pm</div>
            <div className="self-stretch my-auto">11pm</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TodayOrder;
