/* eslint-disable */
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useAuth } from "../../context/AuthProvider";
import { addToCart } from "../../api/apiCart";
import { Link } from "react-router-dom";
import { makePayment } from "../../api/apiCheckout";
import { baseURL } from "../../api/apiURL";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";

const ProductCard = ({ product }) => {
  const {
    name,
    price,
    old_price,
    discount,
    newItem,
    slug,
    description,
    summary,
    imageCover,
    _id,
  } = product;
  const [showMore, setShowMore] = React.useState(false);
  // const newItem = true;
  // const discount = "30%";
  const { state } = useAuth();
  const redirectURL = `http://localhost:5173/product/${_id}`;

  const [quantity, setQuantity] = useState(1);

  const checkout_product = {
    product_id: _id,
    quantity,
    productName: name,
    price,
    old_price,
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
    old_price: old_price,
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
      className="group my-auto flex w-[285px] min-w-[240px] flex-col self-stretch"
      data-id={_id}
    >
      <div>
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
          <div className="mt-2 flex items-center gap-4 self-stretch">
            <span className="text-neutral-700 my-auto self-stretch text-xl font-semibold">
              {price}
            </span>
            {old_price && (
              <span className="text-zinc-400 my-auto self-stretch text-base">
                {old_price}
              </span>
            )}
          </div>
        </div>
        <div className="mt-2 flex items-center gap-4 self-stretch">
          <span className="text-neutral-700 my-auto self-stretch text-xl font-semibold">
            {product.price}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-2 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <button
          className="bg-emerald-700 rounded px-4 py-2 text-white hover:bg-blue-600"
          onClick={() => handleAddToCart()}
        >
          Add to Cart
        </button>
        <div className="flex items-center">
          {/* <label
            htmlFor={`quantity-${_id}`}
            className="text-zinc-500 mr-2 text-center text-base font-medium"
          >
            Quantity:
          </label> */}
          <input
            id={`quantity-${_id}`}
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-16 rounded border border-gray-300 px-2 py-1 text-center text-base"
          />
        </div>
        <button
          onClick={handleMakePayment}
          className="bg-emarald-primary rounded bg-transparent px-4 py-2 text-white hover:bg-blue-600"
        >
          <LocalMallRoundedIcon />
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
