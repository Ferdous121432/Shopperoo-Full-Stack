import React from "react";

export default function ProductHead({ name, price, old_price, product }) {
  const truncateDescription = (description) => {
    return (
      description.split(" ").slice(0, 60).join(" ") +
      (description.split(" ").length > 30 ? "..." : "")
    );
  };
  return (
    <div>
      <h1 className="md:text-5xl text-3xl text-black">{name}</h1>
      <div className="mt-2 flex items-center gap-4 self-stretch">
        <span className="text-neutral-700 my-auto self-stretch text-xl font-semibold">
          <span>${price.toFixed(2)}</span>
        </span>

        <span className="text-black-primary decoration-red-primary my-auto self-stretch text-lg line-through decoration-2">
          {old_price !== 0 ? <span>{old_price}</span> : null}
        </span>
      </div>
      <p className="mt-3.5 text-justify text-sm text-black">
        {truncateDescription(product.description)}
      </p>
    </div>
  );
}
