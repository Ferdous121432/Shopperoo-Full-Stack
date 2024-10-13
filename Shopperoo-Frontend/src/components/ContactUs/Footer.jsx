/* eslint-disable */
import React from 'react';
import FooterLinks from './FooterLinks';
import NewsletterForm from './NewsletterForm';

function Footer() {
  return (
    <footer className="flex flex-col items-start px-20 py-11 mt-8 w-full bg-white border-t border-black border-opacity-20 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start w-full max-w-[1133px] max-md:max-w-full">
        <div className="flex flex-col">
          <h2 className="self-start text-2xl font-bold text-black">Funiro.</h2>
          <address className="mt-12 text-base text-neutral-400 max-md:mt-10 not-italic">
            400 University Drive Suite 200 Coral Gables,<br />
            FL 33134 USA
          </address>
        </div>
        <FooterLinks />
        <NewsletterForm />
      </div>
      <hr className="shrink-0 self-center mt-12 max-w-full h-px border border-solid border-zinc-300 w-[1240px] max-md:mt-10" />
      <p className="mt-9 text-base text-black">2023 furino. All rights reverved</p>
    </footer>
  );
}

export default Footer;