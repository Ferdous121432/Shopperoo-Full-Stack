/* eslint-disable */
import React from "react";
import { useProduct } from "../../context/product";
import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";

const ProductCatalog = ({ products }) => {
  // const { state } = useProduct();
  // const products = state.products?.data || [];

  console.log(products);
  return (
    <main className="flex items-center justify-center">
      <div className="max-md:max-w-full my-auto flex w-[1440px] flex-col items-center self-stretch">
        <div className="max-md:max-w-full flex min-h-[2rem] w-full bg-white" />
        <section className="max-md:mt-0 max-md:max-w-full z-10 mt-0 flex flex-col justify-center gap-8">
          <ProductGrid products={products} />
          <Pagination currentPage={2} totalPages={3} />
        </section>
      </div>
    </main>
  );
};

export default ProductCatalog;
