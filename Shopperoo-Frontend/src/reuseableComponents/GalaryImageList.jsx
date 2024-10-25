import React from "react";
import { Img } from "react-image";
import { baseURL } from "../api/apiURL";

const GalaryImageList = ({ images, setImageIndex }) => {
  return (
    <div className="flex w-full flex-row justify-start gap-1 overflow-hidden md:gap-2 xl:gap-5">
      {images.map((image, index) => (
        <div key={index} className="w-[20%]">
          <Img
            key={index}
            src={`${image}`}
            alt="product"
            style={{ width: "100%" }}
            onClick={() => setImageIndex(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default GalaryImageList;
