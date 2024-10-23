/* eslint-disable */
import React from "react";

function CategoryCard({ name, image }) {
  return (
    <article className="flex flex-col">
      <div className="text-zinc-800 flex grow flex-col whitespace-nowrap text-center text-2xl font-semibold">
        <img
          loading="lazy"
          src={image}
          alt={`${name} category`}
          className="aspect-[0.79] w-full rounded-none object-contain"
        />
        <h3 className="mt-8 self-center">{name}</h3>
      </div>
    </article>
  );
}

export default CategoryCard;
