/* eslint-disable */
import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const currentURL = window.location.pathname;

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const Breadcrumb = ({ name }) => {
  const createBreadcrumbFromURL = (url) => {
    const pathnames = url
      .split("/")
      .filter((x) => x)
      .slice(0, -1);
    const breadcrumbItems = pathnames.map((name, index) => {
      const path = `/${pathnames.slice(0, index + 1).join("/")}`;
      return { label: name.charAt(0).toUpperCase() + name.slice(1), path };
    });
    return [{ label: "Home", path: "/" }, ...breadcrumbItems];
  };

  const items = createBreadcrumbFromURL(currentURL);
  // console.log(breadcrumbItems);

  return (
    <div
      role="presentation"
      onClick={handleClick}
      className="relative flex min-h-[100px] w-full flex-col items-start justify-center px-4 py-8 md:px-20 md:py-12"
    >
      <img
        loading="lazy"
        src={`${window.location.protocol}//${window.location.host}/public/image/breadcum-image.webp`}
        alt=""
        className="absolute inset-0 size-full object-cover opacity-40"
      />
      <Breadcrumbs aria-label="breadcrumb" sx={{ zIndex: 10, fontWeight: 600 }}>
        {items.map((item, index) => (
          <Link key={index} underline="hover" color="inherit" href={item.path}>
            {item.label}
          </Link>
        ))}
        <Typography sx={{ color: "#065f46", fontWeight: 700 }}>
          {name}
        </Typography>
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
