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
  // const productDetails = {
  //   product_id: _id,
  //   image: imageCover.split("/").slice(-1).join(),
  //   quantity: quantity,
  //   productName: name,
  //   price: price,
  //   subtotal: price * quantity,
  // };
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

  return (
    <article
      key={_id}
      className="flex flex-col self-stretch my-auto min-w-[240px] w-[285px]"
      data-id={_id}>
      <Link
        to={redirectURL}
        className="flex relative flex-col items-end px-7 pt-6 pb-56 w-full text-base font-medium text-white whitespace-nowrap aspect-[0.947] max-md:px-5 max-md:pb-24">
        <LazyLoadImage
          src={imageCover}
          alt={name}
          className="object-cover absolute inset-0 size-full"
        />
        {discount && (
          <div className="relative px-1.5 mb-0 w-12 h-12 bg-red-400 rounded-full fill-red-400 max-md:mb-2.5">
            {discount}
          </div>
        )}
        {newItem && (
          <div className="relative px-1.5 mb-0 w-12 h-12 bg-emerald-400 rounded-full fill-emerald-400 max-md:mb-2.5">
            New
          </div>
        )}
      </Link>

      <div className="flex flex-col items-start px-4 pt-4 pb-8 w-full bg-gray-100">
        <Link to={redirectURL}>
          <h3 className="text-2xl font-semibold leading-tight text-neutral-700">
            {name}
          </h3>
        </Link>
        <p className="mt-2 text-base font-medium text-zinc-500">
          {!showMore
            ? description.split(" ").slice(0, 30).join(" ") + "..."
            : description}

          <button
            className="text-blue-500"
            onClick={() => setShowMore(!showMore)}>
            {showMore ? "less" : "more"}
          </button>
        </p>
        {/* <div className="flex gap-4 items-center self-stretch mt-2">
              <span className="self-stretch my-auto text-xl font-semibold text-neutral-700">
              {price}
              </span>
              {oldPrice && (
              <span className="self-stretch my-auto text-base text-zinc-400">
                {oldPrice}
              </span>
              )}
            </div> */}
      </div>
      <div className="flex gap-4 items-center self-stretch mt-2">
        <span className="self-stretch my-auto text-xl font-semibold text-neutral-700">
          {product.price}
        </span>
        <div className="flex items-center">
          <label
            htmlFor={`quantity-${_id}`}
            className="mr-2 text-base font-medium text-zinc-500">
            Quantity:
          </label>
          <input
            id={`quantity-${_id}`}
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-16 px-2 py-1 text-base border border-gray-300 rounded"
          />
        </div>
      </div>
      <div className="flex justify-between items-center px-4 py-2 bg-white border-t border-gray-200">
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={() => handleAddToCart()}>
          Add to Cart
        </button>

        <button
          onClick={handleMakePayment}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Buy Now
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
