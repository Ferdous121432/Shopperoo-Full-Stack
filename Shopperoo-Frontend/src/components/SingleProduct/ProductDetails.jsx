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

  const [color, setColor] = React.useState("green");
  const [sizes, setSizes] = React.useState("M");
  const [quantity, setQuantity] = useState(1);
  const handleChangeColor = (event) => {
    setColor(event.target.value);
    console.log(color);
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
    color,
    size: sizes,
    productName: name,
    price,
    image: images[0].split("/").slice(-1).join(),
    subtotal: price * quantity,
  };

  const checkout_productDetails = [checkout_product];

  const cart_productDetails = {
    product_id: _id,
    image: images[0].split("/").slice(-1).join(),
    quantity: quantity,
    color: color,
    size: sizes,
    productName: name,
    price: price,
    subtotal: price * quantity,
    product_spec: { color, sizes },
  };
  console.log(cart_productDetails);

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
      content: product.details ? product.details : "No details available",
    },
    {
      label: "Description",
      value: "1",
      content: product.description
        ? product.description
        : "No description available",
    },
    {
      label: "Reviews",
      value: "2",
      content:
        product.reviews?.length > 0 ? (
          product.reviews.map((review) => (
            <div key={review._id}>
              <h1>{review.name}</h1>
              <p>{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet</p>
        ),
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
            src={`${image}`}
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
