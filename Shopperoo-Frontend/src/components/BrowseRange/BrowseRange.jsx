/* eslint-disable */
import React from "react";
import CategoryCard from "./CategoryCard";

const categories = [
  { name: "Dining", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a58e4d3bf00f5a7bc4995db2d15a0e483ff8e0a1eb86976a05c2939d6b45864?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0" },
  { name: "Living", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/10e488667076fc2ffc657d95fa45067e4e9426209411417713122b7ea727504a?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0" },
  { name: "Bedroom", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/838f5018cf06989255905b7c720842d8627a94372540bfe3f2f94a34d503bb89?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0" }
];

function BrowseRange() {
  return (
    <section className="flex flex-col items-center rounded-none">
      <h2 className="text-3xl font-bold text-zinc-800">Browse The Range</h2>
      <p className="text-xl text-center text-stone-500 max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="self-stretch mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {categories.map((category, index) => (
            <CategoryCard key={index} name={category.name} image={category.image} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrowseRange;