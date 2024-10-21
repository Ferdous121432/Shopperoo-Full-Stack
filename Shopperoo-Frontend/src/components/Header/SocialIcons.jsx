/* eslint-disable */
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import Constants from "../../../constants";

import BasicMenu from "./BasicMenu";

const color = import.meta.env.COLOR_EMARALD_800;
function SocialIcons() {
  console.log(color);
  return (
    <div className="max-md:ml-0 max-md:w-full ml-5 flex w-[29%] flex-col">
      <div className="max-md:mt-10 my-auto flex items-center gap-4 self-stretch">
        <Link to="/cart">
          <ShoppingCartIcon
            className="cursor-pointer"
            fontSize="large"
            style={{ color: Constants.EMARALD_PRIMARY }}
          />
        </Link>
        <BasicMenu />
      </div>
    </div>
  );
}

export default SocialIcons;
