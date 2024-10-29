import React from "react";
import SizeColorSelector from "./SizeColorSelector";
import ProductHead from "./ProductHead";
import CartBuyWishButton from "./CartBuyWishButton";

export default function ProductTop({
  name,
  price,
  old_price,
  product,
  handleAddToCart,
  handleMakePayment,
  handleChangeSizes,
  handleChangeColor,
  handleChangeQuantity,
  color,
  sizes,
  quantity,
}) {
  return (
    <div className="flex flex-col gap-10">
      <ProductHead
        name={name}
        price={price}
        old_price={old_price}
        product={product}
      />
      {/* <hr className="my-4 border-t border-gray-300" /> */}
      <SizeColorSelector
        handleChangeSizes={handleChangeSizes}
        handleChangeColor={handleChangeColor}
        handleChangeQuantity={handleChangeQuantity}
        quantity={quantity}
        color={color}
        sizes={sizes}
      />
      {/* <hr className="my-4 border-t border-gray-300" /> */}
      <CartBuyWishButton
        handleAddToCart={handleAddToCart}
        handleMakePayment={handleMakePayment}
      />
      {/* <hr className="my-4 border-t border-gray-300" /> */}
    </div>
  );
}
