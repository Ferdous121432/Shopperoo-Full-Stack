/* eslint-disable */
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { Link } from "react-router-dom";
import Constants from "../../../constants";

import BasicMenu from "./BasicMenu";
import MobileNavigation from "./MobileNavigation";

const color = import.meta.env.COLOR_EMARALD_800;
function SocialIcons({ isScrolled }) {
  console.log(color);
  return (
    <div
      className={`max-md:ml-0 max-md:w-full max-md:mt-10 my-auto ml-5 flex max-w-[2/5] flex-row items-center justify-end gap-1 self-stretch md:gap-2`}
    >
      <Link to="/cart">
        <ShoppingCartIcon
          className="cursor-pointer"
          fontSize="large"
          style={{ color: Constants.EMARALD_PRIMARY }}
        />
      </Link>
      <BasicMenu />
      <div className="lg:hidden">
        {/* <MenuTwoToneIcon
            sx={{
              fontSize: "3rem",
              color: Constants.EMARALD_PRIMARY,
            }}
          /> */}
        <MobileNavigation />
      </div>
    </div>
  );
}

export default SocialIcons;
