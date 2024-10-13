/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex gap-3.5 items-center px-20 py-8 mt-3.5 text-base bg-orange-50 text-neutral-400 max-md:px-5" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/db13939cabd153a09de09c25864d1f622bda5d116dbe6552d6605aca283c27a4?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
          )}
          <Link to={item.path} className={index === items.length - 1 ? "text-black" : ""}>
            {item.label}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;