/* eslint-disable */
import React from "react";
import { useProduct } from "../../context/product";
import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";

const ProductCatalog = () => {
  const { state } = useProduct();
  const products = state.products?.data || [];

  console.log(products[0]);
  return (
    <main className="flex justify-center items-center">
      <div className="flex flex-col self-stretch my-auto w-[1440px] max-md:max-w-full">
        <div className="flex w-full bg-white min-h-[2rem] max-md:max-w-full" />
        <section className="flex z-10 gap-8 flex-col items-center self-center mt-0 max-md:mt-0 max-md:max-w-full">
          <ProductGrid products={products} />
          <Pagination currentPage={1} totalPages={3} />
        </section>
      </div>
    </main>
  );
};

export default ProductCatalog;
