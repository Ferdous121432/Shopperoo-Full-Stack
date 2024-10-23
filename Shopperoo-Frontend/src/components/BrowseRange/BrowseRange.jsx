/* eslint-disable */
import React from "react";
import CategoryCard from "./CategoryCard";
import CategoriesContainer from "../../reuseableComponents/CategoriesContainer";

const categories = [
  {
    name: "Dining",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2a58e4d3bf00f5a7bc4995db2d15a0e483ff8e0a1eb86976a05c2939d6b45864?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
  },
  {
    name: "Living",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/10e488667076fc2ffc657d95fa45067e4e9426209411417713122b7ea727504a?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
  },
  {
    name: "Bedroom",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/838f5018cf06989255905b7c720842d8627a94372540bfe3f2f94a34d503bb89?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
  },
];

function BrowseRange() {
  return (
    <section className="flex flex-col items-center justify-center rounded-none py-10">
      <h2 className="text-zinc-800 pb-2 text-2xl font-bold md:text-3xl">
        Explore the Uncharted
      </h2>
      <p className="text-center text-md text-stone-500 md:text-xl">
        Step into a world of style and sophistication
      </p>
      <CategoriesContainer>
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            name={category.name}
            image={category.image}
          />
        ))}
      </CategoriesContainer>
    </section>
  );
}

export default BrowseRange;
