/* eslint-disable */
import React, { useState } from "react";
import { deleteFromCart } from "../../api/apiCart";
import { useAuth } from "../../context/AuthProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "../../reuseableComponents/Button";
import Constants from "../../../constants";

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
    <div id={`${_id}`} className="max-md:flex-col flex gap-5">
      <div className="max-md:ml-0 max-md:w-full flex w-[35%] flex-col">
        <div className="max-md:mt-10 flex grow gap-9 text-base text-neutral-400">
          <img
            loading="lazy"
            src={image}
            alt={productName}
            className="aspect-[1.03] w-[54px] max-w-full shrink-0 rounded-none object-contain" // Adjusted width for smaller image
            srcSet={`${image}?w=54&h=54&fit=crop&auto=format 1x, ${image}?w=108&h=108&fit=crop&auto=format 2x`} // Adjusted srcSet for smaller image
          />
          <div className="my-auto w-[86px] shrink grow">{productName}</div>
        </div>
      </div>
      <div className="max-md:ml-0 max-md:w-full ml-5 flex w-[65%] flex-col">
        <div className="max-md:mt-10 max-md:max-w-full my-auto flex gap-10 self-stretch text-base text-black">
          <div className="my-auto basis-auto text-neutral-400">{price}</div>
          <div className="flex items-center">
            <button
              onClick={handleDecreaseQuantity}
              className="rounded-l-md border border-neutral-400 px-2 py-1"
            >
              -
            </button>
            <input
              id={`quantity-${_id}`}
              type="number"
              min="1"
              max="10"
              className="w-16 rounded border border-gray-300 px-2 py-1 text-base"
              value={itemQuantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button
              onClick={handleIncreaseQuantity}
              className="rounded-r-md border border-neutral-400 px-2 py-1"
            >
              +
            </button>
          </div>
          <div className="my-auto basis-auto">{subtotal}</div>
          <Button color={Constants.EMARALD_PRIMARY} handleClick={handleDelete}>
            <DeleteIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
