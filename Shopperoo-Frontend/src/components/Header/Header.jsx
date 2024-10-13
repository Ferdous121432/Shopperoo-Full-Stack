/* eslint-disable */
import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import SocialIcons from './SocialIcons';

function Header() {
  return (
    <header className="px-16 py-8 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <Logo />
        <Navigation />
        <SocialIcons />
      </div>
    </header>
  );
}

export default Header;