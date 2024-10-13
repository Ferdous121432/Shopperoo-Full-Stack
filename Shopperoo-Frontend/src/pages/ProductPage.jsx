/* eslint-disable */
import React from "react";
import { useProduct, ProductProvider } from "../context/product";

import Layout from "../components/Layout";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import ShopPage from "../components/PageHeroSection/ShopPage";
import ProductCatalog from "../components/ProductsByCategory/ProductCatalog";
import { AuthProvider } from "../context/AuthProvider";

function ProductPage() {
  return (
    <Layout>
      <ProductProvider>
        <ShopPage />
        <ProductCatalog />
        <FeatureSection />
      </ProductProvider>
    </Layout>
  );
}

export default ProductPage;
