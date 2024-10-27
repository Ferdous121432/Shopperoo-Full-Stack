/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const columns = [
    {
      title: "Links",
      items: ["Home", "Shop", "About", "Contact"],
    },
    {
      title: "Help",
      items: ["Payment Options", "Returns", "Privacy Policies"],
    },
  ];

  const footerText = [
    {
      title: "Contact",
      items: [
        "Terms & Conditions",
        "Privacy Policy",
        "Return Policy",
        "Shipping Policy",
      ],
    },
    {
      title: "Information",
      items: [
        "Exchange & Refund",
        "Size Guide",
        "Loyalty Program",
        "Display Centers",
      ],
    },
    {
      title: "Company",
      items: ["About Us", "Contact Us", "Intellectual Property"],
    },
  ];

  return (
    <footer className="w-full leading-5">
      <div className="grid grid-cols-1 justify-between gap-12 px-14 py-10 font-semibold sm:grid-cols-2 lg:grid-cols-4">
        {footerText.map((column, index) => (
          <div key={index} className="flex flex-col">
            <h2 className="pb-3 text-xl font-semibold">{column.title}</h2>
            <ul className="flex flex-col gap-2">
              {column.items.map((item, index) => (
                <li
                  key={index}
                  className="group relative hover:border-yellow-primary hover:text-yellow-primary"
                >
                  <Link
                    to="/"
                    className="relative block cursor-pointer text-black no-underline transition-all duration-500 ease-in-out"
                  >
                    {item}
                  </Link>
                  <span className="absolute bottom-[-5px] left-0 h-0.5 w-full scale-x-0 bg-yellow-primary transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="w-full">
          <h2 className="pb-3 text-xl">You can pay by</h2>
          <div className="flex w-4/5 max-w-[260px] flex-wrap items-start justify-start gap-3">
            <img
              src="./image/payment/visa.jpg"
              className="w-[70px]"
              alt="visa"
            />
            <img src="./image/payment/ae.jpg" className="w-[70px]" alt="visa" />
            <img
              src="./image/payment/mastercard.jpg"
              className="w-[70px]"
              alt="visa"
            />
            <img
              src="./image/payment/bkash.jpg"
              className="w-[70px]"
              alt="visa"
            />
            <img
              src="./image/payment/rocket.jpg"
              className="w-[70px]"
              alt="visa"
            />
            <img
              src="./image/payment/nagad.jpg"
              className="w-[70px]"
              alt="visa"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full bg-black-primary py-4">
        <p className="text-bold mt-2 w-full self-stretch text-center text-white-primary">
          &copy; 2023 Shopperoo All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
