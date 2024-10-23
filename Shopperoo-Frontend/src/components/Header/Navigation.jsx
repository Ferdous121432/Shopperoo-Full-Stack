/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const navItems = [
    // { title: "Home", url: "/" },
    // { title: "Product", url: "/product" },
    // { title: "Dashboard", url: "/dashboard" },
    // { title: "Contact", url: "/contact-us" },
    { title: "New Arrivals", url: "/new-arrivals" },
    { title: "Men", url: "/men" },
    { title: "Women", url: "/women" },
    { title: "Kids", url: "/kids" },
    { title: "Footwear", url: "/footwear" },
    { title: "Fragrance", url: "/fragrance" },
    { title: "Accessories", url: "/accessories" },
    { title: "Furniture", url: "/furniture" },
  ];

  return (
    <nav className="ml-5 hidden flex-col lg:flex">
      <ul className="text-base my-auto flex items-center justify-center gap-8 self-stretch whitespace-nowrap font-medium text-black">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="hover:border-yellow-primary hover:text-yellow-primary group relative"
          >
            <Link
              to={item.url.toLowerCase()}
              className="relative block cursor-pointer text-black no-underline transition-all duration-500 ease-in-out"
              style={{ fontSize: ".9rem", padding: "6px 0" }}
            >
              {item.title}
            </Link>
            <span className="bg-yellow-primary absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
