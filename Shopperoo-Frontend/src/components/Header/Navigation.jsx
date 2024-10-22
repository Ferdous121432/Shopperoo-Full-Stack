/* eslint-disable */
import React from "react";

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
    <nav className="max-md:ml-0 max-md:w-full ml-5 hidden flex-col lg:flex">
      <ul className="max-md:mt-10 max-md:max-w-full my-auto flex items-center justify-center gap-8 self-stretch whitespace-nowrap text-base font-medium text-black">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="hover:border-b-2 hover:border-emarald-primary hover:text-emarald-primary"
          >
            <a href={item.url.toLowerCase()}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
