/* eslint-disable */
import React from "react";

function CategoryCard({ name, image }) {
  return (
    <article
      className="flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-zinc-800 relative flex grow flex-col whitespace-nowrap text-center text-2xl font-semibold">
        <img
          loading="lazy"
          src={image}
          alt={`${name} category`}
          className="w-full rounded-none object-contain"
        />
        <h3 className="transform-middle mt-8 self-center rounded-md bg-slate-200 px-8 py-4 text-yellow-primary opacity-0 hover:opacity-80">
          {name}
        </h3>
      </div>
    </article>
  );

  function handleMouseEnter(e) {
    e.currentTarget.querySelector("h3").style.opacity = "0.8";
  }

  function handleMouseLeave(e) {
    e.currentTarget.querySelector("h3").style.opacity = "0";
  }
}

export default CategoryCard;
