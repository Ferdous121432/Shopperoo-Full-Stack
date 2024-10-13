/* eslint-disable */
import React from 'react';

const ProductCard = ({ image, discount, newProduct, name, description, price, oldPrice }) => {
  return (
    <article className="flex flex-col self-stretch my-auto min-w-[240px] w-[285px]">
      <div className="flex relative flex-col items-end px-7 pt-6 pb-56 w-full text-base font-medium text-white whitespace-nowrap aspect-[0.947] max-md:px-5 max-md:pb-24">
        <img loading="lazy" src={image} alt={name} className="object-cover absolute inset-0 size-full" />
        {discount && (
          <div className="relative px-1.5 mb-0 w-12 h-12 bg-red-400 rounded-full fill-red-400 max-md:mb-2.5">
            {discount}
          </div>
        )}
        {newProduct && (
          <div className="relative px-1.5 mb-0 w-12 h-12 bg-emerald-400 rounded-full fill-emerald-400 max-md:mb-2.5">
            New
          </div>
        )}
      </div>
      <div className="flex flex-col items-start px-4 pt-4 pb-8 w-full bg-gray-100">
        <h3 className="text-2xl font-semibold leading-tight text-neutral-700">{name}</h3>
        <p className="mt-2 text-base font-medium text-zinc-500">{description}</p>
        <div className="flex gap-4 items-center self-stretch mt-2">
          <span className="self-stretch my-auto text-xl font-semibold text-neutral-700">{price}</span>
          {oldPrice && (
            <span className="self-stretch my-auto text-base text-zinc-400">{oldPrice}</span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;