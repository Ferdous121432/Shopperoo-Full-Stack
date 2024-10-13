/* eslint-disable */
import React from 'react';
import ProductGrid from './ProductGrid';
import Pagination from './Pagination';

const ProductPage = () => {
  return (
    <main className="flex justify-center items-center">
      <div className="flex flex-col self-stretch my-auto w-[1440px] max-md:max-w-full">
        <div className="flex w-full bg-white min-h-[777px] max-md:max-w-full" />
        <div className="flex z-10 flex-col items-center self-center mt-0 max-md:mt-0 max-md:max-w-full">
          <ProductGrid />
          <ProductGrid />
          <ProductGrid />
          <ProductGrid />
          <Pagination />
        </div>
      </div>
    </main>
  );
};

export default ProductPage;