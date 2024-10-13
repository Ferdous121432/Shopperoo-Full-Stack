/* eslint-disable */
// import React from 'react';

import BrowseRange from "../components/BrowseRange/BrowseRange";
import Layout from "../components/Layout";
import NewArrivalSection from "../components/NewArrivalSection/NewArrivalSection";
import ProductsSection from "../components/ProductsSection/ProductsSection";
import { useAuth, AuthProvider } from "../context/AuthProvider";

export default function HomePage() {
  const { state } = useAuth();
  console.log(state);

  return (
    <Layout>
      <NewArrivalSection />
      <BrowseRange />
      <ProductsSection />
    </Layout>
  );
}
