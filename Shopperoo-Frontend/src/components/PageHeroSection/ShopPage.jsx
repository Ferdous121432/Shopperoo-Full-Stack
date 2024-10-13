/* eslint-disable */
import React from "react";
import PageHeader from "./PageHeader";

function ShopPage() {
  return (
    <main className="flex flex-col text-black whitespace-nowrap">
      <PageHeader title="Shop" breadcrumbs={["Home", "Shop"]} />
    </main>
  );
}

export default ShopPage;