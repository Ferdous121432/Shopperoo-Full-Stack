/* eslint-disable */
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-yellow-50 px-4 transition-all duration-300 md:px-16 ${
        isScrolled ? "py-1 md:py-3" : "py-4 md:py-4"
      }`}
    >
      <div className="flex flex-col gap-2">
        <div className="relative flex flex-1 flex-row justify-between">
          <Logo isScrolled={isScrolled} />
          {isScrolled && <Navigation />}

          <div className="flex max-w-[2/5] items-center justify-end">
            <SocialIcons isScrolled={isScrolled} />
          </div>
        </div>

        {!isScrolled && <Navigation />}
      </div>
    </header>
  );
}

export default Header;
