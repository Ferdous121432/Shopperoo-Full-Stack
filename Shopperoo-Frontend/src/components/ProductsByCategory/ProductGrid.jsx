/* eslint-disable */
import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="flex flex-wrap gap-8 items-center max-md:max-w-full">
      {products.map((product, index) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
