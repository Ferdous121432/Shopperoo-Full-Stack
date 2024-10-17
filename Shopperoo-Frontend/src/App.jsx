/* eslint-disable */
import { useAuth } from "./context/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  () => import("./components/Dashboard/DashBoardHome/DashboardHome")
);
const OrderManagement = lazy(
  () => import("./components/Dashboard/OrderManagement/OrderManagement")
);
const ErrorPage = lazy(() => import("./components/ErrorPage/ErrorPage"));

// dist/assets/index-59fcab9b.css   30.56 kB │ gzip:   5.14 kB
// dist/assets/index-f7c12d89.js   572.44 kB │ gzip: 151.29 kB

function App() {
  const { state } = useAuth();
  console.log(state);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="product/f" element={<SingleProductPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout/:id" element={<CheckoutPage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="restricted" element={<RestrictedPage />} />
        <Route path="/product/:product_id" element={<SingleProductPage />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<DashboardHome />} />
        <Route path="ordermanagement" element={<OrderManagement />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
