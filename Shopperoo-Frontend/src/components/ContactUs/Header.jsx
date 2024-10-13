/* eslint-disable */
import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import SocialIcons from './SocialIcons';

function Header() {
  return (
    <header className="px-16 py-8 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
          <Logo />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <Navigation />
        </div>
        <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
          <SocialIcons />
        </div>
      </div>
    </header>
  );
}

export default Header;