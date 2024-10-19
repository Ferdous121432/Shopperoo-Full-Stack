/* eslint-disable */
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useAuth } from "../../context/AuthProvider";
import { addToCart } from "../../api/apiCart";
import { Link } from "react-router-dom";
import { makePayment } from "../../api/apiCheckout";
import { baseURL } from "../../api/apiURL";

const ProductCard = ({ product }) => {
  const { name, price, slug, description, summary, imageCover, _id } = product;
  const [showMore, setShowMore] = React.useState(false);
  const newItem = true;
  const discount = "30%";
  const { state } = useAuth();
  const redirectURL = `http://localhost:5173/product/${_id}`;

  const [quantity, setQuantity] = useState(1);

  const checkout_product = {
    product_id: _id,
    quantity,
    productName: name,
    price,
    image: imageCover,
    subtotal: price * quantity,
  };

  const checkout_productDetails = [checkout_product];

  const cart_productDetails = {
    product_id: _id,
    image: imageCover.split("/").slice(-1).join(),
    quantity: quantity,
    productName: name,
    price: price,
    subtotal: price * quantity,
  };

  const handleAddToCart = async () => {
    addToCart(cart_productDetails, state.token);
    setQuantity(1);
  };

  const handleMakePayment = async () => {
    makePayment(checkout_productDetails, state.token);
    setQuantity(1);
  };
  let oldPrice = 0;

  return (
    <article
      key={_id}
      className="my-auto flex w-[285px] min-w-[240px] flex-col self-stretch"
      data-id={_id}
    >
      <Link
        to={redirectURL}
        className="relative flex aspect-[0.947] w-full flex-col items-end whitespace-nowrap px-7 pb-56 pt-6 text-base font-medium text-white max-md:px-5 max-md:pb-24"
      >
        <LazyLoadImage
          src={imageCover}
          alt={name}
          className="absolute inset-0 size-full object-cover"
        />
        {discount && (
          <div className="absolute left-2 top-5 mb-0 h-12 w-12 rounded-full bg-red-400 fill-red-400 px-1.5 max-md:mb-2.5">
            <span className="transform-middle text-xs font-semibold text-white">
              {discount}
            </span>
          </div>
        )}
        {newItem && (
          <div className="bg-emerald-400 fill-emerald-400 absolute right-2 top-5 mb-0 h-12 w-12 rounded-full px-1.5 max-md:mb-2.5">
            <span className="transform-middle text-xs font-semibold text-white">
              New
            </span>
          </div>
        )}
      </Link>

      <div className="flex w-full flex-col items-start bg-gray-100 px-4 pb-8 pt-4">
        <Link to={redirectURL}>
          <h3 className="text-neutral-700 text-2xl font-semibold leading-tight">
            {name}
          </h3>
        </Link>
        <p className="text-zinc-500 mt-2 text-base font-medium">
          {!showMore
            ? description.split(" ").slice(0, 30).join(" ") + "..."
            : description}

          <button
            className="text-blue-500"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "less" : "more"}
          </button>
        </p>
        <div className="mt-2 flex items-center gap-4 self-stretch">
          <span className="text-neutral-700 my-auto self-stretch text-xl font-semibold">
            {price}
          </span>
          {oldPrice && (
            <span className="text-zinc-400 my-auto self-stretch text-base">
              {/* {oldPrice ? oldPrice : price} */}
              price
            </span>
          )}
        </div>
      </div>
      <div className="mt-2 flex items-center gap-4 self-stretch">
        <span className="text-neutral-700 my-auto self-stretch text-xl font-semibold">
          {product.price}
        </span>
        <div className="flex items-center">
          <label
            htmlFor={`quantity-${_id}`}
            className="text-zinc-500 mr-2 text-base font-medium"
          >
            Quantity:
          </label>
          <input
            id={`quantity-${_id}`}
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-16 rounded border border-gray-300 px-2 py-1 text-base"
          />
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-2">
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          onClick={() => handleAddToCart()}
        >
          Add to Cart
        </button>

        <button
          onClick={handleMakePayment}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Buy Now
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
