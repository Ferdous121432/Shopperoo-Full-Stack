/* eslint-disable */
import React from 'react';

const FooterColumn = ({ title, items }) => {
  return (
    <nav className="flex flex-col items-start self-stretch text-base font-medium text-black whitespace-nowrap">
      <h3 className="text-neutral-400">{title}</h3>
      <ul className="list-none p-0">
        {items.map((item, index) => (
          <li key={index} className={`mt-${index === 0 ? '14' : '12'} max-md:mt-10`}>
            <a href="#" className="text-black hover:underline">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterColumn;