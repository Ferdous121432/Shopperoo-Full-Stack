/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex flex-col items-start px-20 py-11 w-full bg-white border-t border-black border-opacity-20 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start w-full max-w-[1133px] max-md:max-w-full">
        <div className="flex flex-col">
          <div className="self-start text-2xl font-bold text-black">
            Funiro.
          </div>
          <address className="mt-12 text-base text-neutral-400 not-italic max-md:mt-10">
            400 University Drive Suite 200 Coral Gables,<br />
            FL 33134 USA
          </address>
        </div>
        <nav className="flex flex-col items-start self-stretch text-base font-medium text-black whitespace-nowrap">
          <h2 className="text-neutral-400">Links</h2>
          <ul className="mt-14 space-y-12 max-md:mt-10 max-md:space-y-10">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex-auto max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <nav className="flex flex-col grow items-start text-base font-medium text-black max-md:mt-10">
                <h2 className="text-neutral-400">Help</h2>
                <ul className="mt-14 space-y-12 max-md:mt-10 max-md:space-y-10">
                  <li><Link to="/payment-options">Payment Options</Link></li>
                  <li><Link to="/returns">Returns</Link></li>
                  <li><Link to="/privacy-policies">Privacy Policies</Link></li>
                </ul>
              </nav>
            </div>
            <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-10">
                <h2 className="self-start text-base font-medium text-neutral-400">
                  Newsletter
                </h2>
                <form className="flex gap-3 mt-14 text-sm max-md:mt-10">
                  <label htmlFor="email-input" className="sr-only">Enter Your Email Address</label>
                  <input
                    type="email"
                    id="email-input"
                    placeholder="Enter Your Email Address"
                    className="flex-grow text-neutral-400 border-b border-black"
                    required
                  />
                  <button type="submit" className="font-medium text-black whitespace-nowrap border-b border-black">
                    SUBSCRIBE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 self-center mt-12 max-w-full h-px border border-solid border-zinc-300 w-[1240px] max-md:mt-10" />
      <div className="mt-9 text-base text-black">
        2023 furino. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;