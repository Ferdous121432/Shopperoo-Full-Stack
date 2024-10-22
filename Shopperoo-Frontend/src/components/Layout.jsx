/* eslint-disable */
// import React from 'react';

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Suspense } from "react";
import SpinnerFullPage from "./SpinnerFullPage";

const Layout = ({ children }) => (
  <Suspense fallback={<SpinnerFullPage />}>
    <div className="relative flex flex-col overflow-hidden bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  </Suspense>
);

export default Layout;
