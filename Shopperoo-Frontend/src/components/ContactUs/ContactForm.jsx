/* eslint-disable */
import React from 'react';

function ContactForm() {
  return (
    <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
      <form className="flex flex-col grow items-start px-14 pt-28 pb-16 w-full text-base text-black bg-white max-md:px-5 max-md:pt-24 max-md:mt-8 max-md:max-w-full">
        <label htmlFor="name" className="font-medium">Your name</label>
        <input
          type="text"
          id="name"
          placeholder="Abc"
          className="self-stretch px-8 py-7 mt-6 whitespace-nowrap bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400 max-md:px-5 max-md:max-w-full"
        />

        <label htmlFor="email" className="mt-9 font-medium">Email address</label>
        <input
          type="email"
          id="email"
          placeholder="Abc@def.com"
          className="self-stretch px-8 py-7 mt-6 whitespace-nowrap bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400 max-md:px-5 max-md:max-w-full"
        />

        <label htmlFor="subject" className="mt-9 font-medium">Subject</label>
        <input
          type="text"
          id="subject"
          placeholder="This is an optional"
          className="self-stretch px-8 py-7 mt-6 bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400 max-md:px-5 max-md:max-w-full"
        />

        <label htmlFor="message" className="mt-9 font-medium">Message</label>
        <textarea
          id="message"
          placeholder="Hi! i'd like to ask about"
          className="self-stretch px-8 pt-7 pb-16 mt-6 bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400 max-md:px-5 max-md:mr-1 max-md:max-w-full"
        ></textarea>

        <button type="submit" className="px-16 pt-3.5 pb-7 mt-12 max-w-full text-white whitespace-nowrap bg-yellow-600 rounded-md border border-yellow-600 border-solid w-[237px] max-md:px-5 max-md:mt-10">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;