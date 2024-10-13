/* eslint-disable */
import React from 'react';
import ProductCard from './ProductCard';

const RelatedProducts = ({ products }) => {
  return (
    <section className="flex flex-col items-center px-20 pt-14 pb-28 w-full bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <h2 className="text-4xl font-medium text-black">Related Products</h2>
      <div className="flex flex-wrap gap-8 items-center mt-7 max-md:max-w-full">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <button className="px-16 py-3 mt-11 mb-0 max-w-full text-base font-semibold text-yellow-600 bg-white border border-yellow-600 border-solid w-[245px] max-md:px-5 max-md:mt-10 max-md:mb-2.5">
        Show More
      </button>
    </section>
  );
};

export default RelatedProducts;