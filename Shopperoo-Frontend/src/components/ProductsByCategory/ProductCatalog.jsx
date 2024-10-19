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
    <main className="flex items-center justify-center">
      <div className="my-auto flex w-[1440px] flex-col self-stretch max-md:max-w-full">
        <div className="flex min-h-[2rem] w-full bg-white max-md:max-w-full" />
        <section className="z-10 mt-0 flex flex-col items-center gap-8 self-center max-md:mt-0 max-md:max-w-full">
          <ProductGrid products={products} />
          <Pagination currentPage={2} totalPages={3} />
        </section>
      </div>
    </main>
  );
};

export default ProductCatalog;
