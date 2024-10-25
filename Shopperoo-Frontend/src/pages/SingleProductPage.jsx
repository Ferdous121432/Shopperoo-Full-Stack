/* eslint-disable */
import React from "react";
import { useNavigation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Breadcrumb from "../reuseableComponents/Breadcrumb";
import ProductDetails from "../components/SingleProduct/ProductDetails";
import RelatedProducts from "../components/SingleProduct/RelatedProducts";
import Layout from "../components/Layout";

import { getProductById } from "../api/apiProduct";
import SpinnerFullPage from "../components/SpinnerFullPage";

// const currentURL = window.location.pathname;

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
  const [loadingError, setLoadingError] = useState(false);
  console.log(product);

  useEffect(() => {
    if (!product) {
      const timer = setTimeout(() => {
        setLoadingError(true);
      }, 40000); // 40 seconds timeout

      return () => clearTimeout(timer);
    }
  }, [product]);

  if (loadingError) {
    return (
      <div className="items-center justify-center align-middle">
        Error loading page
      </div>
    );
  }

  if (!product) {
    return <SpinnerFullPage />;
  }

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

  return (
    <Layout>
      <div className="m-0 mx-auto flex flex-col overflow-hidden bg-white pb-12">
        <Breadcrumb name={product.name} />
        <div className="flex justify-center">
          <ProductDetails product={product} />
        </div>

        <div className="mt-[0.5rem] flex flex-wrap items-start justify-center gap-6">
          <RelatedProducts products={relatedProducts} />
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
