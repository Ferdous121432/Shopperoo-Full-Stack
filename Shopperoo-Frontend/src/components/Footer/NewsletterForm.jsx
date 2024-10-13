/* eslint-disable */
import React from 'react';

const NewsletterForm = () => {
  return (
    <div className="flex flex-col w-full max-md:mt-10">
      <h3 className="self-start text-base font-medium text-neutral-400">Newsletter</h3>
      <form className="flex gap-3 mt-14 text-sm max-md:mt-10">
        <div className="flex flex-col text-neutral-400">
          <label htmlFor="emailInput" className="sr-only">Enter Your Email Address</label>
          <input
            type="email"
            id="emailInput"
            placeholder="Enter Your Email Address"
            className="border-b border-black"
            required
          />
        </div>
        <button type="submit" className="font-medium text-black whitespace-nowrap border-b border-black">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;