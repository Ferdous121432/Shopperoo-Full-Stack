/* eslint-disable */
import React from 'react';
import ProductCard from './ProductCard';

const productData = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e98631ae2f66dffb40e81f4ed9492e0d8a842811cfb6ddc4d156a5f63e9f3f2e?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    discount: "-30%",
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fbe3154f8a774dfb24ed753b8bcead165866d2889fb3b7bb928f50dcefc449e1?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fbe3154f8a774dfb24ed753b8bcead165866d2889fb3b7bb928f50dcefc449e1?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    discount: "-50%",
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/00b059d80057ee55fde92459d54a41dbefb1617462a2c493d350949b6e308f86?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    newProduct: true,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000"
  }
];

const ProductGrid = () => {
  return (
    <section className="flex flex-wrap gap-8 items-center max-md:max-w-full">
      {productData.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </section>
  );
};

export default ProductGrid;