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
    // <article className="flex w-[94%] min-w-[240px] flex-col justify-self-center sm:w-[45%] md:w-[30%] xl:w-[24%] ">
    <article className="">
      <div className="text-base max-md:px-5 max-md:pb-24 relative flex aspect-[0.947] w-full flex-col items-end whitespace-nowrap px-7 pb-56 pt-6 font-medium text-white">
        <img
          loading="lazy"
          src={image}
          alt={name}
          className="absolute inset-0 size-full object-cover"
        />
        {discount && (
          <div className="max-md:mb-2.5 relative mb-0 h-12 w-12 rounded-full bg-red-400 fill-red-400 px-1.5">
            <span className="transform-middle text-sm font-semibold text-slate-100">
              {discount}
            </span>
          </div>
        )}
        {newProduct && (
          <div className="relative h-12 w-12 rounded-full bg-teal-800">
            <span className="transform-middle text-sm font-semibold text-slate-100">
              New
            </span>
          </div>
        )}
      </div>
      <div className="flex w-full flex-col items-start bg-gray-100 px-4 pb-8 pt-4">
        <h3 className="text-2xl font-semibold leading-tight text-neutral-700">
          {name}
        </h3>
        <p className="text-zinc-500 text-base mt-2 font-medium">
          {description}
        </p>
        <div className="mt-2 flex items-center gap-4 self-stretch">
          <span className="my-auto self-stretch text-xl font-semibold text-neutral-700">
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
