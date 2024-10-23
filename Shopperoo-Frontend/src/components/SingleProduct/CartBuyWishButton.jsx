import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CartBuyWishButton({
  handleAddToCart,
  handleMakePayment,
  handleChangeQuantity,
  quantity,
}) {
  return (
    <div className="flex w-full flex-1 justify-center justify-items-stretch gap-8 bg-opacity-[.9] px-4 py-2 sm:gap-20">
      <button
        onClick={handleAddToCart}
        className="bg-yellow-primary hover:text-yellow-primary rounded px-4 py-2 text-white hover:bg-white-secondary"
      >
        <ShoppingCartIcon />
      </button>

      <button
        // onClick={handleMakePayment}
        className="bg-yellow-primary hover:text-yellow-primary rounded px-4 py-2 text-white hover:bg-white-secondary"
      >
        <FavoriteIcon />
      </button>
      {/* <div className="flex items-center">
      <input
        id={`quantity-${_id}`}
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="w-16 rounded border border-gray-300 px-2 py-1 text-center text-base"
      />
    </div> */}
      <button
        onClick={handleMakePayment}
        className="bg-yellow-primary hover:text-yellow-primary rounded px-4 py-2 text-white hover:bg-white-secondary"
      >
        <LocalMallRoundedIcon />
      </button>
    </div>
  );
}
