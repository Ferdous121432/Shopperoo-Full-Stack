/* eslint-disable */
import React from "react";
import ProductCard from "./ProductCard";

const RelatedProducts = ({ products }) => {
  return (
    <section className="flex w-full max-w-[1200px] flex-col items-center bg-white px-20 pb-28 pt-14 max-md:px-5 max-md:pb-24">
      <h2 className="text-4xl font-medium text-black">Related Products</h2>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-8 max-md:max-w-full">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <button className="mb-0 mt-11 w-[245px] max-w-full border border-solid border-yellow-600 bg-white px-16 py-3 text-base font-semibold text-yellow-600 max-md:mb-2.5 max-md:mt-10 max-md:px-5">
        Show More
      </button>
    </section>
  );
};

export default RelatedProducts;
