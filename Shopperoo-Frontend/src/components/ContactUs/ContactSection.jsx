/* eslint-disable */
import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

function ContactSection() {
  return (
    <section className="flex flex-col items-center px-20 pt-24 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-center w-full max-w-[1058px] max-md:max-w-full">
        <h2 className="text-4xl font-semibold text-black">
          Get In Touch With Us
        </h2>
        <p className="mt-2 text-base text-center text-neutral-400 w-[644px] max-md:max-w-full">
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
        <div className="self-stretch mt-3.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;