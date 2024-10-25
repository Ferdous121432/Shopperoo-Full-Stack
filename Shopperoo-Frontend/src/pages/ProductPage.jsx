/* eslint-disable */
import React from "react";
import { useLoaderData } from "react-router-dom";
import { useProduct, ProductProvider } from "../context/product";

import Layout from "../components/Layout";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import ShopPage from "../components/PageHeroSection/ShopPage";
import ProductCatalog from "../components/ProductsByCategory/ProductCatalog";
import { AuthProvider } from "../context/AuthProvider";
import Breadcrumb from "../reuseableComponents/Breadcrumb";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../api/apiProduct";

function ProductPage() {
  const products = useLoaderData();
  console.log("products👍", products);

  return (
    <Layout>
      <ProductProvider>
        <Breadcrumb name="Product" />
        <ProductCatalog products={products} />
        <FeatureSection />
      </ProductProvider>
    </Layout>
  );
}

export async function loader({ params }) {
  const { category_id } = params;
  const products = await getProductsByCategory(category_id);
  return products;
}

export default ProductPage;
