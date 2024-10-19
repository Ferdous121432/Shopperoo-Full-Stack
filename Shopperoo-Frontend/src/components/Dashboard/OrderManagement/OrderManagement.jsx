/* eslint-disable */
import React from "react";
import TabNavigation from "./TabNavigation";
import SearchAndFilter from "./SearchAndFilter";
import OrderTable from "./OrderTable";
import Pagination from "./Pagination";
import Dashboard from "../Dashboard";

function OrderManagement() {
  return (
    // <Dashboard>
    <main className="flex flex-col">
      <TabNavigation />
      <SearchAndFilter />
      <OrderTable />
      <Pagination />
    </main>
    // {/* </Dashboard> */}
  );
}

export default OrderManagement;
