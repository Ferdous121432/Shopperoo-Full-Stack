/* eslint-disable */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function MenuItem({ icon, text, Link, isActive }) {
  const activeLink = window.location.pathname.split("/")[1];
  const link = Link.split("/")[1];
  console.log(activeLink);
  console.log(link);

  const baseClasses = "flex gap-2 items-center px-4 py-2.5 w-full rounded-md";
  const activeClasses =
    link === activeLink
      ? "font-semibold whitespace-nowrap bg-gray-100 text-zinc-800"
      : "";
  const classes = `${baseClasses} ${activeClasses} ${link === activeLink ? "" : "mt-2"}`;

  return (
    <NavLink to={Link} className={classes}>
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
      />
      <div className="flex-1 shrink self-stretch my-auto basis-0">{text}</div>
    </NavLink>
  );
}

export default MenuItem;
