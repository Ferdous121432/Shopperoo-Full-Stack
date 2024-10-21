/* eslint-disable */
import React from "react";
import PageHeader from "./PageHeader";

function ShopPage() {
  return (
    <main className="flex flex-col whitespace-nowrap text-red-900">
      <PageHeader title="Shop" breadcrumbs={["Home", "Shop"]} />
    </main>
  );
}

export default ShopPage;
