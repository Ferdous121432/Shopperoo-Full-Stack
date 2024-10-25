/* eslint-disable */
import React, { useEffect, useState } from "react";
import QuantitySelector from "./QuantitySelector";
import { addToCart } from "../../api/apiCart";

import { useAuth } from "../../context/AuthProvider";
import { makePayment } from "../../api/apiCheckout";
import ResponsiveImage from "../../reuseableComponents/ResponsiveImage";
import GalaryImageList from "../../reuseableComponents/GalaryImageList";
import ProductTop from "./ProductTop";
import CustopTabs from "./CustomTabs";
import { baseURL } from "../../api/apiURL";

const ProductDetails = ({ product }) => {
  const { state } = useAuth();
  const { name, price, old_price, imageCover, images, _id } = product;

  const [imageIndex, setImageIndex] = useState(0);

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
    image: images[0],
    subtotal: price * quantity,
    product_spec: [
      {
        key: "Color",
        value: color,
      },
      {
        key: "Size",
        value: sizes,
      },
    ],
  };

  const checkout_productDetails = [checkout_product];

  const cart_productDetails = {
    product_id: _id,
    image: images[0],
    quantity: quantity,
    productName: name,
    price: price,
    subtotal: price * quantity,
    product_spec: [
      {
        key: "Color",
        value: color,
      },
      {
        key: "Size",
        value: sizes,
      },
    ],
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

  const [image, setImage] = useState(images[imageIndex]);
  console.log(image);
  useEffect(() => {
    setImage(images[imageIndex]);
  }, [imageIndex]);

  return (
    <section className="flex max-w-[1200px] flex-col flex-wrap items-center justify-center bg-white px-4 pb-14 pt-9 sm:px-10 md:px-20 lg:flex-row lg:items-start lg:gap-10">
      <div className="flex flex-col gap-6 lg:w-[30%]">
        <div className="">
          <img
            src={`${baseURL}/img/products/images/${image}`}
            alt={name}
            className="h-[400px] w-full object-cover"
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
