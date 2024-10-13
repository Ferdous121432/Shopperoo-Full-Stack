/* eslint-disable */
import React from "react";
import Breadcrumbs from "./Breadcrumbs";

function PageHeader({ title, breadcrumbs }) {
  return (
    <header className="flex relative flex-col justify-center items-center px-20 py-28 w-full min-h-[316px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/526c6d0ee53fa6ff76258edc427eaac65d8feb642db842e22e6181a6fddd2b7b?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0" alt="" className="object-cover absolute inset-0 size-full" />
      <div className="flex relative flex-col max-w-full w-[124px]">
        <h1 className="text-5xl font-medium max-md:text-4xl">{title}</h1>
        <Breadcrumbs items={breadcrumbs} />
      </div>
    </header>
  );
}

export default PageHeader;