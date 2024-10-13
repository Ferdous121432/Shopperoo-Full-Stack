/* eslint-disable */
// import React from 'react';

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Suspense } from "react";
import SpinnerFullPage from "./SpinnerFullPage";

const Layout = ({ children }) => (
  <Suspense fallback={<SpinnerFullPage />}>
    <div className="flex overflow-hidden flex-col  bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  </Suspense>
);

export default Layout;
