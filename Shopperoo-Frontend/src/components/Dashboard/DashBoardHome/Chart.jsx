/* eslint-disable */
import React from "react";

function Chart({ title, period, value, change, changeText }) {
  const isPositive = change >= 0;
  const changeColor = isPositive ? "text-green-500" : "text-red-600";
  const changeIcon = isPositive
    ? "https://cdn.builder.io/api/v1/image/assets/TEMP/829b644558ecf239034610a390b8461298a10eca94fdda6e52997170fc8d77e9?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
    : "https://cdn.builder.io/api/v1/image/assets/TEMP/f65a3eca808b9ff247e185da743935a766946ef77736a60c1edb849f52f178f1?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0";

  return (
    <article className="flex flex-col w-[41%] bg-white rounded-2xl p-6 max-md:w-full max-md:mt-7">
      <h2 className="text-lg font-semibold tracking-tight leading-none text-zinc-800">
        {title}
      </h2>
      <p className="mt-1 text-sm font-medium tracking-tight leading-none text-neutral-400">
        {period}
      </p>
      <div className="mt-10 text-3xl font-bold tracking-tighter leading-none text-zinc-800">
        {value}
      </div>
      <div className="flex gap-2 items-center self-stretch mt-4">
        <div
          className={`flex gap-1 items-center self-stretch my-auto ${changeColor} whitespace-nowrap`}>
          <img
            loading="lazy"
            src={changeIcon}
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            alt=""
          />
          <span className="self-stretch my-auto">{Math.abs(change)}%</span>
        </div>
        <span className="self-stretch my-auto text-neutral-400">
          {changeText}
        </span>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e01a04a4-5b7b-427f-aa51-6e98133190ce?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
        className="object-contain mt-10 w-full aspect-[2.08]"
        alt="Sessions chart"
      />
    </article>
  );
}

export default Chart;
