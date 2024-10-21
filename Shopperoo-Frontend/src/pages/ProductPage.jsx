/* eslint-disable */
import React from "react";
import { useProduct, ProductProvider } from "../context/product";

import Layout from "../components/Layout";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import ShopPage from "../components/PageHeroSection/ShopPage";
import ProductCatalog from "../components/ProductsByCategory/ProductCatalog";
import { AuthProvider } from "../context/AuthProvider";
import Breadcrumb from "../reuseableComponents/Breadcrumb";

function ProductPage() {
  return (
    <Layout>
      <ProductProvider>
        <Breadcrumb name="Product" />
        <ProductCatalog />
        <FeatureSection />
      </ProductProvider>
    </Layout>
  );
}

export default ProductPage;
