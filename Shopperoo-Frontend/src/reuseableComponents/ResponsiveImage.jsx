import React from "react";
import { Img } from "react-image";

const ResponsiveImage = ({ src, alt, sizes }) => {
  return (
    <picture>
      {sizes.large && (
        <source media="(min-width: 1024px)" srcSet={sizes.large} />
      )}
      {sizes.medium && (
        <source media="(min-width: 768px)" srcSet={sizes.medium} />
      )}
      {sizes.small && (
        <source media="(max-width: 767px)" srcSet={sizes.small} />
      )}
      <Img
        src={src}
        // height={350}
        // width={350}
        width="100%"
        alt={alt}
        style={{ display: "block", maxWidth: "100%", height: "auto" }}
      />
    </picture>
  );
};

export default ResponsiveImage;
