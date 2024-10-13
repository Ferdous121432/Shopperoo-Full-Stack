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
  const productDetails = {
    product_id: _id,
    image: imageCover.split("/").slice(-1).join(),
    quantity: quantity,
    productName: name,
    price: price,
    subtotal: price * quantity,
  };
  // console.log(productDetails);
  // console.log(state.token);

  const handleAddToCart = async () => {
    addToCart(productDetails, state.token);
    setQuantity(1);
  };

  const handleMakePayment = async () => {
    makePayment(productDetails, state.token);
    setQuantity(1);
  };

  return (
    <section className="flex flex-col items-center px-20 pt-9 pb-14 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="self-start w-full max-w-[1217px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={product.imageCover}
              alt={product.name}
              className="object-contain grow w-full rounded-none aspect-[1.11] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
              <h1 className="text-5xl text-black">{product.name}</h1>
              <div className="text-2xl font-medium text-neutral-400">
                Rs. {(product.price ?? 0).toFixed(2)}
              </div>

              <p className="mt-3.5 text-sm text-black">{product.description}</p>
              {/* <SizeSelector sizes={product.sizes} />
              <ColorSelector colors={product.colors} /> */}
              <div className="flex flex-wrap gap-4 self-stretch mt-8 w-full text-black max-md:max-w-full">
                <QuantitySelector
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
                <button
                  onClick={handleAddToCart}
                  className="px-12 py-4 text-xl rounded-2xl border border-black border-solid max-md:px-5">
                  Add To Cart
                </button>
                {/* <Link
                  to={`http://localhost:5173/checkout/${_id}?quantity=${quantity}`}> */}
                <button
                  onClick={handleMakePayment}
                  className="flex flex-col justify-center px-12 py-4 whitespace-nowrap rounded-2xl border border-black border-solid max-md:px-5">
                  <div className="flex gap-2.5 justify-center items-center">
                    <span className="self-stretch my-auto text-xl">
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
