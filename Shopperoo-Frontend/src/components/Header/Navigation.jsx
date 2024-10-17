/* eslint-disable */
import React from "react";

function Navigation() {
  const navItems = [
    { title: "Home", url: "/" },
    { title: "Product", url: "/product" },
    { title: "Dashboard", url: "/dashboard" },
    { title: "Contact", url: "/contact-us" },
  ];

  return (
    <nav className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <ul className="flex gap-10 self-stretch my-auto text-base font-medium text-black whitespace-nowrap max-md:mt-10 max-md:max-w-full">
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.url.toLowerCase()}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
