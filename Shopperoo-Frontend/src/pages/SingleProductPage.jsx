/* eslint-disable */
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Breadcrumb from "../components/SingleProduct/Breadcrumb";
import ProductDetails from "../components/SingleProduct/ProductDetails";
import RelatedProducts from "../components/SingleProduct/RelatedProducts";
import Layout from "../components/Layout";

import { getProductById } from "../api/apiProduct";

const ProductPage = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProductById(product_id);
        setProduct(fetchedProduct.data.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProduct();
  }, [product_id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "Asgaard sofa", path: "/shop/asgaard-sofa" },
  ];

  const productData = {
    name: "Asgaard sofa",
    price: 250000.0,
    rating: 4,
    reviewCount: 5,
    description:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    sizes: ["L", "XL", "XS"],
    colors: ["#9F73AB", "#000000", "#B88E2F"],
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cffdaab977ea8691467dcd5daa95166d0f5ec1cdf7893e255cdd25dffaf81ed1?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
  };

  const relatedProducts = [
    {
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: 2500000,
      originalPrice: 3500000,
      discount: 30,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e98631ae2f66dffb40e81f4ed9492e0d8a842811cfb6ddc4d156a5f63e9f3f2e?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    },
    {
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: 2500000,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fbe3154f8a774dfb24ed753b8bcead165866d2889fb3b7bb928f50dcefc449e1?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    },
    {
      name: "Lolito",
      description: "Luxury big sofa",
      price: 7000000,
      originalPrice: 14000000,
      discount: 50,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fbe3154f8a774dfb24ed753b8bcead165866d2889fb3b7bb928f50dcefc449e1?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: 500000,
      isNew: true,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/00b059d80057ee55fde92459d54a41dbefb1617462a2c493d350949b6e308f86?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    },
  ];

  console.log(product);

  return (
    <Layout>
      <div className="flex overflow-hidden flex-col pb-12 bg-white">
        <Breadcrumb items={breadcrumbItems} />
        <ProductDetails product={product} />
        <RelatedProducts products={relatedProducts} />
      </div>
    </Layout>
  );
};

export default ProductPage;
