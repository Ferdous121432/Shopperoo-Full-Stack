/* eslint-disable */
import React from 'react';

function Navigation() {
  const navItems = ['Home', 'Shop', 'About', 'Contact'];

  return (
    <nav className="flex gap-10 self-stretch my-auto text-base font-medium text-black whitespace-nowrap max-md:mt-10 max-md:max-w-full">
      {navItems.map((item, index) => (
        <a key={index} href={`#${item.toLowerCase()}`} className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          {item}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;