import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Constants from "../../../constants";
import Button from "../../reuseableComponents/Button";

export default function CartBuyWishButton({
  handleAddToCart,
  handleMakePayment,
}) {
  return (
    <div className="flex w-full flex-1 justify-center justify-items-stretch gap-8 bg-opacity-[.9] px-4 py-2 sm:gap-20">
      {/* <button
        onClick={handleAddToCart}
        className="rounded bg-yellow-primary px-4 py-2 text-white hover:bg-white-secondary hover:text-yellow-primary"
      >
        <ShoppingCartIcon />
      </button> */}
      <Button color={Constants.YELLOW_PRIMARY} handleClick={handleAddToCart}>
        ADD TO BAG
      </Button>
      <Button color={Constants.YELLOW_PRIMARY} handleClick={handleMakePayment}>
        Buy Now
      </Button>

      {/* <button
        // onClick={handleMakePayment}
        className="rounded bg-yellow-primary px-4 py-2 text-white hover:bg-white-secondary hover:text-yellow-primary"
      >
        <FavoriteIcon />
      </button> */}
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
      {/* <button
        onClick={handleMakePayment}
        className="rounded bg-yellow-primary px-4 py-2 text-white hover:bg-white-secondary hover:text-yellow-primary"
      >
        <LocalMallRoundedIcon />
      </button> */}
    </div>
  );
}
