import React from "react";
import ResponsiveImage from "../../reuseableComponents/ResponsiveImage";
import GalaryImageList from "../../reuseableComponents/GalaryImageList";

export default function ProductGalary() {
  return (
    <div>
      <ResponsiveImage
        src={imageCover}
        alt={name}
        sizes={{ large: imageCover }}
      />
      <GalaryImageList images={[imageCover]} />
    </div>
  );
}
