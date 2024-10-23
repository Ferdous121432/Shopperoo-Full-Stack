/* eslint-disable */
import React from "react";
import ProductCard from "./ProductCard";

const RelatedProducts = ({ products }) => {
  return (
    <section className="flex w-full max-w-[1200px] flex-col items-center bg-white pb-28 pt-14">
      <h2 className="text-4xl font-medium text-black">Related Products</h2>
      <div className="max-md:max-w-full mt-7 flex flex-wrap items-start justify-center gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <button className="text-base max-md:mb-2.5 max-md:mt-10 max-md:px-5 mb-0 mt-11 w-[245px] max-w-full border border-solid border-yellow-600 bg-white px-16 py-3 font-semibold text-yellow-600">
        Show More
      </button>
    </section>
  );
};

export default RelatedProducts;
