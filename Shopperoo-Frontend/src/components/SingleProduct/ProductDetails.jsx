/* eslint-disable */
import React, { useState } from "react";
import QuantitySelector from "./QuantitySelector";
import { addToCart } from "../../api/apiCart";

import { useAuth } from "../../context/AuthProvider";
import { makePayment } from "../../api/apiCheckout";

const ProductDetails = ({ product }) => {
  const { state } = useAuth();
  const [quantity, setQuantity] = useState(1);
  const { name, price, imageCover, _id } = product;

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
    image: imageCover?.split("/").slice(-1).join(),
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
    <section className="flex w-full flex-col items-center bg-white px-20 pb-14 pt-9 max-md:max-w-full max-md:px-5">
      <div className="w-full max-w-[1217px] self-start max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={product.imageCover}
              alt={product.name}
              className="aspect-[1.11] w-full grow rounded-none object-contain max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="ml-5 flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
            <div className="flex w-full flex-col items-start max-md:mt-10 max-md:max-w-full">
              <h1 className="text-5xl text-black">{product.name}</h1>
              <div className="text-neutral-400 text-2xl font-medium">
                Rs. {(product.price ?? 0).toFixed(2)}
              </div>

              <p className="mt-3.5 text-sm text-black">{product.description}</p>
              {/* <SizeSelector sizes={product.sizes} />
              <ColorSelector colors={product.colors} /> */}
              <div className="mt-8 flex w-full flex-wrap gap-4 self-stretch text-black max-md:max-w-full">
                <QuantitySelector
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
                <button
                  onClick={handleAddToCart}
                  className="rounded-2xl border border-solid border-black px-12 py-4 text-xl max-md:px-5"
                >
                  Add To Cart
                </button>
                {/* <Link
                  to={`http://localhost:5173/checkout/${_id}?quantity=${quantity}`}> */}
                <button
                  onClick={handleMakePayment}
                  className="flex flex-col justify-center whitespace-nowrap rounded-2xl border border-solid border-black px-12 py-4 max-md:px-5"
                >
                  <div className="flex items-center justify-center gap-2.5">
                    <span className="my-auto self-stretch text-xl">
                      Buy Now
                    </span>
                  </div>
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Additional product details */}
    </section>
  );
};

export default ProductDetails;
