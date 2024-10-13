/* eslint-disable */
import React, { useState } from "react";
import { deleteFromCart } from "../../api/apiCart";
import { useAuth } from "../../context/AuthProvider";

const CartItem = ({ item }) => {
  const { state } = useAuth();
  const { token } = state;

  const [itemQuantity, setQuantity] = useState(item.quantity);

  const handleDelete = async (e) => {
    try {
      e.preventDefault();
      await deleteFromCart(item, token);
      // Remove the item from the front end without reloading
      document.getElementById(`${item._id}`).remove();
    } catch (error) {
      console.error("Error deleting product from cart:", error);
    }
  };

  const { image, productName, price, quantity, subtotal, _id } = item;
  const handleIncreaseQuantity = () => {
    if (itemQuantity < 10) {
      setQuantity(itemQuantity + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (itemQuantity > 1) {
      setQuantity(itemQuantity - 1);
    }
  };

  return (
    <div id={`${_id}`} className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
        <div className="flex grow gap-9 text-base text-neutral-400 max-md:mt-10">
          <img
            loading="lazy"
            src={image}
            alt={productName}
            className="object-contain shrink-0 max-w-full rounded-none aspect-[1.03] w-[54px]" // Adjusted width for smaller image
            srcSet={`${image}?w=54&h=54&fit=crop&auto=format 1x, ${image}?w=108&h=108&fit=crop&auto=format 2x`} // Adjusted srcSet for smaller image
          />
          <div className="grow shrink my-auto w-[86px]">{productName}</div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
        <div className="flex gap-10 self-stretch my-auto text-base text-black max-md:mt-10 max-md:max-w-full">
          <div className="my-auto basis-auto text-neutral-400">{price}</div>
          <div className="flex items-center">
            <button
              onClick={handleDecreaseQuantity}
              className="px-2 py-1 border border-neutral-400 rounded-l-md">
              -
            </button>
            <input
              id={`quantity-${_id}`}
              type="number"
              min="1"
              max="10"
              className="w-16 px-2 py-1 text-base border border-gray-300 rounded"
              value={itemQuantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button
              onClick={handleIncreaseQuantity}
              className="px-2 py-1 border border-neutral-400 rounded-r-md">
              +
            </button>
          </div>
          <div className="my-auto basis-auto">{subtotal}</div>
          <button aria-label="Remove item" onClick={handleDelete}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/73d80f01b0cdb1210a1c0aac3f437db9c22d7bbbe5b14bb4e8efdde8828e5edb?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
              alt="Remove"
              className="object-contain shrink-0 self-start w-7 aspect-square"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
