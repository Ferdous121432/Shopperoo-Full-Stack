/* eslint-disable */
import React from "react";

function Breadcrumbs({ items }) {
  return (
    <nav className="flex gap-1.5 text-base" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={item}>
          {index > 0 && (
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/db13939cabd153a09de09c25864d1f622bda5d116dbe6552d6605aca283c27a4?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
              alt=""
              className="object-contain shrink-0 my-auto w-5 aspect-square"
            />
          )}
          <span className={index === 0 ? "font-medium" : "font-light"}>{item}</span>
        </React.Fragment>
      ))}
    </nav>
  );
}

export default Breadcrumbs;