/* eslint-disable */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
  faUser,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function SocialIcons() {
  return (
    <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
      <div className="flex gap-10 self-stretch my-auto max-md:mt-10">
        <Link to="/wishlist">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
        <Link to="/signin">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </div>
  );
}

export default SocialIcons;
