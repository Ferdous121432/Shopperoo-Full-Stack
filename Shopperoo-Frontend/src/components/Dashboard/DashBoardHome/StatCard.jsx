/* eslint-disable */
import React from "react";

function StatCard({
  title,
  period,
  mainValue,
  secondaryValue,
  change,
  changeText,
  chartSrc,
}) {
  const isPositive = change >= 0;
  const changeColor = isPositive ? "text-green-500" : "text-red-600";
  const changeIcon = isPositive
    ? "https://cdn.builder.io/api/v1/image/assets/TEMP/35f0ab0809a014953ae472e823bd2e27febae3cf042a461d4eea8b02d59b123f?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
    : "https://cdn.builder.io/api/v1/image/assets/TEMP/f65a3eca808b9ff247e185da743935a766946ef77736a60c1edb849f52f178f1?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0";

  return (
    <article className="flex flex-col w-full bg-white rounded-2xl p-6 max-md:mt-7">
      <h2 className="text-lg font-semibold tracking-tight leading-none text-zinc-800">
        {title}
      </h2>
      <p className="mt-1 text-sm font-medium tracking-tight leading-none text-neutral-400">
        {period}
      </p>
      <div className="flex gap-3 self-stretch mt-10 font-bold whitespace-nowrap">
        <span className="grow text-3xl tracking-tighter leading-none text-zinc-800">
          {mainValue}
        </span>
        {secondaryValue && (
          <span className="text-lg tracking-tight leading-8 text-sky-500">
            {secondaryValue}
          </span>
        )}
      </div>
      <div className="flex gap-2 items-center mt-3 text-sm tracking-tight leading-none">
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
      {chartSrc && (
        <img
          loading="lazy"
          src={chartSrc}
          className="object-contain shrink-0 self-end mt-10 max-w-full aspect-[1.47] w-[157px]"
          alt=""
        />
      )}
    </article>
  );
}

export default StatCard;
