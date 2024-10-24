/* eslint-disable */
import { useAuth } from "./context/AuthProvider";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { lazy } from "react";

// import ProductPage from "./pages/ProductPage";
// import SingleProductPage from "./pages/SingleProductPage";
// import Home from "./pages/Home";
// import Cart from "./pages/Cart";
// import ContactUs from "./pages/ContactUs";
// import CheckoutPage from "./pages/CheckoutPage";
// import Signup from "./pages/Signup";
// import SignIn from "./pages/SignIn";
// import RestrictedPage from "./pages/RestrictedPage";
// import About from "./pages/About";
// import DashboardHome from "./components/Dashboard/DashBoardHome/DashboardHome";
// import OrderManagement from "./components/Dashboard/OrderManagement/OrderManagement";
// import DashboardLayoutBasic from "./components/MuiHeader/MuiHeader";
// import ErrorPage from "./components/ErrorPage/ErrorPage";

const Home = lazy(() => import("./pages/Home"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const SingleProductPage = lazy(() => import("./pages/SingleProductPage"));
const Cart = lazy(() => import("./pages/Cart"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const Signup = lazy(() => import("./pages/Signup"));
const SignIn = lazy(() => import("./pages/SignIn"));
const RestrictedPage = lazy(() => import("./pages/RestrictedPage"));
const About = lazy(() => import("./pages/About"));
const DashboardHome = lazy(
  () => import("./components/Dashboard/DashBoardHome/DashboardHome"),
);
const OrderManagement = lazy(
  () => import("./components/Dashboard/OrderManagement/OrderManagement"),
);
const ErrorPage = lazy(() => import("./components/ErrorPage/ErrorPage"));
const DashboardLayoutBasic = lazy(
  () => import("./components/MuiHeader/MuiHeader"),
);
const UserProfile = lazy(() => import("./pages/UserProfile"));

// dist/assets/index-59fcab9b.css   30.56 kB │ gzip:   5.14 kB
// dist/assets/index-f7c12d89.js   572.44 kB │ gzip: 151.29 kB

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "product",
    element: <ProductPage />,
  },
  {
    path: "product/f",
    element: <SingleProductPage />,
  },
  {
    path: "checkout",
    element: <CheckoutPage />,
  },
  {
    path: "contact-us",
    element: <ContactUs />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "checkout/:id",
    element: <CheckoutPage />,
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
    path: "restricted",
    element: <RestrictedPage />,
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
    path: "userprofile",
    element: <UserProfile />,
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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
