/* eslint-disable */
import React from "react";
import CategoryCard from "./CategoryCard";
import CategoriesContainer from "../../reuseableComponents/CategoriesContainer";

const categories = [
  {
    name: "Mens",
    image: "./image/homepage/men-home.jpg",
  },
  {
    name: "Womens",
    image: "./image/homepage/women-home.jpg",
  },
  {
    name: "Kids",
    image: "./image/homepage/kids-home.jpg",
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
