/* eslint-disable */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../api/apiProduct";
import { frontendURL } from "../../frontendURL/frontendURL";

function Navigation() {
  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      console.log(categories.data.categories);
    };
    fetchCategories();
  }, []);

  const navItems = [
    // { title: "Home", url: "/" },
    // { title: "Product", url: "/product" },
    // { title: "Dashboard", url: "/dashboard" },
    // { title: "Contact", url: "/contact-us" },
    {
      title: "New Arrivals",
      url: "new-arrivals",
      id: "671b3f3f7169d20734e3645c",
    },
    { title: "Men", url: "men", id: "66ebd7abb5d3c708b4f5da07" },
    { title: "Women", url: "women", id: "671b3c7b7169d20734e36454" },
    { title: "Kids", url: "kids", id: "671b3c9d7169d20734e36455" },
    { title: "Footwear", url: "footwear", id: "671b3cc27169d20734e36456" },
    { title: "Fragrance", url: "fragrance", id: "671b3cf77169d20734e36457" },
    {
      title: "Accessories",
      url: "/accessories",
      id: "671b3d187169d20734e36458",
    },
    { title: "Furniture", url: "/furniture", id: "671b3d187169d20734e36458" },
  ];

  return (
    <nav className="ml-5 hidden flex-col lg:flex">
      <ul className="text-base my-auto flex items-center justify-center gap-8 self-stretch whitespace-nowrap font-medium text-black">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="group relative hover:border-yellow-primary hover:text-yellow-primary"
          >
            <Link
              to={`${frontendURL()}/category/${item.id}`}
              className="relative block cursor-pointer py-2 text-sm text-black no-underline transition-all duration-500 ease-in-out md:text-md lg:text-lg xl:text-xl"
            >
              {item.title}
            </Link>
            <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 bg-yellow-primary transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
