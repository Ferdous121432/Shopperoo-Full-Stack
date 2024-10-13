/* eslint-disable */
import React from "react";

function CategoryCard({ name, image }) {
  return (
    <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-2xl font-semibold text-center whitespace-nowrap text-zinc-800 max-md:mt-5">
        <img loading="lazy" src={image} alt={`${name} category`} className="object-contain w-full rounded-none aspect-[0.79]" />
        <h3 className="self-center mt-8">{name}</h3>
      </div>
    </article>
  );
}

export default CategoryCard;