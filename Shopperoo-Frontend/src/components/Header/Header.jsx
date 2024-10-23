/* eslint-disable */
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";

function Header({ setHeaderHeight }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = React.createRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const calculateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", calculateHeight);
    calculateHeight();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", calculateHeight);
    };
  }, [headerRef]);

  return (
    <header
      ref={headerRef}
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
