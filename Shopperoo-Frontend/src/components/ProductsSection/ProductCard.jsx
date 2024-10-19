/* eslint-disable */
import React from "react";

const ProductCard = ({
  image,
  discount,
  newProduct,
  name,
  description,
  price,
  oldPrice,
}) => {
  return (
    <article className="mx-auto my-auto flex w-[285px] min-w-[240px] flex-col self-stretch">
      <div className="relative flex aspect-[0.947] w-full flex-col items-end whitespace-nowrap px-7 pb-56 pt-6 text-base font-medium text-white max-md:px-5 max-md:pb-24">
        <img
          loading="lazy"
          src={image}
          alt={name}
          className="absolute inset-0 size-full object-cover"
        />
        {discount && (
          <div className="relative mb-0 h-12 w-12 rounded-full bg-red-400 fill-red-400 px-1.5 max-md:mb-2.5">
            <span className="transform-middle text-slate-100 text-sm font-semibold">
              {discount}
            </span>
          </div>
        )}
        {newProduct && (
          <div className="relative h-12 w-12 rounded-full bg-teal-800">
            <span className="transform-middle text-slate-100 text-sm font-semibold">
              New
            </span>
          </div>
        )}
      </div>
      <div className="flex w-full flex-col items-start bg-gray-100 px-4 pb-8 pt-4">
        <h3 className="text-neutral-700 text-2xl font-semibold leading-tight">
          {name}
        </h3>
        <p className="text-zinc-500 mt-2 text-base font-medium">
          {description}
        </p>
        <div className="mt-2 flex items-center gap-4 self-stretch">
          <span className="text-neutral-700 my-auto self-stretch text-xl font-semibold">
            {price}
          </span>
          {oldPrice && (
            <span className="my-auto self-stretch text-lg line-through decoration-red-700 decoration-2">
              {oldPrice}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
