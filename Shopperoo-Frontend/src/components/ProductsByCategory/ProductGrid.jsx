/* eslint-disable */
import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="flex flex-wrap items-start justify-center gap-8 max-md:max-w-full">
      {products.map((product, index) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
