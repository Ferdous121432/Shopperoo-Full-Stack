/* eslint-disable */
import React from "react";
import Layout from "../components/Layout";
import BrowseRange from "../components/BrowseRange/BrowseRange";
import NewArrivalSection from "../components/NewArrivalSection/NewArrivalSection";
import ProductsSection from "../components/ProductsSection/ProductsSection";

export default function Home() {
  return (
    <Layout>
      <NewArrivalSection />
      <BrowseRange />
      <ProductsSection />
    </Layout>
  );
}
