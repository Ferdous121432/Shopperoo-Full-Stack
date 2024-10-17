/* eslint-disable */
import React from "react";
import Layout from "../Layout";
import Sidebar from "./Sidebar/Sidebar";

export default function Dashboard({ children }) {
  return (
    <Layout>
      <div className="flex">
        <Sidebar />
        <main className="flex-grow">{children}</main>
      </div>
    </Layout>
  );
}
