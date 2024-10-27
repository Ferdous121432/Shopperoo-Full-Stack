/* eslint-disable */
import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useProduct, ProductProvider } from "../context/product";

import Layout from "../components/Layout";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import ShopPage from "../components/PageHeroSection/ShopPage";
import ProductCatalog from "../components/ProductsByCategory/ProductCatalog";
import { AuthProvider } from "../context/AuthProvider";
import Breadcrumb from "../reuseableComponents/Breadcrumb";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../api/apiProduct";
import Button from "../reuseableComponents/Button";
import Constants from "../../constants";

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

export function ErrorElement({ error }) {
  const navigate = useNavigate();
  // console.log(error.);

  return (
    <Layout>
      <div className="my-20 flex w-full flex-col items-center justify-items-center gap-10">
        <h2 className="py-10">Something went wrong</h2>
        {error && <p>{error.message}</p>}
        <Button
          color={Constants.YELLOW_PRIMARY}
          handleClick={() => navigate("/")}
        >
          Back to Homepage
        </Button>
      </div>
    </Layout>
  );
}

export default ProductPage;
