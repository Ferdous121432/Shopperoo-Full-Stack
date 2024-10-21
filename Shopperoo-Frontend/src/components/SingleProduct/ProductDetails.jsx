/* eslint-disable */
import React, { useState } from "react";
import QuantitySelector from "./QuantitySelector";
import { addToCart } from "../../api/apiCart";

import { useAuth } from "../../context/AuthProvider";
import { makePayment } from "../../api/apiCheckout";
import ResponsiveImage from "../../reuseableComponents/ResponsiveImage";
import GalaryImageList from "../../reuseableComponents/GalaryImageList";
import ProductTop from "./ProductTop";
import CustopTabs from "./CustomTabs";

const ProductDetails = ({ product }) => {
  const { state } = useAuth();
  const { name, price, old_price, imageCover, images, _id } = product;

  const [imageIndex, setImageIndex] = useState(3);

  const [color, setColor] = React.useState("");
  const [sizes, setSizes] = React.useState("");
  const [quantity, setQuantity] = useState(1);

  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };

  const handleChangeSizes = (event) => {
    setSizes(event.target.value);
  };

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

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

  const tabData = [
    {
      label: "Specification",
      value: "0",
      content:
        "This is the specification content. Here you can add details about the product specifications.",
    },
    {
      label: "Description",
      value: "1",
      content:
        "This is the description content. Here you can add a detailed description of the product.",
    },
    {
      label: "Reviews",
      value: "2",
      content:
        "This is the reviews content. Here you can add customer reviews and ratings.",
    },
  ];

  return (
    <section className="flex max-w-[1200px] flex-col flex-wrap items-center justify-center bg-white px-4 pb-14 pt-9 sm:px-10 md:px-20 lg:flex-row lg:items-start lg:gap-10">
      <div className="flex flex-col gap-6 lg:w-[30%]">
        <div className="">
          <ResponsiveImage
            src={`http://localhost:3000/img/products/images/${images[imageIndex]}`}
            alt={name}
            sizes={{ large: imageCover }}
          />
        </div>
        <div className="w-full">
          <GalaryImageList images={images} setImageIndex={setImageIndex} />
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-6 sm:mt-8 lg:mt-0 lg:w-[60%]">
        <ProductTop
          name={name}
          price={price}
          old_price={old_price}
          product={product}
          handleAddToCart={handleAddToCart}
          handleMakePayment={handleMakePayment}
          handleChangeSizes={handleChangeSizes}
          handleChangeColor={handleChangeColor}
          handleChangeQuantity={handleChangeQuantity}
          color={color}
          sizes={sizes}
          quantity={quantity}
        />
      </div>
      <CustopTabs
        tabData={tabData}
        flexDirection="column"
        orientation={"horizontal"}
      />
    </section>
  );
};

export default ProductDetails;
