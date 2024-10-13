/* eslint-disable */
import React from 'react';

function NewsletterForm() {
  return (
    <div className="flex-auto max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-full max-md:mt-10">
          <h3 className="self-start text-base font-medium text-neutral-400">Newsletter</h3>
          <form className="flex gap-3 mt-14 text-sm max-md:mt-10">
            <label htmlFor="email" className="sr-only">Enter Your Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email Address"
              className="flex-grow text-neutral-400 border-b border-black"
              required
            />
            <button
              type="submit"
              className="font-medium text-black whitespace-nowrap border-b border-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewsletterForm;