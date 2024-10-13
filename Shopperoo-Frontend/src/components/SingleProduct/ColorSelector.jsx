/* eslint-disable */
import React, { useState } from "react";

const ColorSelector = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(
    colors.length > 0 ? colors[0] : ""
  );

  return (
    <div>
      <div className="mt-5 text-sm text-neutral-400">Color</div>
      <div className="flex gap-4 mt-3">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            className={`flex shrink-0 h-[30px] rounded-[50px] w-[30px]`}
            style={{ backgroundColor: color }}
            aria-label={`Select ${color} color`}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
