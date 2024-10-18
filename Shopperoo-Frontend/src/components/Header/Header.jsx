/* eslint-disable */
import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SocialIcons from "./SocialIcons";

function Header() {
  return (
    <header className="px-4 py-8 w-full bg-white md:px-16">
      <div className="flex flex-col gap-5 md:flex-row md:items-center">
        <Logo />
        <Navigation />
        <SocialIcons />
      </div>
    </header>
  );
}

export default Header;
