/* eslint-disable */
import React from "react";
import MenuItem from "./MenuItem";

function MenuSection({ title, items, section, handleItemClick }) {
  return (
    <section>
      <h2 className="gap-2 self-stretch px-8 py-4 w-full rounded-md">
        {title}
      </h2>
      <div className="flex flex-col px-3.5 w-full text-base leading-none">
        {items.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            text={item.text}
            Link={item.Link}
            active={item.isActive}
            onClick={() => handleItemClick(section, index)}
          />
        ))}
      </div>
    </section>
  );
}

export default MenuSection;
