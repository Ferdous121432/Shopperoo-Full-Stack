import React from "react";
import { Img } from "react-image";

const GalaryImageList = ({ images }) => {
  return (
    <div className="flex w-full flex-row justify-between gap-1 overflow-hidden md:gap-2 xl:gap-5">
      {images.map((image, index) => (
        <div key={index} className="">
          <Img
            key={index}
            src={`http://localhost:3000/img/products/images/${image}`}
            alt="product"
            style={{ width: "100%" }}
          />
        </div>
      ))}
    </div>
  );
};

export default GalaryImageList;
