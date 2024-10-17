/* eslint-disable */
import React from "react";
import MenuItem from "./MenuItem";
import MenuSection from "./MenuSection";
import { Link } from "react-router-dom";

function Sidebar() {
  const [active, setActive] = React.useState(false);

  const handleActiveClass = () => {
    (active) => setActive(!active);
  };

  const mainMenuItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/50368e4bb46d6b6644f78e78c6e55ec01560f52299363960e72950059863acd8?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
      text: "Dashboard",
      Link: "/dashboard",
      isActive: active,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3a248e0df02079d57e337f854325c523c5c6dc1638dd18b10ef9a15cdbdbafea?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
      text: "Order Management",
      Link: "/ordermanagement",
      isActive: active,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1befb68f5460f90e18802fb1f87b8b5d3753154d2ba95bf0d68b1ed15006445f?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
      text: "Customers",
      Link: "/customers",
      isActive: active,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/63f3e281a084c0a47079f9e1b34845bd13b1d446b3d63d3d04a3352081131406?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
      text: "Coupon Code",
      Link: "/couponcode",
      isActive: active,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa0d1a0fc9218b51eda644a0b66a5a17dfb04480aed6d46bfc5d5abf5d86b6fd?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
      text: "Categories",
      Link: "/categories",
      isActive: active,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e8e8136b1596cde3ba7abf429db8790df0d6b609b99b836afde653e4b89ac863?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
      text: "Transaction",
      Link: "/transaction",
      isActive: active,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/95e0bf5bf1cfa42156e4e085e21185f920f674380e5f23d6aab314e8d8e9095c?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
      text: "Brand",
      Link: "/brand",
      isActive: active,
    },
  ];

  const productMenuItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/787c73d78422d6a954ff79b65100c98f167a0dd49a3bc07a1c9ede9c230225b5?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
      text: "Add Products",
      Link: "/addproducts",
      isActive: active,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/360f468980412c6fc7991c2a5df81fcfa4f9970c087b4657d2f78b627f2274fb?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
      text: "Product List",
      Link: "/productlist",
      isActive: active,
    },
  ];

  const adminMenuItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/02255805085338ff20a9aef3e521d963761e6bad9178bb05bf362718f1c4fdd9?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
      text: "Manage Admins",
      Link: "/manageadmins",
      isActive: active,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e072c1e21361160b0b191c06e7c2e122009d2955b8964b0ba3caf9a31f6b7999?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
      text: "Admin Roles",
      Link: "/adminroles",
      isActive: active,
    },
  ];

  return (
    <nav className="flex flex-col pb-2.5 text-xs leading-none bg-white max-w-[320px] text-neutral-400  ">
      <MenuSection title="MAIN MENU" items={mainMenuItems} />
      <MenuSection title="PRODUCTS" items={productMenuItems} />
      <MenuSection title="ADMIN" items={adminMenuItems} />
    </nav>
  );
}

export default Sidebar;
