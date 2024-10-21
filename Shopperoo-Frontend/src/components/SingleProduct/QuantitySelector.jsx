/* eslint-disable */
import React from "react";

const QuantitySelector = ({ quantity, setQuantity }) => {
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));
  const increaseQuantity = () => setQuantity((prev) => prev + 1);

  return (
    <div className="border-neutral-400 flex gap-2 whitespace-nowrap rounded-xl border border-solid bg-white px-2 py-3 text-base md:gap-4 md:px-4 md:py-4 lg:px-4 lg:py-4 xl:gap-6">
      <button
        onClick={decreaseQuantity}
        aria-label="Decrease quantity"
        className="text-lg sm:text-xl"
      >
        -
      </button>
      <div className="text-md font-medium lg:text-lg">{quantity}</div>
      <button
        onClick={increaseQuantity}
        aria-label="Increase quantity"
        className="text-lg sm:text-xl"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
