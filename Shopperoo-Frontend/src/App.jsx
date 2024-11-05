import React from "react";
import { useAuth } from "./context/AuthProvider";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { lazy } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import ProductPage, {
  loader as ProductLoader,
  ErrorElement,
} from "./pages/ProductPage";
import SingleProductPage from "./pages/SingleProductPage";
import Cart from "./pages/Cart";
import ContactUs from "./pages/ContactUs";
import CheckoutPage from "./pages/CheckoutPage";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import RestrictedPage from "./pages/RestrictedPage";
import About from "./pages/About";
import DashboardHome from "./components/Dashboard/DashBoardHome/DashboardHome";
import OrderManagement from "./components/Dashboard/OrderManagement/OrderManagement";
import DashboardLayoutBasic from "./components/MuiHeader/MuiHeader";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import UserProfile from "./pages/UserProfile";

function App() {
  const { state } = useAuth();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "category/:category_id",
      element: <ProductPage />,
      loader: ProductLoader,
      errorElement: <ErrorElement />,
    },
    {
      path: "product/f",
      element: <SingleProductPage />,
    },
    {
      path: "contact-us",
      element: <ContactUs />,
    },
    {
      path: "userprofile",
      element: state.isAuthenticated ? <UserProfile /> : <SignIn />,
      children: [],
    },
    {
      path: "cart",
      element: state.isAuthenticated ? <Cart /> : <SignIn />,
    },
    {
      path: "checkout",
      element: state.isAuthenticated ? <CheckoutPage /> : <SignIn />,
    },
    {
      path: "checkout/:id",
      element: state.isAuthenticated ? <CheckoutPage /> : <SignIn />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "signin",
      element: <SignIn />,
    },
    {
      path: "/product/:product_id",
      element: <SingleProductPage />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "ordermanagement",
      element: <OrderManagement />,
    },
    {
      path: "dashboard",
      element: <DashboardLayoutBasic />,
      children: [
        {
          path: "dashboard",
          element: <DashboardHome />,
        },
        {
          path: "ordermanagement",
          element: <OrderManagement />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </>
  );
}

export default App;
