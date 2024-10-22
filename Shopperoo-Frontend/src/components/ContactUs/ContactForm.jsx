/* eslint-disable */
import React from "react";
import Button from "../../reuseableComponents/Button";

function ContactForm() {
  return (
    <div className="max-md:ml-0 max-md:w-full ml-5 flex w-[62%] flex-col">
      <form className="max-md:px-5 max-md:pt-24 max-md:mt-8 max-md:max-w-full flex w-full grow flex-col items-start bg-white px-14 pb-16 pt-28 text-base text-black">
        <label htmlFor="name" className="font-medium">
          Your name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Abc"
          className="max-md:px-5 max-md:max-w-full mt-6 self-stretch whitespace-nowrap rounded-xl border border-solid border-neutral-400 bg-white px-8 py-7 text-neutral-400"
        />

        <label htmlFor="email" className="mt-9 font-medium">
          Email address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Abc@def.com"
          className="max-md:px-5 max-md:max-w-full mt-6 self-stretch whitespace-nowrap rounded-xl border border-solid border-neutral-400 bg-white px-8 py-7 text-neutral-400"
        />

        <label htmlFor="subject" className="mt-9 font-medium">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          placeholder="This is an optional"
          className="max-md:px-5 max-md:max-w-full mt-6 self-stretch rounded-xl border border-solid border-neutral-400 bg-white px-8 py-7 text-neutral-400"
        />

        <label htmlFor="message" className="mt-9 font-medium">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Hi! i'd like to ask about"
          className="max-md:px-5 max-md:mr-1 max-md:max-w-full mt-6 self-stretch rounded-xl border border-solid border-neutral-400 bg-white px-8 pb-16 pt-7 text-neutral-400"
        ></textarea>

        <Button color="#115e59">Submit</Button>
      </form>
    </div>
  );
}

export default ContactForm;
