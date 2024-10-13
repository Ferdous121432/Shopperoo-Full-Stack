/* eslint-disable */
import React from 'react';

function FooterLinks() {
  const linkSections = [
    {
      title: "Links",
      links: ["Home", "Shop", "About", "Contact"]
    },
    {
      title: "Help",
      links: ["Payment Options", "Returns", "Privacy Policies"]
    }
  ];

  return (
    <>
      {linkSections.map((section, index) => (
        <div key={index} className="flex flex-col items-start self-stretch text-base font-medium text-black whitespace-nowrap">
          <h3 className="text-neutral-400">{section.title}</h3>
          <nav>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-12 max-md:mt-10">
                  <a href={`#${link.toLowerCase()}`} className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ))}
    </>
  );
}

export default FooterLinks;