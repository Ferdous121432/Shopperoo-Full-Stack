/* eslint-disable */
import React, { useState } from "react";

const SizeSelector = ({ sizes = [] }) => {
  const [selectedSize, setSelectedSize] = useState(
    sizes.length > 0 ? sizes[0] : ""
  );

  return (
    <div>
      <div className="mt-8 text-sm text-neutral-400">Size</div>
      <div className="flex gap-4 mt-3 text-sm text-black whitespace-nowrap">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`px-3 rounded-md h-[30px] w-[30px] ${
              selectedSize === size
                ? "text-white bg-yellow-600"
                : "bg-orange-50"
            }`}>
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
