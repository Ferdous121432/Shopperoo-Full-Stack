/* eslint-disable */
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="flex w-[90%] min-w-[240px] flex-col sm:w-[45%] md:w-[30%] xl:w-[22%]">
      <div className="text-base relative flex aspect-[0.947] w-full flex-col items-end whitespace-nowrap px-7 pb-56 pt-6 font-medium text-white">
        <img
          loading="lazy"
          src={product.image}
          alt={product.name}
          className="absolute inset-0 size-full object-cover"
        />
        {product.discount && (
          <div className="relative mb-0 h-12 w-12 rounded-full bg-red-400 fill-red-400 px-px">
            -{product.discount}%
          </div>
        )}
        {product.isNew && (
          <div className="relative mb-0 h-12 w-12 rounded-full bg-emerald-400 fill-emerald-400 px-1.5">
            New
          </div>
        )}
      </div>
      <div className="flex w-full flex-col items-start bg-gray-100 px-4 pb-8 pt-4">
        <h3 className="text-2xl font-semibold leading-tight text-neutral-700">
          {product.name}
        </h3>
        <div className="text-base text-zinc-500 mt-2 font-medium">
          {product.description}
        </div>
        <div className="mt-2 flex items-center gap-4 self-stretch">
          <div className="my-auto self-stretch text-xl font-semibold text-neutral-700">
            Rp {product.price.toLocaleString()}
          </div>
          {product.originalPrice && (
            <div className="text-base text-zinc-400 my-auto self-stretch">
              Rp {product.originalPrice.toLocaleString()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
