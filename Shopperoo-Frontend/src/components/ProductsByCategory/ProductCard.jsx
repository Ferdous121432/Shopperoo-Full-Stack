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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { frontendURL } from "../../frontendURL/frontendURL";

const ProductCard = ({ product }) => {
  const {
    name,
    product_code,
    price,
    old_price,
    discount,
    newItem,
    slug,
    description,
    details,
    imageCover,
    images,
    _id,
  } = product;

  const { state } = useAuth();
  const redirectURL = `${frontendURL()}/product/${_id}`;

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
    // image: imageCover.split("/").slice(-1).join(),
    image: images[0],
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
    <article className="flex w-[90%] min-w-[240px] flex-col sm:w-[45%] md:w-[30%] xl:w-[22%]">
      <Link to={redirectURL}>
        <div className="text-base max-md:px-5 max-md:pb-24 relative flex aspect-[0.947] w-full flex-col items-end whitespace-nowrap px-7 pb-56 pt-6 font-medium text-white">
          <img
            loading="lazy"
            src={images[0]}
            alt={name}
            className="absolute inset-0 size-full object-cover"
            onMouseOver={(e) => (e.currentTarget.src = images[1])}
            onMouseOut={(e) => (e.currentTarget.src = images[0])}
          />
          {discount && (
            <div className="relative mb-0 h-12 w-12 rounded-full bg-red-400 fill-red-400 px-1.5">
              <span className="transform-middle text-sm font-semibold text-slate-100">
                {discount}
              </span>
            </div>
          )}
          {newItem && (
            <div className="relative h-12 w-12 rounded-full bg-teal-800">
              <span className="transform-middle text-sm font-semibold text-slate-100">
                New
              </span>
            </div>
          )}
        </div>
        <div className="flex w-full flex-col items-start bg-gray-100 px-4 pb-8 pt-4">
          <h3 className="text-lg leading-tight text-neutral-700">{name}</h3>
          <p className="text-base mt-2 font-medium text-slate-500">
            Product Code: {product_code}
          </p>
          <div className="mt-2 flex items-center gap-4 self-stretch">
            <span className="my-auto self-stretch text-xl font-semibold text-black-primary">
              <span>BDT </span>{" "}
              {price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </span>
            {old_price && (
              <span className="my-auto self-stretch text-lg line-through decoration-red-700 decoration-2">
                {old_price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
              </span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
