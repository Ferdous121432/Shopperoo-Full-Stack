/* eslint-disable */
import React, { useState } from "react";

const QuantitySelector = ({ quantity, setQuantity }) => {
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));
  const increaseQuantity = () => setQuantity((prev) => prev + 1);

  return (
    <div className="flex gap-9 px-4 py-5 text-base whitespace-nowrap bg-white rounded-xl border border-solid border-neutral-400">
      <button onClick={decreaseQuantity} aria-label="Decrease quantity">
        -
      </button>
      <div className="font-medium">{quantity}</div>
      <button onClick={increaseQuantity} aria-label="Increase quantity">
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
