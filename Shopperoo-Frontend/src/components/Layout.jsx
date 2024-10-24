/* eslint-disable */
import React from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Suspense } from "react";
import SpinnerFullPage from "./SpinnerFullPage";
import { Margin } from "@mui/icons-material";

const Layout = ({ children }) => {
  const [headerHeight, setHeaderHeight] = React.useState(0);
  return (
    <Suspense fallback={<SpinnerFullPage />}>
      <div className="relative flex flex-col overflow-hidden bg-white">
        <Header setHeaderHeight={setHeaderHeight} />
        <main className="mb-20" style={{ marginTop: `${headerHeight}px` }}>
          {children}
        </main>
        <Footer />
      </div>
    </Suspense>
  );
};

export default Layout;
